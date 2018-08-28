import {AsyncStorage} from "react-native";

export const currentTime = () => {
    let date = new Date(); //Pegamos a data atual
    let hour = date.getHours(); // Pegamos as horas da data
    let minutes = date.getMinutes();  // Pegamos os minutos da data
    let adicionarZero = ''; //Adicionaremos um 0 na frente se os minutos ferem menor que 10.
    let textoHorario = ''; //Iremos guardar o texto inteiro.

    //Verificamos se devemos adicionar o zero na frente
    if (minutes >= 0 && minutes < 10) {
        adicionarZero = '0';
    } else {
        adicionarZero = '';
    }

    //Verificamos se a hora é maior que 12
    if (hour >= 12) {
        textoHorario = (hour) + ':' + adicionarZero + minutes + ' PM'; //Se for adicionamos o horario como PM (De tarde)
    } else {
        textoHorario = (hour) + ':' + adicionarZero + minutes + ' AM'; //Se não for adicionamos o horario como AM (De manhã)
    }

    //Retornamos o horario atual com a nossa formatação.
    return textoHorario;
};

export const returnActualBattery = (callback) => {
    DeviceBattery.getBatteryLevel().then(level => {
        if(level) {
            callback({
                deviceBattery: (65 / 100) * (level * 100),
                deviceBatteryBar: (150 / 100) * (level * 100),
                onlyDeviceBattery: level
            });
        } else {
            callback({
                deviceBattery: 0,
                deviceBatteryBar: 0,
                onlyDeviceBattery: 0
            });
        }
    });
};

export const batteryVoltCorrection = (value, callback) => {
    callback((((value - 94) * 0.0714) + 7).toFixed(1));
};

//Calculo que irá retornar um  valor final contendo o menor e o maior numero de um Array, entre um valor X.
export const calcularValorFuel = (x) => {

    let vA = [];
    let vB = [];
    vA.push(100);
    vA.push(88);
    vA.push(68);
    vA.push(55);
    vA.push(48);
    vA.push(42);
    vA.push(36);
    vA.push(31);
    vA.push(26);
    vA.push(22);
    vA.push(17);
    vA.push(13);
    vA.push(11);
    vA.push(8);
    vA.push(6);

    vB.push(19);
    vB.push(36);
    vB.push(56);
    vB.push(65);
    vB.push(73);
    vB.push(80);
    vB.push(87);
    vB.push(93);
    vB.push(100);
    vB.push(108);
    vB.push(115);
    vB.push(131);
    vB.push(146);
    vB.push(167);
    vB.push(189);

    //Pega o menor/maior numero dentro do array.
    let menorValorReferenciaB = Math.min.apply(Math, vB);
    let maiorValorReferenciaB = Math.max.apply(Math, vB);
    let menorValorReferenciaA = Math.min.apply(Math, vA);
    let maiorValorReferenciaA = Math.max.apply(Math, vA);
    let xEMaiorQueB;
    let xEMenorQueB;
    let xEMaiorQueA;
    let xEMenorQueA;
    let m;
    let valor;

    for (let i = 0; i < vB.length; i++) {
        if (x > menorValorReferenciaB && x < maiorValorReferenciaB) {
            if (x < vB[i]) {
                xEMaiorQueB = vB[i - 1];//Armazena o maior numero
                xEMenorQueB = vB[i]; //Armazena o menor numero
                xEMaiorQueA = vA[i - 1];
                xEMenorQueA = vA[i];
                m = (xEMenorQueA - xEMaiorQueA) / (xEMenorQueB - xEMaiorQueB);
                valor = (x - xEMenorQueB) * m + xEMenorQueA;
                i = vB.length; //Faz parar o loop
            }
        }

        //Fazer essa parte e a se for maior, lembrando que o x varia entre 0 - 255.
        if (x < menorValorReferenciaB) {
            xEMaiorQueB = x - 1; //Armazena o maior numero
            xEMenorQueB = menorValorReferenciaB; //Armazena o menor numero
            xEMaiorQueA = x - 1;
            xEMenorQueA = menorValorReferenciaA;
            valor = 100;
            i = vB.length; //Faz parar o loop
        }

        if (x > maiorValorReferenciaB) {
            xEMaiorQueB = maiorValorReferenciaB; //Armazena o maior numero
            xEMenorQueB = x + 1; //Armazena o menor numero
            xEMaiorQueA = maiorValorReferenciaA;
            xEMenorQueA = x + 1;
            valor = 0;
            i = vB.length; //Faz parar o loop
        }

        if (x === menorValorReferenciaB) {
            xEMaiorQueB = x - 1; //Armazena o maior numero
            xEMenorQueB = x + 1; //Armazena o menor numero
            xEMaiorQueA = x - 1;
            xEMenorQueA = x + 1;
            valor = 100;
            i = vB.length; //Faz parar o loop
        }

        if (x === maiorValorReferenciaB) {
            xEMaiorQueB = x - 1; //Armazena o maior numero
            xEMenorQueB = x + 1; //Armazena o menor numero
            xEMaiorQueA = x - 1;
            xEMenorQueA = x + 1;
            valor = 0;
            i = vB.length; //Faz parar o loop
        }
    }
    return valor;
};


