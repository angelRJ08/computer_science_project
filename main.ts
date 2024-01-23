controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 3 3 . . . . . . . 
        . . . . . . 3 3 3 . . . . . . . 
        . . . . . . 3 3 3 3 . . . . . . 
        . . . . . . 3 3 3 . 3 . . . . . 
        . . . . . . 3 3 3 3 3 . . . . . 
        . . . . . . . 3 . . . . . . . . 
        . . . . . . . 3 . . . . . . . . 
        . . . . . . . 3 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, player1, 0, -60)
})
controller.player1.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    player1.setVelocity(100, 0)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(player1)
})
controller.player1.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    player1.setVelocity(-100, 0)
})
let projectile: Sprite = null
let player1: Sprite = null
let enemysprite = 0
let mySprite: Sprite = null
let random_list_of_arrays = enemysprite
info.setLife(3)
tiles.setCurrentTilemap(tilemap`level2`)
player1 = sprites.create(img`
    . . . f f f f f f . . . . . . . 
    . . . f f 2 2 c c f f . . . . . 
    . . . . f f f c c c c f f f . . 
    . . . . c c 2 4 4 4 2 2 2 2 c c 
    . . . c 9 9 b 2 2 2 2 2 2 2 2 2 
    . . c 9 9 9 1 1 1 b 2 2 2 2 2 2 
    . c 2 b b 1 1 1 9 9 2 2 2 c c c 
    c 2 2 2 2 2 2 2 2 2 2 2 c 2 2 2 
    f 2 2 2 2 2 2 2 2 2 2 2 4 4 2 2 
    . f 2 2 2 2 2 2 2 2 2 2 2 4 4 4 
    . . f f 2 2 2 2 2 2 2 c f f c 4 
    . . . . f f f f f f f c f f f f 
    . . . . . . . . . f 2 c 2 f f f 
    . . . . . . . . . f c c 2 f f f 
    . . . . . . . . . . f f f f f f 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
scene.cameraFollowSprite(player1)
info.setLife(3)
tiles.setCurrentTilemap(tilemap`level2`)
let list = [sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . 2 2 2 2 2 . 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    `, SpriteKind.Enemy), sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . 5 5 . . . . 
    . . . 5 5 5 5 5 5 5 5 5 5 . . . 
    . . . 5 5 5 5 5 5 5 5 5 5 . . . 
    . . . 5 5 5 5 5 5 5 5 5 5 5 . . 
    . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
    . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
    . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
    . . . 5 5 5 5 5 5 5 5 5 5 5 . . 
    . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
    . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
    . . . . 5 5 5 5 5 5 5 5 . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy), sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . 7 . . . . . . . . . . . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . 7 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . 7 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 . . 7 7 7 7 7 7 7 7 7 . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)]
player1 = sprites.create(img`
    . . . f f f f f f . . . . . . . 
    . . . f f 2 2 c c f f . . . . . 
    . . . . f f f c c c c f f f . . 
    . . . . c c 2 4 4 4 2 2 2 2 c c 
    . . . c 9 9 b 2 2 2 2 2 2 2 2 2 
    . . c 9 9 9 1 1 1 b 2 2 2 2 2 2 
    . c 2 b b 1 1 1 9 9 2 2 2 c c c 
    c 2 2 2 2 2 2 2 2 2 2 2 c 2 2 2 
    f 2 2 2 2 2 2 2 2 2 2 2 4 4 2 2 
    . f 2 2 2 2 2 2 2 2 2 2 2 4 4 4 
    . . f f 2 2 2 2 2 2 2 c f f c 4 
    . . . . f f f f f f f c f f f f 
    . . . . . . . . . f 2 c 2 f f f 
    . . . . . . . . . f c c 2 f f f 
    . . . . . . . . . . f f f f f f 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
let player2 = sprites.create(img`
    . . . . . . 8 8 c c 8 8 . . . . 
    . . . . . 8 6 6 6 6 6 6 8 . . . 
    . . . . 6 c 6 6 6 6 6 6 c 6 . . 
    . . . 8 6 c 9 6 6 6 6 6 c 6 8 . 
    . . . f 6 6 9 6 6 6 6 6 c 6 f . 
    . . . f 6 6 9 6 6 6 6 6 6 6 f . 
    . . . f 6 6 9 6 6 6 6 6 6 6 f . 
    . . . f 6 c 6 9 9 6 6 6 c 6 f . 
    . . . 8 6 c 8 c c c c 8 c 6 8 . 
    . . . 8 6 8 c b b b b c 8 6 8 . 
    . . . 8 6 8 b b b b b b 8 6 8 . 
    . . . 8 8 8 8 8 8 8 8 8 8 8 8 . 
    . . . f 8 d 8 8 8 8 8 8 d 8 f . 
    . . . f 8 6 d 8 8 8 8 d 6 8 f . 
    . . . f f 8 8 8 8 8 8 8 8 f f . 
    . . . . f f . . . . . . f f . . 
    `, SpriteKind.Player)
scene.cameraFollowSprite(player1)
player1.setPosition(14, 97)
player2.setPosition(131, 92)
