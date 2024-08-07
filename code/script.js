const formulario = document.querySelector("#formulario");
const resultadoTexto = document.querySelector("#resultadoTexto");

function calculoImc(altura, peso) {
  return peso / (altura * altura);
}

formulario.onsubmit = (event) => {
  event.preventDefault();

  const altura = parseFloat(document.querySelector("#altura").value);
  const peso = parseFloat(document.querySelector("#peso").value);

  const imc = calculoImc(altura, peso)

  // Faça condicionais verificando os dados fornecidos
  // Verificar se os dados inseridos são válidos
  if (imc < 16.9) {
    resultadoTexto.innerHTML = `O seu imc é ${imc}. Você está muito do peso ideal.`
  } else if (imc > 17 && imc < 18.4){
    resultadoTexto.innerHTML = `O seu imc é ${imc}. Você está abaixo do peso.`
  } else if (imc > 18.5 && imc < 24.9){
    resultadoTexto.innerHTML = `O seu imc é ${imc}. Seu peso está normal.`
  } else if (imc > 25 && imc < 29.9){
    resultadoTexto.innerHTML = `O seu imc é ${imc}. Você está acima do peso.`
  } else if (imc > 30 && imc < 34.9){
    resultadoTexto.innerHTML = `o seu imc é ${imc}. Você tem Obesidade grau 1.`
  } else if (imc > 35 && imc < 40){
    resultadoTexto.innerHTML = `O seu imc é ${imc}. Você tem Obesidade grau 2.`
  } else (imc > 40){
    resultadoTexto.innerHTML = `O seu imc é ${imc}. Você tem Obesidade grau 3.`
  }

  // Se está abaixo do peso
  // Se está com o peso ideal
  // Se está acima do peso
};
