![/doc/testing.png]
# Teste de Software

**Nome:** Lucas Moura Pereira

## Requisitos

- [Node](https://nodejs.org/en/)
- [NPM](https://docs.npmjs.com/cli/v7/commands/npm)
- [Yarn](https://classic.yarnpkg.com/en/)

## Guia de arquivos

- jest.config.js => Configuração jest para testes unitários e testes de cobertura.
- stryker.conf.js => Configuração stryker para testes de mutação.
- tsconfig.json => Configuração do typescript para rodar em conjunto com os testes.
- package.json => Dependencias e scripts de comandos do projeto.
- src/handsOnTeste.ts => Implementação das funções.
- src/__tests__/handsOnTeste.spec.ts => Implementação da funções de teste unitários.
- reposts/jest-converage/Icov-report/index.html => Ao abrir no navegador é possivel ver o resultado dos testes de cobertura. 
- reposts/mutation/htm/index.html => Ao abrir no navegador é possivel ver o resultado dos testes de mutação. 
- src/server.ts => servidor do projeto roda na porta 3000.

## Guia de inicio

- Navege pelo terminal até a pasta handson. 
- Para baixar as dependencias do projeto é necessário rodar o comando:
**yarn** 

## Guia de comandos

1. **yarn dev** => rodar o servidor
2. **yarn test** => rodar teste unitário com o jest
3. **yarn test:coverage** => rodar teste de cobertura
4. **yarn test:mutation** => rodar teste de mutação



