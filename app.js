function sortear() {
  const quantidade = parseInt(document.getElementById('quantidade').value);
  const de = parseInt(document.getElementById('de').value);
  const ate = parseInt(document.getElementById('ate').value);

  const resultado = document.getElementById('resultado');

  // Validações básicas
  if (isNaN(quantidade) || isNaN(de) || isNaN(ate)) {
    resultado.innerHTML = "<p style='color:red;'>Preencha todos os campos corretamente.</p>";
    return;
  }

  if (de >= ate) {
    resultado.innerHTML = "<p style='color:red;'>'Do número' deve ser menor que 'Até o número'.</p>";
    return;
  }

  const intervalo = ate - de + 1;
  if (quantidade > intervalo) {
    resultado.innerHTML = "<p style='color:red;'>Quantidade maior que o intervalo disponível.</p>";
    return;
  }

  const sorteados = [];

  while (sorteados.length < quantidade) {
    let numero = obterNumeroAleatorio(de, ate);
    if (!sorteados.includes(numero)) {
      sorteados.push(numero);
    }
  }

  resultado.innerHTML = `<p>Números sorteados: <span>${sorteados.join(", ")}</span></p>`;
  alterarStatusBotao();
}

function obterNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao() {
  const botao = document.getElementById('btn-reiniciar');
  botao.disabled = false;
}

function reiniciar() {
  document.getElementById('quantidade').value = '';
  document.getElementById('de').value = '';
  document.getElementById('ate').value = '';
  document.getElementById('resultado').innerHTML = 'Números sorteados: <span>Nenhum ainda</span>';

  const botao = document.getElementById('btn-reiniciar');
  botao.disabled = true;
}
