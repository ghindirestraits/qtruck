# QAcademy - Bootcamp em Cypress

Este repo foi criado para versionar o projeto de testes da aplicação Qtruck. Esta aplicação foi desenvolvida especialmente para as aulas do Bootcamp em Cypress [Avançado] e se trata de um recomendador e avaliador de foodtrucks.

## Estrutura de Pastas

O repositório está organizado da seguinte forma:

```bash
├── backend
|   ├── src
|   ├── babel.config.js
|   ├── package.json
|   ├── tsconfig.json
|   ├── yarn.lock
├── frontend
|   ├── public
|   ├── src
|   ├── package.json
|   ├── tsconfig.json
|   ├── yarn.lock
├── tests
|   ├── cypress
|       ├── downloads
|       ├── e2e
|           ├── [test suites under this folder]
|       ├── fixtures
|       ├── support
|           ├── commands.js
|           ├── e2e.js
|       ├── cypress.config.js
|       ├── package.json
|       ├── yarn.lock
├── README
```

Toda arquitetura de testes, suites, funções e configurações referentes a validação pode ser encontrada sobre a pasta `cypress`.

## 🔖 Estórias de Usuários & Critérios de Aceitação

As estórias para validação, bem como seus critérios de aceite (requisitos), da aplicação são as seguintes:

### Login (Autenticação)

- **Sendo** um usuário cadastrado
- **Posso** fazer login na aplicação
- **Para** poder recomendar e /ou avaliar foodtrucks

#### Critérios de aceitação

- [ ] Login com sucesso
- [ ] Senha inválida
- [ ] Instagram não cadastrado
- [ ] Instagram no formato incorreto
- [ ] Todos os campos devem ser obrigatórios

### Cadastro de usuário

- **Sendo** visitante do site com experiências gastronômicas em comida de rua
- **Posso** fazer o meu cadastro
- **Para** poder recomendar e /ou avaliar foodtrucks

#### Critérios de aceitação

- [ ] Cadastro de novo usuário
- [ ] Instagram já foi cadastrado
- [ ] Todos os campos são obrigatórios
- [ ] Instagram deve estar no formato correto
- [ ] Senha deve ter pelo menos 6 dígitos

### Recomendação

- **Sendo** um usuário cadastrado e com experiências gastronômicas
- **Posso** posso recomendar foodtrucks
- **Para** poder compartilhar essa experiencia com os demais usuários da comunidade

#### Critérios de aceitação

- [ ] Recomendar food truck
- [ ] Localização deve ser informada
- [ ] Food truck já recomendado
- [ ] Todos os campos são obrigatórios

### Avaliação

- **Sendo** um usuário já cadastrado que teve experiencias em food truck já recomendado
- **Posso** enviar uma avaliação
- **Para** para poder compartilhar essa experiencia com os demais usuários da comunidade

#### Critérios de aceitação

- [ ] Enviar avaliação
- [ ] Usuário já enviou a avaliação
- [ ] Todos os campos são obrigatórios
