export function geradorDeTagsDeIdentificacao(nome) {
  return nome.toUpperCase();
}

export function verificarSePodeSerAdotado(idade, porte) {
  if (porte === 'M' && idade === 1) {
    return true;
  }
  return false;
}

export function calcularConsumoDeRacao(nome, idade, peso) {
  console.log(`Calculando consumo de ração para ${nome}, idade: ${idade}, peso: ${peso}`);
  return peso*300; // 300 gramas por kg de peso
}

export function decidirTipoDeAtividadePorPorte(porte) {
  switch (porte) {
    case 'pequeno':
      return 'brincar dentro de casa';
    case 'médio': 
      return 'caminhada no quarteirão';       
    case 'grande':
      return 'correr no parque';
    default:
      return 'porte invalido';
  }
}

export async function buscarDadoAsync() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Pipoca');
    }, 1000);
  });
}
