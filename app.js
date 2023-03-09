let gustos = "Elegi el gusto de pizza \n" +
    "1- Muzzarella \n" +
    "2- Fugazzetta \n" +
    "3- Napolitana \n" +
    "4- Anchoas \n" +
    "5- Jamon y morrones \n" +
    "6- EL polemico jamon y anana \n"

let variableEnvio = 1

let reiniciar = true



function programa() {
    elegirGusto = parseInt(prompt(gustos))
    if (elegirGusto !== 1 && elegirGusto !== 2 && elegirGusto !== 3 &&
        elegirGusto !== 5 && elegirGusto !== 4 && elegirGusto !== 6) {
        alert("elegi un gusto ingresando numero del 1 al 6")
    } else {
        envio = confirm("con envio a domicilio?")
        if (envio === true) {
            variableEnvio = 1.07
        }
    }
    switch (elegirGusto) {
        case 1:
            valor = variableEnvio * 1100
            break
        case 2:
            valor = variableEnvio * 1500
            break
        case 3:
            valor = variableEnvio * 1200
            break
        case 4:
            valor = variableEnvio * 1300
            break
        case 5:
            valor = variableEnvio * 1500
            break
        case 6:
            valor = "... fuaaa, nunca nos pidieron jamon y anana, suerte con eso vieja"
            break
        default:
    }
    alert("el valor de tu pizza es  " + valor)
} 

function iniciarPrograma(){
    while(reiniciar){
        programa()
        reiniciar = confirm("realizas otro pedido?")
    }
} 