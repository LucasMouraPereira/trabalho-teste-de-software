# Análise do Teste de Mutação

Com apenas o teste de cobertura podemos garantir quais linhas foram executadas em nosso código, porém não é possível garantir se todos os cenários de teste foram cobertos.

Com isso, o teste de mutação é importante e começa a fazer sentido. O teste de mutação irá detectar todos os pontos que podem ser alterados no código e atua em cima deles. A cada alteração feita, todos os testes criados são executados. Se algum teste quebrar, significa que aquela mutação está coberta.

O script **yarn test:mutation** roda o teste de mutação do stryker e nos trás um html como relatório simples e prático para análisar.

A interface html nos retorna uma tabela que análisa 10 métricas, o que é de importante análisar são os mutantes mortos, quais sobreviveram, e total de mutantes de cada arquivo coberto pelo teste:

1. Killed => mutantes mortos.

2. survived => mutantes sobreviventes.

3. total mutantes => total de mutantes.

No arquivo **handsOnTeste.js** onde esta nossas funções, o teste de mutação apontou um total de 45 mutantes possíveis para nosso código. Apenas 1 mutante sobreviveu. 43 foram mortos por nossa cobertura de teste unitário e 1 mutante não foi detectado. 97,78% do nosso arquivo foi coberto pelo teste de mutação.

Ao clicamos no nome do arquivo da tabela no html é possível ver o código que foi coberto pelo stryker. Nós podemos marcar se queremos ver a parte do código onde esta os mutantes mortos, os que sobreviveram e onde o levou mais tempo para o codigo ser executado.

Na função validaID o stryker apontou uma mutação na linha 18 que não foi morta pelo nossos testes unitários. Dessa forma, podemos refatorar a linha de código de modo que nossos teste cubra, ou criamos um teste unitário que cubra esta linha.
