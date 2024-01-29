@namespace
class SpriteKind:
    enemy1 = SpriteKind.create()

def on_player2_button_a_pressed():
    global projectile
    if playerdead != 1:
        pass
    else:
        projectile = sprites.create_projectile_from_sprite(img("""
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
            """),
            player2,
            0,
            -60)
controller.player2.on_button_event(ControllerButton.A,
    ControllerButtonEvent.PRESSED,
    on_player2_button_a_pressed)

def on_overlap_tile(sprite, location):
    global playerdead
    sprites.destroy(sprite, effects.fire, 100)
    playerdead += 1
    sprites.destroy_all_sprites_of_kind(SpriteKind.player)
    sprites.destroy_all_sprites_of_kind(SpriteKind.enemy)
    game.splash("Game Over")
    enemysprite.set_stay_in_screen(False)
scene.on_overlap_tile(SpriteKind.enemy,
    sprites.builtin.forest_tiles0,
    on_overlap_tile)

def on_player2_button_right_pressed():
    player2.set_velocity(100, 0)
controller.player2.on_button_event(ControllerButton.RIGHT,
    ControllerButtonEvent.PRESSED,
    on_player2_button_right_pressed)

def on_player2_button_left_pressed():
    player2.set_velocity(-100, 0)
controller.player2.on_button_event(ControllerButton.LEFT,
    ControllerButtonEvent.PRESSED,
    on_player2_button_left_pressed)

def on_player1_button_right_pressed():
    player1.set_velocity(100, 0)
controller.player1.on_button_event(ControllerButton.RIGHT,
    ControllerButtonEvent.PRESSED,
    on_player1_button_right_pressed)

def on_player1_button_a_pressed():
    global projectile
    if playerdead != 1:
        pass
    else:
        projectile = sprites.create_projectile_from_sprite(img("""
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
            """),
            player1,
            0,
            -60)
controller.player1.on_button_event(ControllerButton.A,
    ControllerButtonEvent.PRESSED,
    on_player1_button_a_pressed)

def spawnenemy(num: number, speed: number):
    global enemysprite, score
    for index in range(num):
        enemysprite = sprites.create(enemylist._pick_random(), SpriteKind.enemy)
        tiles.place_on_tile(enemysprite, spawnenemieslocation._pick_random())
        enemysprite.set_velocity(0, speed)
        score += 1
        if score >= 10:
            pause(500)
        else:
            pause(500)
        if playerdead != 1:
            break

def on_on_overlap(sprite2, otherSprite):
    global currentnumofenemies
    sprites.destroy(otherSprite)
    sprites.destroy(sprite2)
    info.change_score_by(-1)
    currentnumofenemies += -1
sprites.on_overlap(SpriteKind.projectile, SpriteKind.enemy, on_on_overlap)

def on_player1_button_left_pressed():
    player1.set_velocity(-100, 0)
controller.player1.on_button_event(ControllerButton.LEFT,
    ControllerButtonEvent.PRESSED,
    on_player1_button_left_pressed)

def on_on_overlap2(sprite3, otherSprite2):
    global playerdead
    sprites.destroy(sprite3, effects.fire, 100)
    playerdead += 1
    sprites.destroy_all_sprites_of_kind(SpriteKind.player)
    sprites.destroy_all_sprites_of_kind(SpriteKind.enemy)
    game.splash("Game Over")
    enemysprite.set_stay_in_screen(False)
sprites.on_overlap(SpriteKind.player, SpriteKind.enemy, on_on_overlap2)

score = 0
enemysprite: Sprite = None
projectile: Sprite = None
player2: Sprite = None
enemylist: List[Image] = []
playerdead = 0
spawnenemieslocation: List[tiles.Location] = []
player1: Sprite = None
tiles.set_current_tilemap(tilemap("""
    level2
"""))
scene.camera_follow_sprite(player1)
spawnenemieslocation = tiles.get_tiles_by_type(assets.tile("""
    myTile0
"""))
playerdead = 1
enemylist = [img("""
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
    """),
    img("""
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
    """),
    img("""
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
    """)]
player1 = sprites.create(img("""
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
    """),
    SpriteKind.player)
player2 = sprites.create(img("""
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
    """),
    SpriteKind.player)
scene.camera_follow_sprite(player1)
player1.set_position(8, 120)
player2.set_position(152, 120)
sprites.destroy_all_sprites_of_kind(SpriteKind.enemy)
player1.set_stay_in_screen(True)
player2.set_stay_in_screen(True)
numenemy = 5
speedenemy = 5
currentnumofenemies = 0
level = 0
info.set_score(numenemy)

def on_forever():
    global level, currentnumofenemies, speedenemy, numenemy
    if currentnumofenemies == 0:
        info.set_score(numenemy)
        level += 1
        game.splash("Level " + str(level))
        currentnumofenemies = numenemy
        spawnenemy(numenemy, speedenemy)
        speedenemy += 2
        numenemy += 2
forever(on_forever)
