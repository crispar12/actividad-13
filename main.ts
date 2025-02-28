input.onButtonPressed(Button.A, function () {
    basic.showString("T=" + (input.temperature() * 18 + 32) + "F")
})
input.onButtonPressed(Button.B, function () {
    basic.showString("T=" + (input.temperature() + 273.15) + "k")
})
basic.forever(function () {
    basic.showString("T=" + input.temperature() + "C")
})
