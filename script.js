const CALCULAR = document.getElementById('calcular');
const PESO = document.getElementById('peso');
const ERROR = document.getElementById('error');
const FLU = document.getElementById('flu');
const MAN = document.getElementById('man');
const FLU2000 = document.getElementById('flu2000');
const MAN2000 = document.getElementById('man2000');

CALCULAR.addEventListener('click', () => {
    const DATO = parseInt(document.getElementById('peso').value);
    analizarMetodo(DATO);
});
PESO.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        const DATO = parseInt(PESO.value);
        analizarMetodo(DATO);
    }
});
function analizarMetodo(peso) {
    if (peso > 0 && peso <= 30) {
        MetodoHollidaySegar(peso);
    } else if (peso > 30) {
        MetododeSuperficieCorporal(peso);
    } else {
        mostrarError();
    }
}

function calcFlujo(peso) {
    let flujo = 0;
    if (peso <= 10) {
        flujo = peso * 100;
    } else if (peso <= 20) {
        flujo = 1000 + (peso - 10) * 50;
    } else {
        flujo = 1500 + (peso - 20) * 20;
    }
    return flujo;
}

function MetodoHollidaySegar(peso) {
    ERROR.style.display = 'none';
    let flujo = Math.round(calcFlujo(peso));
    let mantenimiento = Math.round(flujo / 24);
    FLU.innerHTML = mantenimiento + ' cc/hr';
    MAN.innerHTML = 'm+m/2 ' + mantenimiento * 1.5 + ' cc/hr';
    FLU2000.style.display = 'none';
    MAN2000.style.display = 'none';
    FLU.style.display = 'block';
    MAN.style.display = 'block';
}

function MetododeSuperficieCorporal(peso) {
    ERROR.style.display = 'none';
    let Superficiecorporal = (((peso * 4) + 7) / (peso + 90)) * 1500;
    let flujo = parseInt(Superficiecorporal);
    let mantenimiento = Math.round(flujo / 24);
    FLU.innerHTML = '<p>Con la constante 1.500</p>' + mantenimiento + ' cc/hr';
    MAN.innerHTML = 'm+m/2 ' + mantenimiento * 1.5 + ' cc/hr';

    let Superficiecorporal2000 = (((peso * 4) + 7) / (peso + 90)) * 2000;
    let flujo2000 = parseInt(Superficiecorporal2000);
    let mantenimiento2000 = Math.round(flujo2000 / 24);
    FLU2000.innerHTML = '<p>Con la constante 2.000</p>' + mantenimiento2000 + ' cc/hr';
    MAN2000.innerHTML = 'm+m/2 ' + mantenimiento2000 * 1.5 + ' cc/hr';

    FLU.style.display = 'block';
    MAN.style.display = 'block';
    FLU2000.style.display = 'block';
    MAN2000.style.display = 'block';
  
}
function mostrarError() {
    ERROR.style.display = 'block';
    FLU.style.display = 'none';
    MAN.style.display = 'none';
    FLU2000.style.display = 'none';
    MAN2000.style.display = 'none';
}
