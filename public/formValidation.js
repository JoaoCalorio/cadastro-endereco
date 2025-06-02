document.getElementById("formCadastro").addEventListener("submit", async function (e) {
  e.preventDefault();

  const formData = new FormData(this);
  const data = {};

  // Preenche os dados do usuário e endereço
  for (const [key, value] of formData.entries()) {
    if (['rua', 'bairro', 'numero', 'cep', 'cidade', 'uf'].includes(key)) {
      if (!data.endereco) data.endereco = {};
      data.endereco[key] = key === 'numero' || key === 'cep' ? parseInt(value) : value;
    } else {
      // Converte campos numéricos
      data[key] = key === 'idade' ? parseInt(value) : value;
    }
  }

  try {
    const response = await fetch("/api/usuarios", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      alert("Usuário cadastrado!");
      this.reset();
    } else {
      alert("Erro ao cadastrar usuário.");
    }

  } catch (error) {
    console.error("Erro ao enviar:", error);
    alert("Erro de conexão.");
  }
});