# Projeto Fullstack: Cadastro de Usuário com Endereço

Este é um projeto fullstack desenvolvido em Node.js com PostgreSQL e frontend em HTML, CSS e JavaScript puro. A aplicação permite cadastrar usuários junto de seus respectivos endereços, armazenando os dados em um banco relacional.


##  Autor

**Desenvolvido por [João Lucas de Calorio](https://github.com/JoaoCalorio)**

 Projeto criado com fins de estudo e prática nas seguintes tecnologias:

- **Node.js (Backend)**
- **PostgreSQL (Banco de dados)**
- **Docker (Ambiente isolado)**
- **API REST**


##  Tecnologias Utilizadas

- **Backend**: Node.js + Express + Programação Orientada a Objetos (POO)
- **Banco de Dados**: PostgreSQL
- **ORM**: Nenhum (consultas com `pg`)
- **Frontend**: HTML, CSS e JavaScript
- **Ambiente**: Docker + Docker Compose
- **Gerenciador de Pacotes**: npm

---

##  Funcionalidades

- Cadastro unificado de usuário e endereço
- Listagem de todos os usuários com seus respectivos endereços
- Remoção de usuário (e remoção automática do endereço vinculado)

---

##  Campos do Formulário

###  Usuário

- Nome completo
- Idade
- Nacionalidade
- Profissão
- Bio
- Hobbies

###  Endereço

- Rua
- Bairro
- Número
- CEP
- Cidade
- UF

---

##  Estrutura do Projeto

```bash
.
├── public/              # Arquivos estáticos (HTML, CSS, JS)
│   ├── index.html
│   ├── css/
│   └── js/
├── src/
│   ├── config/
│   │   └── db.js        # Configuração da conexão com PostgreSQL
│   ├── controllers/
│   │   └── usuarioController.js
│   ├── models/
│   │   ├── Usuario.js
│   │   └── Endereco.js
│   ├── routes/
│   │   └── usuarioRoutes.js
│   ├── services/
│   │   └── UsuarioService.js
│   └── server.js        # Ponto de entrada da API
├── .env
├── Dockerfile
├── docker-compose.yml
├── package.json
└── README.md

```


---

##  Como Executar com Docker

```bash
# 1. Build e start dos containers
docker compose up --build

# 2. Acesse a aplicação
http://localhost:3000
```

##  Como Testar

1. Acesse [`http://localhost:3000`](http://localhost:3000)
2. Preencha o formulário com os dados do usuário e endereço
3. Clique em **"Enviar"**
4. Se tudo ocorrer bem, aparecerá o alerta:  
   **"Usuário cadastrado!"**
5. Para confirmar se os dados foram salvos no banco:

   - Acesse o banco PostgreSQL via **pgAdmin** ou **terminal**
   - Verifique as tabelas:  
     - `usuarios`  
     - `enderecos`


## Rotas da API

| Método | Rota               | Descrição                               |
| ------ | ------------------ | --------------------------------------- |
| GET    | /api/usuarios      | Lista todos os usuários com endereços   |
| POST   | /api/usuarios      | Cria novo usuário com endereço          |
| DELETE | /api/usuarios/\:id | Remove o usuário e o endereço associado |

