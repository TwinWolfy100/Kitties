def setUpStars():
    pass

def on_on_overlap(sprite, otherSprite):
    info.change_score_by(1)
sprites.on_overlap(SpriteKind.food, SpriteKind.player, on_on_overlap)

def setUpFollower(sprite: Sprite, speed: number):
    sprite.follow(Leader, speed)
    Follower.say(":)", 3000)
def setUpPlayers():
    global Leader, Duck, Other_Car, Follower
    Leader = sprites.create(img("""
            . f f f . f f f f . f f f . 
                    f f f f f c c c c f f f f f 
                    f f f f b c c c c b f f f f 
                    f f f c 3 c c c c 3 c f f f 
                    . f 3 3 c c c c c c 3 3 f . 
                    . f c c c c 4 4 c c c c f . 
                    . f f c c 4 4 4 4 c c f f . 
                    . f f f b f 4 4 f b f f f . 
                    . f f 4 1 f d d f 1 4 f f . 
                    . . f f d d d d d d f f . . 
                    . . e f e 4 4 4 4 e f e . . 
                    . e 4 f b 3 3 3 3 b f 4 e . 
                    . 4 d f 3 3 3 3 3 3 c d 4 . 
                    . 4 4 f 6 6 6 6 6 6 f 4 4 . 
                    . . . . f f f f f f . . . . 
                    . . . . f f . . f f . . . .
        """),
        SpriteKind.player)
    animation.run_image_animation(Leader,
        [img("""
                . f f f . f f f f . f f f . 
                        f f f f f c c c c f f f f f 
                        f f f f b c c c c b f f f f 
                        f f f c 3 c c c c 3 c f f f 
                        . f 3 3 c c c c c c 3 3 f . 
                        . f c c c c 4 4 c c c c f . 
                        . f f c c 4 4 4 4 c c f f . 
                        . f f f b f 4 4 f b f f f . 
                        . f f 4 1 f d d f 1 4 f f . 
                        . . f f d d d d d d f f . . 
                        . . e f e 4 4 4 4 e f e . . 
                        . e 4 f b 3 3 3 3 b f 4 e . 
                        . 4 d f 3 3 3 3 3 3 c d 4 . 
                        . 4 4 f 6 6 6 6 6 6 f 4 4 . 
                        . . . . f f f f f f . . . . 
                        . . . . f f . . f f . . . .
            """),
            img("""
                . . . . . . . . . . . . . . 
                        . f f f . f f f f . f f f . 
                        f f f f f c c c c f f f f f 
                        f f f f b c c c c b f f f f 
                        f f f c 3 c c c c 3 c f f f 
                        . f 3 3 c c c c c c 3 3 f . 
                        . f c c c c 4 4 c c c c f . 
                        . f f c c 4 4 4 4 c c f f . 
                        . f f f b f 4 4 f b f f f . 
                        . f f 4 1 f d d f 1 4 f f . 
                        . . f f d d d d d 4 e f e . 
                        . f e f f b b b e d d 4 e . 
                        . e 4 f b 3 3 3 e d d e . . 
                        . . . f 6 6 6 6 f e e . . . 
                        . . . f f f f f f f . . . . 
                        . . . f f f . . . . . . . .
            """),
            img("""
                . . . . . . . . . . . . . . 
                        . f f f . f f f f . f f f . 
                        f f f f f c c c c f f f f f 
                        f f f f b c c c c b f f f f 
                        f f f c 3 c c c c 3 c f f f 
                        . f 3 3 c c c c c c 3 3 f . 
                        . f c c c c 4 4 c c c c f . 
                        . f f c c 4 4 4 4 c c f f . 
                        . f f f b f 4 4 f b f f f . 
                        . f f 4 1 f d d f 1 4 f f . 
                        . e f e 4 d d d d d f f . . 
                        . e 4 d d e b b b f f e f . 
                        . . e d d e 3 3 b e f 4 e . 
                        . . . e e f 6 6 6 6 f . . . 
                        . . . . f f f f f f f . . . 
                        . . . . . . . . f f f . . .
            """)],
        100,
        True)
    Leader.set_position(21, 97)
    controller.move_sprite(Leader)
    Duck = sprites.create(img("""
            . . . . . . . . . . b 5 b . . . 
                    . . . . . . . . . b 5 b . . . . 
                    . . . . . . b b b b b b . . . . 
                    . . . . . b b 5 5 5 5 5 b . . . 
                    . . . . b b 5 d 1 f 5 d 4 c . . 
                    . . . . b 5 5 1 f f d d 4 4 4 b 
                    . . . . b 5 5 d f b 4 4 4 4 b . 
                    . . . b d 5 5 5 5 4 4 4 4 b . . 
                    . . b d d 5 5 5 5 5 5 5 5 b . . 
                    . b d d d d 5 5 5 5 5 5 5 5 b . 
                    b d d d b b b 5 5 5 5 5 5 5 b . 
                    c d d b 5 5 d c 5 5 5 5 5 5 b . 
                    c b b d 5 d c d 5 5 5 5 5 5 b . 
                    . b 5 5 b c d d 5 5 5 5 5 d b . 
                    b b c c c d d d d 5 5 5 b b . . 
                    . . . c c c c c c c c b b . . .
        """),
        SpriteKind.player)
    Duck.follow(Leader, 35)
    Other_Car = sprites.create(img("""
            . . . . . . f f f f . . . . . . 
                    . . . . f f f 2 2 f f f . . . . 
                    . . . f f f 2 2 2 2 f f f . . . 
                    . . f f f e e e e e e f f f . . 
                    . . f f e 2 2 2 2 2 2 e e f . . 
                    . . f e 2 f f f f f f 2 e f . . 
                    . . f f f f e e e e f f f f . . 
                    . f f e f b f 4 4 f b f e f f . 
                    . f e e 4 1 f d d f 1 4 e e f . 
                    . . f e e d d d d d d e e f . . 
                    . . . f e e 4 4 4 4 e e f . . . 
                    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
                    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
                    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
                    . . . . . f f f f f f . . . . . 
                    . . . . . f f . . f f . . . . .
        """),
        SpriteKind.player)
    scene.camera_follow_sprite(Leader)
    tiles.place_on_tile(Other_Car, tiles.get_tile_location(3, 5))
    Other_Car.follow(Leader, 30)
    Follower = sprites.create(img("""
            . . . . . . 5 . 5 . . . . . . . 
                    . . . . . f 5 5 5 f f . . . . . 
                    . . . . f 1 5 2 5 1 6 f . . . . 
                    . . . f 1 6 6 6 6 6 1 6 f . . . 
                    . . . f 6 6 f f f f 6 1 f . . . 
                    . . . f 6 f f d d f f 6 f . . . 
                    . . f 6 f d f d d f d f 6 f . . 
                    . . f 6 f d 3 d d 3 d f 6 f . . 
                    . . f 6 6 f d d d d f 6 6 f . . 
                    . f 6 6 f 3 f f f f 3 f 6 6 f . 
                    . . f f d 3 5 3 3 5 3 d f f . . 
                    . . f d d f 3 5 5 3 f d d f . . 
                    . . . f f 3 3 3 3 3 3 f f . . . 
                    . . . f 3 3 5 3 3 5 3 3 f . . . 
                    . . . f f f f f f f f f f . . . 
                    . . . . . f f . . f f . . . . .
        """),
        SpriteKind.player)
    setUpFollower(Follower, 40)
    Follower = sprites.create(img("""
            . . . . . . . . . . . . . . . . 
                    . . 4 4 4 . . . . 4 4 4 . . . . 
                    . 4 5 5 5 e . . e 5 5 5 4 . . . 
                    4 5 5 5 5 5 e e 5 5 5 5 5 4 . . 
                    4 5 5 4 4 5 5 5 5 4 4 5 5 4 . . 
                    e 5 4 4 5 5 5 5 5 5 4 4 5 e . . 
                    . e e 5 5 5 5 5 5 5 5 e e . . . 
                    . . e 5 f 5 5 5 5 f 5 e . . . . 
                    . . f 5 5 5 4 4 5 5 5 f . f f . 
                    . . . 4 5 5 f f 5 5 6 f f 5 f . 
                    . . . f 6 6 6 6 6 6 4 4 4 5 f . 
                    . . . f 5 5 5 5 5 5 5 f f f . . 
                    . . . f 5 4 5 f f f 5 f . . . . 
                    . . . f f f f f . . f f . . . .
        """),
        SpriteKind.player)
    setUpFollower(Follower, 50)
    Follower = sprites.create(img("""
            . . . . . . . . . . . . . . . . 
                    . . . . . . . . c c c c . . . . 
                    . . . . . . c c d d d d c . . . 
                    . . . . . c c c c c c d c . . . 
                    . . . . c c 4 4 4 4 d c c . . . 
                    . . . c 4 d 4 4 4 4 4 1 c . c c 
                    . . c 4 4 4 1 4 4 4 4 d 1 c 4 c 
                    . c 4 4 4 4 1 4 4 4 4 4 1 c 4 c 
                    f 4 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
                    f 4 4 4 f 4 1 c c 4 4 4 1 f 4 f 
                    f 4 4 4 4 4 1 4 4 f 4 4 d f 4 f 
                    . f 4 4 4 4 1 c 4 f 4 d f f f f 
                    . . f f 4 d 4 4 f f 4 c f c . . 
                    . . . . f f 4 4 4 4 c d b c . . 
                    . . . . . . f f f f d d d c . . 
                    . . . . . . . . . . c c c . . .
        """),
        SpriteKind.player)
    setUpFollower(Follower, 70)
    Follower = sprites.create(img("""
            . . . . . . . . . . . . . . . . 
                    . . . . . . . . c c c c c . . . 
                    . . . . . . c c 5 5 5 5 5 c . . 
                    . . . . . c 5 5 5 5 5 5 5 5 c . 
                    . . . . c b b b b b b 5 5 5 c . 
                    . . . . c 1 1 b b 1 b b c c . . 
                    . . . c 1 1 1 b b 1 1 1 c . . . 
                    . . . c 1 1 1 1 b 1 1 1 c . c c 
                    . . . c d 1 1 1 b 1 1 1 b b 5 c 
                    . . c c d 1 c 1 b 1 b 1 5 5 5 c 
                    . c c d d 1 1 1 1 1 b 1 b b 5 c 
                    f d d d 1 1 1 1 1 b b 1 f . c c 
                    f f f 1 1 1 1 1 1 b b b f . . . 
                    . . . f f 1 1 1 b b b 5 5 f . . 
                    . . . . . f f f 5 5 5 5 5 f . . 
                    . . . . . . . . f f f f f f . .
        """),
        SpriteKind.player)
    setUpFollower(Follower, 80)
    Follower = sprites.create(img("""
            e e e . . . . e e e . . . . 
                    c d d c . . c d d c . . . . 
                    c b d d f f d d b c . . . . 
                    c 3 b d d b d b 3 c . . . . 
                    f b 3 d d d d 3 b f . . . . 
                    e d d d d d d d d e . . . . 
                    e d f d d d d f d e . b f b 
                    f d d f d d f d d f . f d f 
                    f b d d b b d d 2 f . f d f 
                    . f 2 2 2 2 2 2 b b f f d f 
                    . f b d d d d d d b b d b f 
                    . f d d d d d b d d f f f . 
                    . f d f f f d f f d f . . . 
                    . f f . . f f . . f f . . .
        """),
        SpriteKind.player)
    setUpFollower(Follower, 90)
def setUpShark():
    global Shark, random
    Shark = sprites.create(img("""
            .............ccfff..............
                    ...........ccddbcf..............
                    ..........ccddbbf...............
                    ..........fccbbcf...............
                    .....fffffccccccff.........ccc..
                    ...ffbbbbbbbcbbbbcfff....ccbbc..
                    ..fbbbbbbbbcbcbbbbcccff.cdbbc...
                    ffbbbbbbffbbcbcbbbcccccfcdbbf...
                    fbcbbb11ff1bcbbbbbcccccffbbf....
                    fbbb11111111bbbbbcccccccbbcf....
                    .fb11133cc11bbbbcccccccccccf....
                    ..fccc31c111bbbcccccbdbffbbcf...
                    ...fc13c111cbbbfcddddcc..fbbf...
                    ....fccc111fbdbbccdcc.....fbbf..
                    ........ccccfcdbbcc........fff..
                    .............fffff..............
        """),
        SpriteKind.enemy)
    random = randint(10, 150)
    Shark.set_position(159, random)
    Shark.set_velocity(-100, 0)
    Shark.set_flag(SpriteFlag.DESTROY_ON_WALL, True)

def on_on_overlap2(sprite, otherSprite):
    game.over(False, effects.dissolve)
sprites.on_overlap(SpriteKind.player, SpriteKind.enemy, on_on_overlap2)

random = 0
Shark: Sprite = None
Other_Car: Sprite = None
Duck: Sprite = None
Follower: Sprite = None
Leader: Sprite = None
tiles.set_tilemap(tilemap("""
    level2
"""))
setUpPlayers()
setUpStars()

def on_update_interval():
    pass
game.on_update_interval(5000, on_update_interval)
