input.onButtonPressed(Button.A, function () {
    player.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    player.change(LedSpriteProperty.X, 1)
})
let player: game.LedSprite = null
let enemy = game.createSprite(randint(0, 10), randint(0, 10))
player = game.createSprite(2, 2)
basic.forever(function () {
    if (player.isTouching(enemy)) {
        basic.showIcon(IconNames.Sad)
    }
})
