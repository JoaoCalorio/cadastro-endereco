document.getElementById('formCadastro').addEventListener('submit', async (e) => {
      e.preventDefault();
      const form = new FormData(e.target);
      const data = Object.fromEntries(form.entries());

      const response = await fetch('/api/usuarios', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        alert('Usuário cadastrado!');
        e.target.reset();
      } else {
        alert('Erro ao cadastrar.');
      }
    });