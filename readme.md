# Cypress Heroes Demo

Este repositório é um projeto de demonstração que usa Cypress para executar testes end-to-end.

## 🚀 Iniciando

1. Clone o projeto.
2. No diretório raiz do monorepo, execute:

```sh
npm install
```

3. Configure banco de dados e demais dependências:

```sh
npm run setup
```

4. Para iniciar em modo desenvolvimento:

```sh
npm run dev
```

A aplicação ficará disponível em http://localhost:3000 (cliente) e o backend em http://localhost:3001.


## 🛠️ Comandos importantes

- `npm install` - instala as dependências do monorepo.
- `npm run setup` - configura banco de dados e realiza seeding inicial.
- `npm run dev` - executa frontend e backend em modo desenvolvimento.
- `npm run resetdb` - reseta o banco de dados para o estado inicial (seed).


## 🧪 Testes com Cypress

Dentro da pasta client, rode o comando abaixo para realizar os testes.

```sh
npm run test:e2e
```


## 📊 Relatórios com Allure

Após executar os testes do Cypress, gere o relatório Allure:

```sh
npm run allure:report
npm run allure:open
```

Após 'allure:open', o Allure será executado diretamente no seu navegador.

### Exemplo de fluxo completo

1. `npm run setup`
2. `npm run dev`
3. `npm run test:e2e`
4. `npm run allure:report`
5. `npm run allure:open`

## 📝 Notas

- Este README foi adaptado para o fluxo descrito nas instruções: `npm install`, `npm run setup`, `npm run dev`, e execução de testes com geração de relatório Allure.
- Ajuste scripts conforme necessário para sua stack e convenções.
