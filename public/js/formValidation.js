document.getElementById("userForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = this.nome.value;
  const profissao = this.profissao.value;
  const bio = this.bio.value;

  const nomeValido = /^[A-Za-zÀ-ÿ\s]{1,200}$/.test(nome);
  const profissaoValida = /^[A-Za-zÀ-ÿ\s]{1,50}$/.test(profissao);
  const bioValida = /^[\w\s.,!?]{1,400}$/.test(bio);

  if (!nomeValido || !profissaoValida || !bioValida) {
    alert("Erro de validação nos campos do formulário.");
    return;
  }

  // Enviar via fetch() para backend
});
