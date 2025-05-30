const UsuarioService = require('../services/UsuarioService');
const service = new UsuarioService();

exports.getUsuarios = async (req, res) => {
  try {
    const usuarios = await service.listarTodos();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao listar usuários.' });
  }
};

exports.postUsuario = async (req, res) => {
  try {
    const usuario = await service.criarUsuarioUnificado(req.body);
    res.status(201).json(usuario);
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao criar usuário.' });
  }
};

exports.deleteUsuario = async (req, res) => {
  try {
    const sucesso = await service.deletarUsuario(req.params.id);
    if (sucesso) {
      res.status(200).json({ mensagem: 'Usuário deletado.' });
    } else {
      res.status(404).json({ erro: 'Usuário não encontrado.' });
    }
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao deletar usuário.' });
  }
};
