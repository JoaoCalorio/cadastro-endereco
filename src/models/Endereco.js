class Endereco {
  constructor({ id, rua, bairro, numero, cep, cidade, uf }) {
    this.id = id;
    this.rua = rua;
    this.bairro = bairro;
    this.numero = numero;
    this.cep = cep;
    this.cidade = cidade;
    this.uf = uf;
  }
}

module.exports = Endereco;
