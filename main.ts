input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 40; index++) {
        basic.showIcon(IconNames.Heart)
        basic.pause(396)
        basic.clearScreen()
        basic.pause(390)
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 10; index++) {
        basic.showIcon(IconNames.Heart)
        basic.pause(200)
        basic.clearScreen()
        basic.pause(200)
        basic.showIcon(IconNames.SmallHeart)
        basic.clearScreen()
        basic.pause(200)
        basic.showIcon(IconNames.TShirt)
        basic.clearScreen()
        basic.pause(200)
        basic.showIcon(IconNames.Rollerskate)
        basic.pause(100)
        basic.clearScreen()
        basic.pause(200)
    }
})
