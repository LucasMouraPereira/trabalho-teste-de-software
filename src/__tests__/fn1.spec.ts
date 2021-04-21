import { HandsOnTeste } from '../handsOnTeste';

const handsOnTeste = new HandsOnTeste ();

describe('Testa a função numeroPerfeito e a função validaID', () => {
  // testes numeroPerfeito
  it('Deve retornar verdadeiro para numeros prefeitos', () => {
    expect(handsOnTeste.numeroPerfeito(28)).toBe(true);
  });

  it('Deve retornar falso para numeros que não são prefeitos', () => {
    expect(handsOnTeste.numeroPerfeito(7)).toBe(false);
  });

  // testes validaID
  it('Deve retornar verdadeiro para a senha com o primeiro caracter letra, tamanho menor que seis e maior que um e sem caracteres especiais', () => {
    expect(handsOnTeste.validaID('abc12')).toBe(true);
  });

  it('Deve retornar verdadeiro para senhas só com letras', () => {
    expect(handsOnTeste.validaID('abcdef')).toBe(true);
  });

  it('Deve retornar verdadeiro para senhas com um caracter no minimo e deve ser letra', () => {
    expect(handsOnTeste.validaID('a')).toBe(true);
  });

  it('Deve retornar falso para a senha com mais de 6 caracteres', () => {
    expect(handsOnTeste.validaID('abcdefghi')).toBe(false);
  });

  it('Deve retornar falso para senhas que o primeiro caracter não seja letra', () => {
    expect(handsOnTeste.validaID('1soma')).toBe(false);
  });

  it('Deve retornar falso para a senha que tiver caracteres especiais', () => {
    expect(handsOnTeste.validaID('dcont*')).toBe(false);
  });
});
