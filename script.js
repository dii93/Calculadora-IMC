alert('Óla seja bem vindo !');

let btn = document.querySelector("#btn");
btn.addEventListener("click", function() {

    location.reload();
});

function cal() {

    let nome = document.getElementById('nome').value;
    let altura = document.getElementById('altura').value;
    let peso = document.getElementById('peso').value;
    let res = document.getElementById('res');

    if (nome !== '' && altura !== '' && peso !== '') {

        let calImc = (peso / (altura * altura)).toFixed(1);

        let classificacao = '';

        if (calImc < 19) {
            classificacao = "abaixo do peso!";
        } else if (calImc < 25) {
            classificacao = "peso normal!";
        } else if (calImc < 30) {
            classificacao = "sobrepeso! Obesidade grau I";
        } else if (calImc < 40) {
            classificacao = "obesidade! Obesidade grau II";
        } else {
            classificacao = "obesidade grave! Obesidade grau III";
        }

        res.textContent = `${nome} seu imc é ${calImc}, ${classificacao}`;

    } else {
        res.textContent = 'Preencha os dados corretamente!!!';
    }

}