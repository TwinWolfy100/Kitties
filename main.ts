namespace SpriteKind {
    export const Follower = SpriteKind.create()
}
function setUpBee () {
    for (let index = 0; index < 3; index++) {
        myEnemy = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . c c c c . . . . . . . . 
            . . c c 5 5 5 5 c c . . . . . . 
            . c 5 5 5 5 5 5 5 5 c . . . . . 
            c 5 5 5 5 5 1 f 5 5 5 c . . . . 
            c 5 5 5 5 5 f f 5 5 5 5 c . . . 
            c 5 5 5 5 5 5 5 5 5 5 5 c . . . 
            c c b b 1 b 5 5 5 5 5 5 d c . . 
            c 5 3 3 3 5 5 5 5 5 d d d c . . 
            . b 5 5 5 5 5 5 5 5 d d d c . . 
            . . c b b c 5 5 b d d d d c c . 
            . c b b c 5 5 b b d d d d c d c 
            . c c c c c c d d d d d d d d c 
            . . . c c c c d 5 5 b d d d c . 
            . . c c c c c b 5 5 b c c c . . 
            . . c b b b c d 5 5 b c . . . . 
            `, SpriteKind.Enemy)
        tiles.placeOnRandomTile(myEnemy, sprites.castle.tilePath5)
        animation.runImageAnimation(
        myEnemy,
        [img`
            . . . . c c c c c . . . . . . . 
            . . c c 5 5 5 5 5 c . . . . . . 
            . c 5 5 5 5 1 f 5 5 c . . . . . 
            c 5 5 5 5 5 f f 5 5 5 c . . . . 
            c 5 5 5 5 5 5 5 5 5 5 5 c . . . 
            c c b b 1 b 5 5 5 5 5 5 c . . . 
            c 5 3 3 3 5 5 5 5 5 5 5 d c . . 
            c 5 3 3 3 5 5 5 5 5 d d d c . . 
            . c 5 5 5 5 b 5 5 5 d d d c . . 
            . . c b b c 5 5 b d d d d c . . 
            . c b b c 5 5 b b d d d d c c c 
            . c c c c c c d d d d d d d d c 
            . . . . c c c b 5 5 b d d d c . 
            . . . . . c d 5 5 b b c c c . . 
            . . . . c c c c c c c . . . . . 
            . . . . c b b b c . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . c c c c . . . . . . . . 
            . . c c 5 5 5 5 c c . . . . . . 
            . c 5 5 5 5 5 5 5 5 c . . . . . 
            c 5 5 5 5 5 1 f 5 5 5 c . . . . 
            c 5 5 5 5 5 f f 5 5 5 5 c . . . 
            c c b b 1 b 5 5 5 5 5 5 c . . . 
            c c 3 3 b b 5 5 5 5 5 5 d c . . 
            c 5 3 3 3 5 5 5 5 5 d d d c . . 
            . b 5 5 5 5 5 5 5 5 d d d c . . 
            . . c b b c 5 5 b d d d d c . . 
            . c b b c 5 5 b b d d d d c c c 
            . c c c c c c d d d d d d d d c 
            . . . c c c c d 5 5 b d d d c c 
            . . . c b c c b 5 5 b c c c . . 
            . . . c c c d 5 5 b c . . . . . 
            `],
        100,
        true
        )
    }
}
function setUpStars () {
    for (let index = 0; index < 10; index++) {
        star = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . b . . . . . . . 
            . . . . . . . b d b . . . . . . 
            . . . . . . b 5 5 5 b . . . . . 
            . . . . . b b 5 5 5 b b . . . . 
            . . b b b b 5 5 5 1 1 b b b b . 
            . . b 5 5 5 5 5 5 1 1 5 5 5 b . 
            . . b d d 5 5 5 5 5 5 5 d d b . 
            . . . b d d 5 5 5 5 5 d d b . . 
            . . . c b 5 5 5 5 5 5 5 b c . . 
            . . . c b 5 5 5 5 5 5 5 b c . . 
            . . . c 5 5 d d b d d 5 5 c . . 
            . . . c 5 d d c c c d d 5 c . . 
            . . . c c c c . . . c c c c . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Food)
        tiles.placeOnRandomTile(star, sprites.castle.tilePath5)
        animation.runImageAnimation(
        star,
        [img`
            . . . . . . . b b . . . . . . . 
            . . . . . . b d d b . . . . . . 
            . . . . . b d 5 5 d b . . . . . 
            . . . . b b 5 5 5 5 b b . . . . 
            . . . . b 5 5 5 5 5 5 b . . . . 
            b b b b b 5 5 5 5 1 1 d b b b b 
            b 5 5 5 5 5 5 5 5 1 1 1 5 5 5 b 
            b d d 5 5 5 5 5 5 1 1 1 5 d d b 
            . b d d 5 5 5 5 5 5 5 5 d d b . 
            . . b b 5 5 5 5 5 5 5 5 b b . . 
            . . c b 5 5 5 5 5 5 5 5 b c . . 
            . . c 5 5 5 5 d d 5 5 5 5 c . . 
            . . c 5 5 d b b b b d 5 5 c . . 
            . . c 5 d b c c c c b d 5 c . . 
            . . c c c c . . . . c c c c . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . b b . . . . . . . 
            . . . . . . b 5 5 b . . . . . . 
            . . . b b b 5 5 1 1 b b b . . . 
            . . . b 5 5 5 5 1 1 5 5 b . . . 
            . . . . b d 5 5 5 5 d b . . . . 
            . . . . c b 5 5 5 5 b c . . . . 
            . . . . c 5 d d d d 5 c . . . . 
            . . . . c 5 d c c d 5 c . . . . 
            . . . . c c c . . c c c . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . b . . . . . . . 
            . . . . . . . b d b . . . . . . 
            . . . . . . b 5 5 5 b . . . . . 
            . . . . . b b 5 5 5 b b . . . . 
            . . b b b b 5 5 5 1 1 b b b b . 
            . . b 5 5 5 5 5 5 1 1 5 5 5 b . 
            . . b d d 5 5 5 5 5 5 5 d d b . 
            . . . b d d 5 5 5 5 5 d d b . . 
            . . . c b 5 5 5 5 5 5 5 b c . . 
            . . . c b 5 5 5 5 5 5 5 b c . . 
            . . . c 5 5 d d b d d 5 5 c . . 
            . . . c 5 d d c c c d d 5 c . . 
            . . . c c c c . . . c c c c . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . b b . . . . . . . 
            . . . . . . b d d b . . . . . . 
            . . . . . b d 5 5 d b . . . . . 
            . . . . b b 5 5 5 5 b b . . . . 
            . . . . b 5 5 5 5 5 5 b . . . . 
            b b b b b 5 5 5 5 1 1 d b b b b 
            b 5 5 5 5 5 5 5 5 1 1 1 5 5 5 b 
            b d d 5 5 5 5 5 5 1 1 1 5 d d b 
            . b d d 5 5 5 5 5 5 5 5 d d b . 
            . . b b 5 5 5 5 5 5 5 5 b b . . 
            . . c b 5 5 5 5 5 5 5 5 b c . . 
            . . c 5 5 5 5 d d 5 5 5 5 c . . 
            . . c 5 5 d b b b b d 5 5 c . . 
            . . c 5 d b c c c c b d 5 c . . 
            . . c c c c . . . . c c c c . . 
            . . . . . . . . . . . . . . . . 
            `],
        100,
        true
        )
    }
}
sprites.onOverlap(SpriteKind.Food, SpriteKind.Player, function (sprite, otherSprite) {
    music.baDing.play()
    info.changeScoreBy(1)
    sprite.destroy(effects.confetti, 200)
    scoreRemainderAfterDivisionBy10 = info.score() % 10
    if (scoreRemainderAfterDivisionBy10 == 0) {
        game.splash("You have completed the level")
        levelNumber = info.score() / 10 + 1
        if (levelNumber == 2) {
            tiles.setTilemap(tilemap`level8`)
        }
        if (levelNumber == 3) {
            tiles.setTilemap(tilemap`level16`)
        }
        if (levelNumber == 4) {
            tiles.setTilemap(tilemap`level23`)
        }
        if (levelNumber == 5) {
            tiles.setTilemap(tilemap`level24`)
        }
        if (levelNumber == 6) {
            game.over(true, effects.confetti)
        }
        setUpStars()
    }
})
function setUpFollower (sprite: Sprite, speed: number) {
    let Follower: Sprite = null
    sprite.follow(Leader, speed)
    Follower.say(":)", 3000)
}
function setUpPlayers () {
    Leader = sprites.create(img`
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
        `, SpriteKind.Player)
    animation.runImageAnimation(
    Leader,
    [img`
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
        `,img`
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
        `,img`
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
        `],
    100,
    true
    )
    Leader.setPosition(21, 97)
    controller.moveSprite(Leader)
    scene.cameraFollowSprite(Leader)
    setUpBee()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.over(false, effects.dissolve)
})
let Leader: Sprite = null
let levelNumber = 0
let scoreRemainderAfterDivisionBy10 = 0
let star: Sprite = null
let myEnemy: Sprite = null
info.setScore(0)
tiles.setTilemap(tilemap`level2`)
setUpPlayers()
setUpStars()
game.onUpdateInterval(5000, function () {
	
})
