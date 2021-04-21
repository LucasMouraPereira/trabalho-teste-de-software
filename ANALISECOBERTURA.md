# Análise do Teste de Cobertura

O teste de cobertura serve para verificar o código que nunca é executado, ele te ajuda a entender quando algum código, está sendo executado e descobre linhas supérfluas.

O script **yarn test:coverage** roda o teste de cobertura do jest e nos trás um html como relatório simples e prático para análisar.

A interface html nos retorna uma tabela que análisa 4 métricas:

1. Statements => Statements é a quantidade de instuções que executa uma ação.
- Exemplo: if, for, while.

2. Branches => Branches é a quantidade de condicionais que não foram executadas.

3. Functions => Functions é a proporção de função que foram definidas e quais foram chamadas.

4. Lines => A proporção de linhas do seu código que foram executadas.

Nos testes de cobertura desse projeto conseguimos uma cobertura de 100% em todas as 4 métricas. O jest conseguiu levantar 29 statements, 11 branches, 3 functions e 29 lines.

Ao clicamos no nome do arquivo da tabela no html é possível ver o código que foi coberto pelo jest. Se alguma linha do código não estivesse sendo executada ele apontaria esta linha em uma cor rosa indicando que essa deve ser revisada.
