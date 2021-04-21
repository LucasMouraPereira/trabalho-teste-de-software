class HandsOnTeste {  
  numeroPerfeito = (num: number) => {
    let soma = 0
    for(let i = 1; i <= num/2; i++){
      if(num % i === 0) {
        soma = soma + i;
      }
    }
    if(soma === num){
      return true;
    }
    return false;
  };

  validaID = (id: string) => {
    const primeiroDigito = id.substr(0, 1);
    const regex = /\W|_/;
    if(id.length >= 1 && id.length <= 6) {
      if(isNaN(Number(primeiroDigito)) === true) {
        if(regex.test(id) === false) {
          return true;
        }
      }
    }
    return false;
  };
}

export { HandsOnTeste };

