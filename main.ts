namespace SpriteKind {
    export const enemy1 = SpriteKind.create()
}
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (dontshoot != 1) {
    	
    } else {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . 2 2 . . . . . . . 2 2 . . . 
            . . . 2 2 . . . . . 2 . 2 . . . 
            . . . . 2 2 . . . 2 . . 2 . . . 
            . . . . 2 2 2 . . 2 2 2 2 . . . 
            . . . . 2 2 . 2 2 2 2 . . . . . 
            . . . . . 2 2 . 2 . 2 . . . . . 
            . . . . . . . . 2 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, player2, 0, -60)
    }
})
controller.player2.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    player2.setVelocity(100, 0)
})
controller.player2.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    player2.setVelocity(-100, 0)
})
controller.player1.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    player1.setVelocity(100, 0)
})
controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (dontshoot != 1) {
    	
    } else {
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
    }
})
function spawnenemy (num: number) {
    for (let index = 0; index < num; index++) {
        enemysprite = sprites.create(enemylist._pickRandom(), SpriteKind.Enemy)
        tiles.placeOnTile(enemysprite, spawnenemieslocation._pickRandom())
        enemysprite.setVelocity(0, 20)
        score += 1
        if (score >= 10) {
            pause(500)
        } else {
            pause(500)
        }
        if (dontshoot != 1) {
            break;
        }
    }
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    sprites.destroy(sprite)
})
controller.player1.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    player1.setVelocity(-100, 0)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(sprite, effects.fire, 100)
    dontshoot += 1
    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    game.splash("Game Over")
    enemysprite.setStayInScreen(false)
})
let score = 0
let enemysprite: Sprite = null
let projectile: Sprite = null
let player2: Sprite = null
let enemylist: Image[] = []
let dontshoot = 0
let spawnenemieslocation: tiles.Location[] = []
let player1: Sprite = null
tiles.setCurrentTilemap(tilemap`level2`)
scene.cameraFollowSprite(player1)
spawnenemieslocation = tiles.getTilesByType(assets.tile`myTile0`)
dontshoot = 1
enemylist = [img`
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
    `, img`
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
    `, img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . 3 3 3 . 
    . . . . . 3 3 3 3 3 3 3 3 . . . 
    3 3 3 3 3 3 3 . . . . . . . . . 
    3 3 3 3 3 3 3 3 3 3 3 3 3 . . . 
    . . . . 3 . . . . 3 3 . . 3 . . 
    . . . . 3 3 3 3 3 . . . . . . . 
    . . 3 3 3 3 3 3 3 3 3 3 . . . . 
    . . . 3 . . . . . . . . 3 3 3 . 
    . . . 3 . . . . . . . . . . . 3 
    . . . 3 . . . . . . . . 3 3 3 . 
    . . . 3 . . 3 3 3 3 3 3 . . . . 
    . . 3 3 3 3 . . . . . . . . . . 
    `]
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
player2 = sprites.create(img`
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
player1.setPosition(8, 120)
player2.setPosition(152, 120)
sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
spawnenemy(1000)
player1.setStayInScreen(true)
player2.setStayInScreen(true)
