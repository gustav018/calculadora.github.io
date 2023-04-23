const CALCULAR = document.getElementById('calcular');
const ERROR = document.getElementById('error');
const FLU = document.getElementById('flu');
const MAN = document.getElementById('man');
const FLU2000 = document.getElementById('flu2000');
const MAN2000 = document.getElementById('man2000');

CALCULAR.addEventListener('click', () => {
    const DATO = parseInt(document.getElementById('peso').value)
    //validamos que se cargue un dato:
    if (DATO > 0 && DATO <= 30) {
        ERROR.style.display = 'none'
        let flujo = Math.round(calcFlujo(DATO));
        let mantenimiento = Math.round(flujo / 24);
        FLU.innerHTML = mantenimiento + ' cc/hr';
        MAN.innerHTML = 'm+m/2 ' + mantenimiento * 1.5 + ' cc/hr';
        FLU2000.style.display = 'none';
        MAN2000.style.display = 'none';
        FLU.style.display = 'block';
        MAN.style.display = 'block';
    } else
        if (DATO > 30) {
            ERROR.style.display = 'none'
            //inicio calculo con la constante 1500
            let Superficiecorpora = (((DATO * 4) + 7) / (DATO + 90)) * 1500
            let flujo = parseInt(Superficiecorpora);
            let mantenimiento = Math.round(flujo / 24);
            FLU.innerHTML = '<p>Con la constante 1.500</p>' + mantenimiento + ' cc/hr';
            MAN.innerHTML = 'm+m/2 ' + mantenimiento * 1.5 + ' cc/hr';
            //fin calculo con la constante 1500
            //inicio calculo con la constante 2000
            let Superficiecorporal2000 = (((DATO * 4) + 7) / (DATO + 90)) * 2000
            let flujo2000 = parseInt(Superficiecorporal2000);
            let mantenimiento2000 = Math.round(flujo2000 / 24);
            FLU2000.innerHTML = '<p>Con la constante 2.000</p>' + mantenimiento2000 + ' cc/hr';
            MAN2000.innerHTML = 'm+m/2 ' + mantenimiento2000 * 1.5 + ' cc/hr';
            //fin calculo con la constante 2000
            FLU.style.display = 'block';
            MAN.style.display = 'block';
            FLU2000.style.display = 'block';
            MAN2000.style.display = 'block';
            TITULOCONSTANTE.style.display = 'block';

        }
        else {
            ERROR.style.display = 'block';
            FLU.style.display = 'none';
            MAN.style.display = 'none';
            FLU2000.style.display = 'none';
            MAN2000.style.display = 'none';
        }

})

function calcFlujo(peso) {
    let flujo = 0;
    if (peso <= 10) {
        flujo = peso * 100;
    }
    else if (peso <= 20) {
        flujo = 1000 + (peso - 10) * 50;
    }
    else {
        flujo = 1500 + (peso - 20) * 20;
    }
    //console.log("flujo "+ flujo) el otro codigo con peso=9 devolvia flujo=36
    return flujo;

}
