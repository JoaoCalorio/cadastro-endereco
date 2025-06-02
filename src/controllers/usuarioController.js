const UsuarioService = require('../services/UsuarioService');
const service = new UsuarioService();

exports.getUsuarios = async (req, res) => {
  try {
    console.log("Buscando todos os usuários...");
    const usuarios = await service.listarTodos();
    console.log("Usuários encontrados:", usuarios);
    res.json(usuarios);
  } catch (error) {
    console.error("Erro ao listar usuários:", error.message);
    console.error("Stack completo:", error.stack);
    res.status(500).json({ erro: 'Erro ao listar usuários.' });
  }
};

exports.postUsuario = async (req, res) => {
  const dados = req.body;
  try {
    console.log("Dados recebidos para cadastro:", dados);

    const novoUsuario = await service.criarUsuarioUnificado(dados);
    console.log("Usuário criado com sucesso:", novoUsuario);

    res.status(201).json(novoUsuario);
  } catch (error) {
    console.error("Erro ao criar usuário:", error.message);
    console.error("Detalhes do erro:", error.stack);
    res.status(500).json({ erro: 'Erro ao criar usuário.' });
  }
};

exports.deleteUsuario = async (req, res) => {
  try {
    console.log("Tentando deletar usuário com ID:", req.params.id);

    const sucesso = await service.deletarUsuario(req.params.id);
    if (sucesso) {
      console.log("Usuário deletado com sucesso.");
      res.status(200).json({ mensagem: 'Usuário deletado.' });
    } else {
      console.warn("Usuário não encontrado:", req.params.id);
      res.status(404).json({ erro: 'Usuário não encontrado.' });
    }
  } catch (error) {
    console.error("Erro ao deletar usuário:", error.message);
    console.error("Stack completo:", error.stack);
    res.status(500).json({ erro: 'Erro ao deletar usuário.' });
  }
};