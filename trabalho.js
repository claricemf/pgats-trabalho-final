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
  if (peso === 14.5) {
    return 4350;
  } 
}

export function decidirTipoDeAtividadePorPorte(porte) {
  if (porte === 'pequeno') {
    return 'brincar dentro de casa';
  } 
}

export async function buscarDadoAsync() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Pipoca');
    }, 1000);
  });
}
