input.onButtonPressed(Button.A, function () {
    PESO += 1
    basic.showNumber(PESO)
})
input.onGesture(Gesture.Shake, function () {
    PESO = 74
    basic.showNumber(PESO)
})
input.onButtonPressed(Button.AB, function () {
    ESTADO = 1000 * (PESO / (ALTURA * ALTURA))
    basic.showNumber(PESO)
    while (ESTADO > 0) {
        basic.showString("DELGADA")
        basic.showNumber(ESTADO)
        break;
    }
    while (ESTADO > 18.5 && ESTADO < 25) {
        basic.showString("SALUDABLE")
        basic.showNumber(ESTADO)
        break;
    }
    while (ESTADO > 26 && ESTADO < 29) {
        basic.showString("SOBREPESO")
        basic.showNumber(ESTADO)
        break;
    }
    while (ESTADO > 30) {
        basic.showString("OBESIDAD")
        basic.showNumber(ESTADO)
    }
})
input.onButtonPressed(Button.B, function () {
    PESO += -1
    basic.showNumber(PESO)
})
let ESTADO = 0
let ALTURA = 0
let PESO = 0
PESO = 74
ALTURA = 180
