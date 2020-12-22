input.onButtonPressed(Button.A, function () {
    X += 1
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
})
input.onButtonPressed(Button.B, function () {
    Y += 1
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . . # . .
        . . # . .
        `)
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("X" + X)
    basic.pause(1000)
    basic.showString("Y" + Y)
    basic.pause(1000)
    basic.clearScreen()
})
let Y = 0
let X = 0
X = 0
Y = 0
