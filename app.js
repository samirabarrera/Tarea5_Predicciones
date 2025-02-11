function weatherCurrently() {
    // Obtener el nombre del usuario y la pregunta
    let userName = document.getElementById('userName').value;
    let userQuestion = document.getElementById('weatherCondition').value;

    // Saludar al usuario
    let greeting = userName ? `¡Hola, ${userName}!` : '¡Hola!';
    document.getElementById('greeting').innerText = greeting;

    // Mostrar la pregunta del usuario
    document.getElementById('question').innerText = `${userName ? userName : 'User'} preguntó: ${userQuestion}`;

    // Generar un número aleatorio entre 0 y 7
    let randomNumber = Math.floor(Math.random() * 6);

    // Asignar una respuesta a randomPrediction según el valor de randomNumber
    let randomPrediction = '';
    switch (randomNumber) {
        case 0:
            randomPrediction = 'Hoy será un gran día, ¡disfrútalo!';
            break;
        case 1:
            randomPrediction = '¡Mantente alerta, pueden haber sorpresas!';
            break;
        case 2:
            randomPrediction = 'Será un día productivo, si te organizas bien';
            break;
        case 3:
            randomPrediction = 'No dejes que los pequeños problemas arruinen tu día';
            break;
        case 4:
            randomPrediction = 'Hoy es un buen día para probar algo nuevo';
            break;
        case 5:
            randomPrediction = 'Confía en tu intuición, tomará la predicción del día junto con un mensaje de despedida';
            break;
    }
    // Mostrar la respuesta de la Bola Mágica Ocho
    document.getElementById('answer').innerText = `La predicción para hoy dice: ${randomPrediction}`;
}