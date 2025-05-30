class Usuario {
  constructor({ id, nome, idade, nacionalidade, profissao, bio, hobbies, endereco_id }) {
    this.id = id;
    this.nome = nome;
    this.idade = idade;
    this.nacionalidade = nacionalidade;
    this.profissao = profissao;
    this.bio = bio;
    this.hobbies = hobbies;
    this.endereco_id = endereco_id;
  }
}

module.exports = Usuario;
