function calculadora(numero1, numero2, operacao) {
    let resultado;

    switch (operacao.toLowerCase()) {
        case 'adição':
            resultado = numero1 + numero2;
            break;
        case 'subtração':
            resultado = numero1 - numero2;
            break;
        case 'multiplicação':
            resultado = numero1 * numero2;
            break;
        case 'divisão':
            if (numero2 !== 0) {
                resultado = numero1 / numero2;
            } else {
                throw new Error('Divisão por zero não é permitida.');
            }
            break;
        default:
            throw new Error('Operação inválida');
    }

    return resultado;
}

// Obtendo entrada do usuário
let numero1 = parseFloat(prompt('Digite o primeiro número'));
let numero2 = parseFloat(prompt('Digite o segundo número'));
let operacao = prompt('Digite a operação desejada (adição, subtração, multiplicação ou divisão):');

try {
    // Verificando se os números são válidos
    if (isNaN(numero1) || isNaN(numero2)) {
        throw new Error('Por favor, insira números válidos.');
    }

    // Chamando a função calculadora
    let resultado = calculadora(numero1, numero2, operacao);

    // Exibindo o resultado
    console.log(`O resultado da ${operacao} de ${numero1} e ${numero2} é: ${resultado}`);
} catch (error) {
    console.error(error.message);
}
