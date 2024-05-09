function calcularRank(vitorias, derrotas) {
    let saldo = vitorias - derrotas;
    let nivel;

    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 10 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }


    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `<p>O Herói tem um saldo de ${saldo} está no nível de ${nivel}</p>`;


    return false;
}


const formulario = document.getElementById("formulario");
formulario.onsubmit = function(event) {
    event.preventDefault(); 
    const vitorias = parseInt(document.getElementById("vitorias").value);
    const derrotas = parseInt(document.getElementById("derrotas").value);
    calcularRank(vitorias, derrotas);
};
