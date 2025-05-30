const pool = require('../config/db');
const Usuario = require('../models/Usuario');
const Endereco = require('../models/Endereco');

class UsuarioService {
  async listarTodos() {
    const res = await pool.query(`
      SELECT u.*, e.rua, e.bairro, e.numero, e.cep, e.cidade, e.uf
      FROM usuarios u
      JOIN enderecos e ON u.endereco_id = e.id
    `);
    
    return res.rows.map(row => {
      const endereco = new Endereco({
        id: row.endereco_id,
        rua: row.rua,
        bairro: row.bairro,
        numero: row.numero,
        cep: row.cep,
        cidade: row.cidade,
        uf: row.uf
      });

      return new Usuario({
        id: row.id,
        nome: row.nome,
        idade: row.idade,
        nacionalidade: row.nacionalidade,
        profissao: row.profissao,
        bio: row.bio,
        hobbies: row.hobbies,
        endereco_id: endereco.id,
        endereco 
      });
    });
  }

  async criarUsuarioUnificado(dados) {
    const {
      nome, idade, nacionalidade, profissao, bio, hobbies,
      rua, bairro, numero, cep, cidade, uf
    } = dados;

    const client = await pool.connect();
    try {
      await client.query('BEGIN');

      const endereco = new Endereco({ rua, bairro, numero, cep, cidade, uf });

      const enderecoRes = await client.query(
        `INSERT INTO enderecos (rua, bairro, numero, cep, cidade, uf)
         VALUES ($1, $2, $3, $4, $5, $6) RETURNING id`,
        [endereco.rua, endereco.bairro, endereco.numero, endereco.cep, endereco.cidade, endereco.uf]
      );

      const endereco_id = enderecoRes.rows[0].id;

      const usuario = new Usuario({ nome, idade, nacionalidade, profissao, bio, hobbies, endereco_id });

      const usuarioRes = await client.query(
        `INSERT INTO usuarios (nome, idade, nacionalidade, profissao, bio, hobbies, endereco_id)
         VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING id`,
        [
          usuario.nome, usuario.idade, usuario.nacionalidade, usuario.profissao,
          usuario.bio, usuario.hobbies, usuario.endereco_id
        ]
      );

      await client.query('COMMIT');
      return { id: usuarioRes.rows[0].id };
    } catch (err) {
      await client.query('ROLLBACK');
      throw err;
    } finally {
      client.release();
    }
  }

  async deletarUsuario(id) {
    const client = await pool.connect();
    try {
      await client.query('BEGIN');

      await client.query(`DELETE FROM usuarios WHERE id = $1`, [id]);

      await client.query('COMMIT');
      return true;
    } catch (err) {
      await client.query('ROLLBACK');
      throw err;
    } finally {
      client.release();
    }
  }
}

module.exports = UsuarioService;
