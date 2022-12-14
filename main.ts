enum ActionKind {
    Walking,
    Idle,
    Jumping,
    roulette_spin,
    roulette_coin,
    roulette_skull,
    roulette_chest,
    roulette_boss,
    sword_none,
    sword_swing,
    boss_left,
    boss_right,
    roulette_shop,
    roulette_enemy,
    roulette_sp1,
    roulette_sp2
}
namespace SpriteKind {
    export const none = SpriteKind.create()
    export const damaging = SpriteKind.create()
    export const Boss = SpriteKind.create()
    export const EnemyProjectile = SpriteKind.create()
}
namespace StatusBarKind {
    export const BossHealth = StatusBarKind.create()
}
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.damaging, function (sprite, otherSprite) {
    if (sprites.readDataString(otherSprite, "type") == "sword") {
        if (otherSprite.image.equals(img`
            ..........dddddddddddd..........
            ........dddddddddddddddd........
            ......dddddddddddddddddddd......
            .....dddddddddddddddddddddd.....
            ....dddddddddddddddddddddddd....
            ...dddddddddddddddddddddddddd...
            ..ddddddddd..........ddddddddd..
            ..ddddddd..............ddddddd..
            .ddddddd................ddddddd.
            .dddddd..................dddddd.
            ddddddd..................ddddddd
            dddddd....................dddddd
            dddddd....................dddddd
            dddddd....................dddddd
            dddddd....................dddddd
            dddddd....................dddddd
            dddddd....................dddddd
            dddddd....................dddddd
            dddddd....................dddddd
            dddddd....................dddddd
            dddddd....................dddddd
            ddddddd..................ddddddd
            .dddddd..................dddddd.
            .ddddddd................ddddddd.
            ..ddddddd..............ddddddd..
            ..ddddddddd..........ddddddddd..
            ...dddddddddddddddddddddddddd...
            ....dddddddddddddddddddddddd....
            .....dddddddddddddddddddddd.....
            ......dddddddddddddddddddd......
            ........dddddddddddddddd........
            ..........dddddddddddd..........
            `)) {
            if (boss) {
                boss_bar.value += -0.25
            } else {
                if (!(blockSettings.readNumber("boss next") == 1)) {
                    statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, sprite).value += -1
                }
            }
        }
    } else if (sprites.readDataString(otherSprite, "type") == "blaster") {
        otherSprite.destroy()
        if (boss) {
            boss_bar.value += -20
        } else {
            if (!(blockSettings.readNumber("boss next") == 1)) {
                statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, sprite).value += -3
            }
        }
    } else if (sprites.readDataString(otherSprite, "type") == "launcher") {
        if (boss) {
            boss_bar.value += -0.25
        } else {
            if (!(blockSettings.readNumber("boss next") == 1)) {
                statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, sprite).value += -0.5
            }
        }
    } else if (sprites.readDataString(otherSprite, "type") == "launcher+") {
        if (boss) {
            boss_bar.value += -0.5
        } else {
            if (!(blockSettings.readNumber("boss next") == 1)) {
                statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, sprite).value += -1
            }
        }
    } else if (sprites.readDataString(otherSprite, "type") == "kaboomer") {
        otherSprite.setVelocity(0, 0)
        otherSprite.setScale(2, ScaleAnchor.Middle)
        if (boss) {
            boss_bar.value += -0.125
        } else {
            if (!(blockSettings.readNumber("boss next") == 1)) {
                statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, sprite).value += -0.25
            }
        }
    } else if (sprites.readDataString(otherSprite, "type") == "splitshot") {
        mySprite10 = sprites.create(img`
            . . f f f f . . 
            . f 4 4 4 1 f . 
            f 4 4 4 4 4 1 f 
            f 4 4 4 4 4 4 f 
            f 4 4 4 4 4 4 f 
            f 4 4 4 4 4 4 f 
            . f 4 4 4 4 f . 
            . . f f f f . . 
            `, SpriteKind.damaging)
        mySprite10.setPosition(otherSprite.x, otherSprite.y)
        sprites.setDataString(mySprite10, "type", "blaster")
        mySprite10.setVelocity(100, 100)
        mySprite10 = sprites.create(img`
            . . f f f f . . 
            . f 4 4 4 1 f . 
            f 4 4 4 4 4 1 f 
            f 4 4 4 4 4 4 f 
            f 4 4 4 4 4 4 f 
            f 4 4 4 4 4 4 f 
            . f 4 4 4 4 f . 
            . . f f f f . . 
            `, SpriteKind.damaging)
        mySprite10.setPosition(otherSprite.x, otherSprite.y)
        sprites.setDataString(mySprite10, "type", "blaster")
        mySprite10.setVelocity(100, -100)
        mySprite10 = sprites.create(img`
            . . f f f f . . 
            . f 4 4 4 1 f . 
            f 4 4 4 4 4 1 f 
            f 4 4 4 4 4 4 f 
            f 4 4 4 4 4 4 f 
            f 4 4 4 4 4 4 f 
            . f 4 4 4 4 f . 
            . . f f f f . . 
            `, SpriteKind.damaging)
        mySprite10.setPosition(otherSprite.x, otherSprite.y)
        sprites.setDataString(mySprite10, "type", "blaster")
        mySprite10.setVelocity(-100, -100)
        mySprite10 = sprites.create(img`
            . . f f f f . . 
            . f 4 4 4 1 f . 
            f 4 4 4 4 4 1 f 
            f 4 4 4 4 4 4 f 
            f 4 4 4 4 4 4 f 
            f 4 4 4 4 4 4 f 
            . f 4 4 4 4 f . 
            . . f f f f . . 
            `, SpriteKind.damaging)
        mySprite10.setPosition(otherSprite.x, otherSprite.y)
        sprites.setDataString(mySprite10, "type", "blaster")
        mySprite10.setVelocity(-100, 100)
        otherSprite.destroy()
    } else if (sprites.readDataString(otherSprite, "type") == "kaboomer+") {
        otherSprite.setVelocity(0, 0)
        otherSprite.setScale(3, ScaleAnchor.Middle)
        if (boss) {
            boss_bar.value += -0.125
        } else {
            if (!(blockSettings.readNumber("boss next") == 1)) {
                statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, sprite).value += -0.25
            }
        }
    } else if (sprites.readDataString(otherSprite, "type") == "splitshot+") {
        mySprite10 = sprites.create(img`
            . . f f f f . . 
            . f 4 4 4 1 f . 
            f 4 4 4 4 4 1 f 
            f 4 4 4 4 4 4 f 
            f 4 4 4 4 4 4 f 
            f 4 4 4 4 4 4 f 
            . f 4 4 4 4 f . 
            . . f f f f . . 
            `, SpriteKind.damaging)
        mySprite10.setPosition(otherSprite.x, otherSprite.y)
        sprites.setDataString(mySprite10, "type", "blaster")
        mySprite10.setVelocity(100, 100)
        mySprite10 = sprites.create(img`
            . . f f f f . . 
            . f 4 4 4 1 f . 
            f 4 4 4 4 4 1 f 
            f 4 4 4 4 4 4 f 
            f 4 4 4 4 4 4 f 
            f 4 4 4 4 4 4 f 
            . f 4 4 4 4 f . 
            . . f f f f . . 
            `, SpriteKind.damaging)
        mySprite10.setPosition(otherSprite.x, otherSprite.y)
        sprites.setDataString(mySprite10, "type", "blaster")
        mySprite10.setVelocity(100, -100)
        mySprite10 = sprites.create(img`
            . . f f f f . . 
            . f 4 4 4 1 f . 
            f 4 4 4 4 4 1 f 
            f 4 4 4 4 4 4 f 
            f 4 4 4 4 4 4 f 
            f 4 4 4 4 4 4 f 
            . f 4 4 4 4 f . 
            . . f f f f . . 
            `, SpriteKind.damaging)
        mySprite10.setPosition(otherSprite.x, otherSprite.y)
        sprites.setDataString(mySprite10, "type", "blaster")
        mySprite10.setVelocity(-100, -100)
        mySprite10 = sprites.create(img`
            . . f f f f . . 
            . f 4 4 4 1 f . 
            f 4 4 4 4 4 1 f 
            f 4 4 4 4 4 4 f 
            f 4 4 4 4 4 4 f 
            f 4 4 4 4 4 4 f 
            . f 4 4 4 4 f . 
            . . f f f f . . 
            `, SpriteKind.damaging)
        mySprite10.setPosition(otherSprite.x, otherSprite.y)
        sprites.setDataString(mySprite10, "type", "blaster")
        mySprite10.setVelocity(-100, 100)
        otherSprite.destroy()
        mySprite10 = sprites.create(img`
            . . f f f f . . 
            . f 4 4 4 1 f . 
            f 4 4 4 4 4 1 f 
            f 4 4 4 4 4 4 f 
            f 4 4 4 4 4 4 f 
            f 4 4 4 4 4 4 f 
            . f 4 4 4 4 f . 
            . . f f f f . . 
            `, SpriteKind.damaging)
        mySprite10.setPosition(otherSprite.x, otherSprite.y)
        sprites.setDataString(mySprite10, "type", "blaster")
        mySprite10.setVelocity(0, 100)
        mySprite10 = sprites.create(img`
            . . f f f f . . 
            . f 4 4 4 1 f . 
            f 4 4 4 4 4 1 f 
            f 4 4 4 4 4 4 f 
            f 4 4 4 4 4 4 f 
            f 4 4 4 4 4 4 f 
            . f 4 4 4 4 f . 
            . . f f f f . . 
            `, SpriteKind.damaging)
        mySprite10.setPosition(otherSprite.x, otherSprite.y)
        sprites.setDataString(mySprite10, "type", "blaster")
        mySprite10.setVelocity(0, -100)
        mySprite10 = sprites.create(img`
            . . f f f f . . 
            . f 4 4 4 1 f . 
            f 4 4 4 4 4 1 f 
            f 4 4 4 4 4 4 f 
            f 4 4 4 4 4 4 f 
            f 4 4 4 4 4 4 f 
            . f 4 4 4 4 f . 
            . . f f f f . . 
            `, SpriteKind.damaging)
        mySprite10.setPosition(otherSprite.x, otherSprite.y)
        sprites.setDataString(mySprite10, "type", "blaster")
        mySprite10.setVelocity(-100, 0)
        mySprite10 = sprites.create(img`
            . . f f f f . . 
            . f 4 4 4 1 f . 
            f 4 4 4 4 4 1 f 
            f 4 4 4 4 4 4 f 
            f 4 4 4 4 4 4 f 
            f 4 4 4 4 4 4 f 
            . f 4 4 4 4 f . 
            . . f f f f . . 
            `, SpriteKind.damaging)
        mySprite10.setPosition(otherSprite.x, otherSprite.y)
        sprites.setDataString(mySprite10, "type", "blaster")
        mySprite10.setVelocity(100, 0)
        otherSprite.destroy()
    } else if (sprites.readDataString(otherSprite, "type") == "kaboomersp") {
        otherSprite.setVelocity(0, 0)
        otherSprite.setScale(5, ScaleAnchor.Middle)
        if (boss) {
            boss_bar.value += -0.25
        } else {
            if (!(blockSettings.readNumber("boss next") == 1)) {
                statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, sprite).value += -0.5
            }
        }
    } else if (sprites.readDataString(otherSprite, "type") == "swordsp") {
        if (boss) {
            boss_bar.value += -0.5
        } else {
            if (!(blockSettings.readNumber("boss next") == 1)) {
                statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, sprite).value += -2
            }
        }
    }
})
statusbars.onZero(StatusBarKind.BossHealth, function (status) {
    boss = false
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (blockSettings.readNumber("special") == 10) {
        statusbars.getStatusBarAttachedTo(StatusBarKind.Magic, mySprite4).value += -10
        blockSettings.writeNumber("special", 0)
        if (blockSettings.readNumber("Weapon") == 1 || blockSettings.readNumber("Weapon") == 4) {
            mySprite5 = sprites.create(img`
                ..........dddddddddddd..........
                ........dddddddddddddddd........
                ......dddddddddddddddddddd......
                .....dddddddddddddddddddddd.....
                ....dddddddddddddddddddddddd....
                ...dddddddddddddddddddddddddd...
                ..dddddddddddddddddddddddddddd..
                ..dddddddddddddddddddddddddddd..
                .dddddddddddddddddddddddddddddd.
                .dddddddddddddddddddddddddddddd.
                dddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddd
                dddddddddddddd....dddddddddddddd
                ddddddddddddd......ddddddddddddd
                ddddddddddddd......ddddddddddddd
                ddddddddddddd......ddddddddddddd
                ddddddddddddd......ddddddddddddd
                dddddddddddddd....dddddddddddddd
                dddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddd
                .dddddddddddddddddddddddddddddd.
                .dddddddddddddddddddddddddddddd.
                ..dddddddddddddddddddddddddddd..
                ..dddddddddddddddddddddddddddd..
                ...dddddddddddddddddddddddddd...
                ....dddddddddddddddddddddddd....
                .....dddddddddddddddddddddd.....
                ......dddddddddddddddddddd......
                ........dddddddddddddddd........
                ..........dddddddddddd..........
                `, SpriteKind.damaging)
            mySprite5.setPosition(mySprite4.x, mySprite4.y)
            mySprite5.follow(mySprite4, 200)
            sprites.setDataString(mySprite5, "type", "swordsp")
            mySprite5.setScale(3.5, ScaleAnchor.Middle)
            pause(3000)
            mySprite5.destroy()
        } else if (blockSettings.readNumber("Weapon") == 2 || blockSettings.readNumber("Weapon") == 5) {
            for (let index = 0; index < 5; index++) {
                if (true) {
                    mySprite10 = sprites.create(img`
                        . . f f f f . . 
                        . f 4 4 4 1 f . 
                        f 4 4 4 4 4 1 f 
                        f 4 4 4 4 4 4 f 
                        f 4 4 4 4 4 4 f 
                        f 4 4 4 4 4 4 f 
                        . f 4 4 4 4 f . 
                        . . f f f f . . 
                        `, SpriteKind.damaging)
                    mySprite10.setPosition(mySprite4.x, mySprite4.y)
                    sprites.setDataString(mySprite10, "type", "blaster")
                    mySprite10.setVelocity(100, 100)
                    mySprite10 = sprites.create(img`
                        . . f f f f . . 
                        . f 4 4 4 1 f . 
                        f 4 4 4 4 4 1 f 
                        f 4 4 4 4 4 4 f 
                        f 4 4 4 4 4 4 f 
                        f 4 4 4 4 4 4 f 
                        . f 4 4 4 4 f . 
                        . . f f f f . . 
                        `, SpriteKind.damaging)
                    mySprite10.setPosition(mySprite4.x, mySprite4.y)
                    sprites.setDataString(mySprite10, "type", "blaster")
                    mySprite10.setVelocity(100, -100)
                    mySprite10 = sprites.create(img`
                        . . f f f f . . 
                        . f 4 4 4 1 f . 
                        f 4 4 4 4 4 1 f 
                        f 4 4 4 4 4 4 f 
                        f 4 4 4 4 4 4 f 
                        f 4 4 4 4 4 4 f 
                        . f 4 4 4 4 f . 
                        . . f f f f . . 
                        `, SpriteKind.damaging)
                    mySprite10.setPosition(mySprite4.x, mySprite4.y)
                    sprites.setDataString(mySprite10, "type", "blaster")
                    mySprite10.setVelocity(-100, -100)
                    mySprite10 = sprites.create(img`
                        . . f f f f . . 
                        . f 4 4 4 1 f . 
                        f 4 4 4 4 4 1 f 
                        f 4 4 4 4 4 4 f 
                        f 4 4 4 4 4 4 f 
                        f 4 4 4 4 4 4 f 
                        . f 4 4 4 4 f . 
                        . . f f f f . . 
                        `, SpriteKind.damaging)
                    mySprite10.setPosition(mySprite4.x, mySprite4.y)
                    sprites.setDataString(mySprite10, "type", "blaster")
                    mySprite10.setVelocity(-100, 100)
                    mySprite10 = sprites.create(img`
                        . . f f f f . . 
                        . f 4 4 4 1 f . 
                        f 4 4 4 4 4 1 f 
                        f 4 4 4 4 4 4 f 
                        f 4 4 4 4 4 4 f 
                        f 4 4 4 4 4 4 f 
                        . f 4 4 4 4 f . 
                        . . f f f f . . 
                        `, SpriteKind.damaging)
                    mySprite10.setPosition(mySprite4.x, mySprite4.y)
                    sprites.setDataString(mySprite10, "type", "blaster")
                    mySprite10.setVelocity(0, 100)
                    mySprite10 = sprites.create(img`
                        . . f f f f . . 
                        . f 4 4 4 1 f . 
                        f 4 4 4 4 4 1 f 
                        f 4 4 4 4 4 4 f 
                        f 4 4 4 4 4 4 f 
                        f 4 4 4 4 4 4 f 
                        . f 4 4 4 4 f . 
                        . . f f f f . . 
                        `, SpriteKind.damaging)
                    mySprite10.setPosition(mySprite4.x, mySprite4.y)
                    sprites.setDataString(mySprite10, "type", "blaster")
                    mySprite10.setVelocity(0, -100)
                    mySprite10 = sprites.create(img`
                        . . f f f f . . 
                        . f 4 4 4 1 f . 
                        f 4 4 4 4 4 1 f 
                        f 4 4 4 4 4 4 f 
                        f 4 4 4 4 4 4 f 
                        f 4 4 4 4 4 4 f 
                        . f 4 4 4 4 f . 
                        . . f f f f . . 
                        `, SpriteKind.damaging)
                    mySprite10.setPosition(mySprite4.x, mySprite4.y)
                    sprites.setDataString(mySprite10, "type", "blaster")
                    mySprite10.setVelocity(-100, 0)
                    mySprite10 = sprites.create(img`
                        . . f f f f . . 
                        . f 4 4 4 1 f . 
                        f 4 4 4 4 4 1 f 
                        f 4 4 4 4 4 4 f 
                        f 4 4 4 4 4 4 f 
                        f 4 4 4 4 4 4 f 
                        . f 4 4 4 4 f . 
                        . . f f f f . . 
                        `, SpriteKind.damaging)
                    mySprite10.setPosition(mySprite4.x, mySprite4.y)
                    sprites.setDataString(mySprite10, "type", "blaster")
                    mySprite10.setVelocity(100, 0)
                }
                if (true) {
                    mySprite10 = sprites.create(img`
                        . . f f f f . . 
                        . f 4 4 4 1 f . 
                        f 4 4 4 4 4 1 f 
                        f 4 4 4 4 4 4 f 
                        f 4 4 4 4 4 4 f 
                        f 4 4 4 4 4 4 f 
                        . f 4 4 4 4 f . 
                        . . f f f f . . 
                        `, SpriteKind.damaging)
                    mySprite10.setPosition(mySprite4.x, mySprite4.y)
                    sprites.setDataString(mySprite10, "type", "blaster")
                    mySprite10.setVelocity(100, 50)
                    mySprite10 = sprites.create(img`
                        . . f f f f . . 
                        . f 4 4 4 1 f . 
                        f 4 4 4 4 4 1 f 
                        f 4 4 4 4 4 4 f 
                        f 4 4 4 4 4 4 f 
                        f 4 4 4 4 4 4 f 
                        . f 4 4 4 4 f . 
                        . . f f f f . . 
                        `, SpriteKind.damaging)
                    mySprite10.setPosition(mySprite4.x, mySprite4.y)
                    sprites.setDataString(mySprite10, "type", "blaster")
                    mySprite10.setVelocity(100, -50)
                    mySprite10 = sprites.create(img`
                        . . f f f f . . 
                        . f 4 4 4 1 f . 
                        f 4 4 4 4 4 1 f 
                        f 4 4 4 4 4 4 f 
                        f 4 4 4 4 4 4 f 
                        f 4 4 4 4 4 4 f 
                        . f 4 4 4 4 f . 
                        . . f f f f . . 
                        `, SpriteKind.damaging)
                    mySprite10.setPosition(mySprite4.x, mySprite4.y)
                    sprites.setDataString(mySprite10, "type", "blaster")
                    mySprite10.setVelocity(-100, -50)
                    mySprite10 = sprites.create(img`
                        . . f f f f . . 
                        . f 4 4 4 1 f . 
                        f 4 4 4 4 4 1 f 
                        f 4 4 4 4 4 4 f 
                        f 4 4 4 4 4 4 f 
                        f 4 4 4 4 4 4 f 
                        . f 4 4 4 4 f . 
                        . . f f f f . . 
                        `, SpriteKind.damaging)
                    mySprite10.setPosition(mySprite4.x, mySprite4.y)
                    sprites.setDataString(mySprite10, "type", "blaster")
                    mySprite10.setVelocity(-100, 50)
                    mySprite10 = sprites.create(img`
                        . . f f f f . . 
                        . f 4 4 4 1 f . 
                        f 4 4 4 4 4 1 f 
                        f 4 4 4 4 4 4 f 
                        f 4 4 4 4 4 4 f 
                        f 4 4 4 4 4 4 f 
                        . f 4 4 4 4 f . 
                        . . f f f f . . 
                        `, SpriteKind.damaging)
                    mySprite10.setPosition(mySprite4.x, mySprite4.y)
                    sprites.setDataString(mySprite10, "type", "blaster")
                    mySprite10.setVelocity(50, 100)
                    mySprite10 = sprites.create(img`
                        . . f f f f . . 
                        . f 4 4 4 1 f . 
                        f 4 4 4 4 4 1 f 
                        f 4 4 4 4 4 4 f 
                        f 4 4 4 4 4 4 f 
                        f 4 4 4 4 4 4 f 
                        . f 4 4 4 4 f . 
                        . . f f f f . . 
                        `, SpriteKind.damaging)
                    mySprite10.setPosition(mySprite4.x, mySprite4.y)
                    sprites.setDataString(mySprite10, "type", "blaster")
                    mySprite10.setVelocity(50, -100)
                    mySprite10 = sprites.create(img`
                        . . f f f f . . 
                        . f 4 4 4 1 f . 
                        f 4 4 4 4 4 1 f 
                        f 4 4 4 4 4 4 f 
                        f 4 4 4 4 4 4 f 
                        f 4 4 4 4 4 4 f 
                        . f 4 4 4 4 f . 
                        . . f f f f . . 
                        `, SpriteKind.damaging)
                    mySprite10.setPosition(mySprite4.x, mySprite4.y)
                    sprites.setDataString(mySprite10, "type", "blaster")
                    mySprite10.setVelocity(-50, 0)
                    mySprite10 = sprites.create(img`
                        . . f f f f . . 
                        . f 4 4 4 1 f . 
                        f 4 4 4 4 4 1 f 
                        f 4 4 4 4 4 4 f 
                        f 4 4 4 4 4 4 f 
                        f 4 4 4 4 4 4 f 
                        . f 4 4 4 4 f . 
                        . . f f f f . . 
                        `, SpriteKind.damaging)
                    mySprite10.setPosition(mySprite4.x, mySprite4.y)
                    sprites.setDataString(mySprite10, "type", "blaster")
                    mySprite10.setVelocity(50, 0)
                }
                pause(1000)
            }
        } else if (blockSettings.readNumber("Weapon") == 3 || blockSettings.readNumber("Weapon") == 6) {
            for (let index = 0; index < 3; index++) {
                if (true) {
                    mySprite9 = sprites.create(img`
                        . . . . . f f f f f f . . . . . 
                        . . . f f 4 4 4 4 1 1 f f . . . 
                        . . f 4 4 4 4 4 4 4 4 1 1 f . . 
                        . f 4 4 4 4 4 4 4 4 4 4 4 1 f . 
                        . f 4 4 4 4 4 4 4 4 4 4 4 4 f . 
                        f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
                        f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
                        f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
                        f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
                        f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
                        f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
                        . f 4 4 4 4 4 4 4 4 4 4 4 4 f . 
                        . f 4 4 4 4 4 4 4 4 4 4 4 4 f . 
                        . . f 4 4 4 4 4 4 4 4 4 4 f . . 
                        . . . f f 4 4 4 4 4 4 f f . . . 
                        . . . . . f f f f f f . . . . . 
                        `, SpriteKind.damaging)
                    mySprite9.setPosition(mySprite4.x, mySprite4.y)
                    sprites.setDataString(mySprite9, "type", "launcher")
                    mySprite9.setVelocity(0, 100)
                    if (blockSettings.readNumber("Weapon") == 6) {
                        sprites.setDataString(mySprite9, "type", "launcher+")
                    }
                }
                if (true) {
                    mySprite9 = sprites.create(img`
                        . . . . . f f f f f f . . . . . 
                        . . . f f 4 4 4 4 1 1 f f . . . 
                        . . f 4 4 4 4 4 4 4 4 1 1 f . . 
                        . f 4 4 4 4 4 4 4 4 4 4 4 1 f . 
                        . f 4 4 4 4 4 4 4 4 4 4 4 4 f . 
                        f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
                        f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
                        f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
                        f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
                        f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
                        f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
                        . f 4 4 4 4 4 4 4 4 4 4 4 4 f . 
                        . f 4 4 4 4 4 4 4 4 4 4 4 4 f . 
                        . . f 4 4 4 4 4 4 4 4 4 4 f . . 
                        . . . f f 4 4 4 4 4 4 f f . . . 
                        . . . . . f f f f f f . . . . . 
                        `, SpriteKind.damaging)
                    mySprite9.setPosition(mySprite4.x, mySprite4.y)
                    sprites.setDataString(mySprite9, "type", "launcher")
                    mySprite9.setVelocity(0, -100)
                    if (blockSettings.readNumber("Weapon") == 6) {
                        sprites.setDataString(mySprite9, "type", "launcher+")
                    }
                }
                if (true) {
                    mySprite9 = sprites.create(img`
                        . . . . . f f f f f f . . . . . 
                        . . . f f 4 4 4 4 1 1 f f . . . 
                        . . f 4 4 4 4 4 4 4 4 1 1 f . . 
                        . f 4 4 4 4 4 4 4 4 4 4 4 1 f . 
                        . f 4 4 4 4 4 4 4 4 4 4 4 4 f . 
                        f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
                        f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
                        f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
                        f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
                        f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
                        f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
                        . f 4 4 4 4 4 4 4 4 4 4 4 4 f . 
                        . f 4 4 4 4 4 4 4 4 4 4 4 4 f . 
                        . . f 4 4 4 4 4 4 4 4 4 4 f . . 
                        . . . f f 4 4 4 4 4 4 f f . . . 
                        . . . . . f f f f f f . . . . . 
                        `, SpriteKind.damaging)
                    mySprite9.setPosition(mySprite4.x, mySprite4.y)
                    sprites.setDataString(mySprite9, "type", "launcher")
                    mySprite9.setVelocity(100, 0)
                    if (blockSettings.readNumber("Weapon") == 6) {
                        sprites.setDataString(mySprite9, "type", "launcher+")
                    }
                }
                if (true) {
                    mySprite9 = sprites.create(img`
                        . . . . . f f f f f f . . . . . 
                        . . . f f 4 4 4 4 1 1 f f . . . 
                        . . f 4 4 4 4 4 4 4 4 1 1 f . . 
                        . f 4 4 4 4 4 4 4 4 4 4 4 1 f . 
                        . f 4 4 4 4 4 4 4 4 4 4 4 4 f . 
                        f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
                        f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
                        f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
                        f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
                        f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
                        f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
                        . f 4 4 4 4 4 4 4 4 4 4 4 4 f . 
                        . f 4 4 4 4 4 4 4 4 4 4 4 4 f . 
                        . . f 4 4 4 4 4 4 4 4 4 4 f . . 
                        . . . f f 4 4 4 4 4 4 f f . . . 
                        . . . . . f f f f f f . . . . . 
                        `, SpriteKind.damaging)
                    mySprite9.setPosition(mySprite4.x, mySprite4.y)
                    sprites.setDataString(mySprite9, "type", "launcher")
                    mySprite9.setVelocity(-100, 0)
                    if (blockSettings.readNumber("Weapon") == 6) {
                        sprites.setDataString(mySprite9, "type", "launcher+")
                    }
                }
                pause(1000)
            }
        } else if (blockSettings.readNumber("Weapon") == 7 || blockSettings.readNumber("Weapon") == 9) {
            sprites.destroyAllSpritesOfKind(SpriteKind.damaging)
            mySprite9 = sprites.create(img`
                . . . . . f f f f f f . . . . . 
                . . . f f 2 2 2 2 2 2 f f . . . 
                . . f 2 2 4 4 4 4 4 4 2 2 f . . 
                . f 2 4 4 4 5 5 5 5 4 4 4 2 f . 
                . f 2 4 5 5 5 2 2 5 5 5 4 2 f . 
                f 2 4 4 5 2 2 4 4 2 2 5 4 4 2 f 
                f 2 4 5 5 2 4 5 5 4 2 5 5 4 2 f 
                f 2 4 5 2 4 5 5 5 5 4 2 5 4 2 f 
                f 2 4 5 2 4 5 5 5 5 4 2 5 4 2 f 
                f 2 4 5 5 2 4 5 5 4 2 5 5 4 2 f 
                f 2 4 4 5 2 2 4 4 2 2 5 4 4 2 f 
                . f 2 4 5 5 5 2 2 5 5 5 4 2 f . 
                . f 2 4 4 4 5 5 5 5 4 4 4 2 f . 
                . . f 2 2 4 4 4 4 4 4 2 2 f . . 
                . . . f f 2 2 2 2 2 2 f f . . . 
                . . . . . f f f f f f . . . . . 
                `, SpriteKind.damaging)
            mySprite9.setPosition(mySprite4.x, mySprite4.y)
            sprites.setDataString(mySprite9, "type", "kaboomersp")
            if (direction == 1) {
                mySprite9.setVelocity(0, -100)
            } else if (direction == 2) {
                mySprite9.setVelocity(100, 0)
            } else if (direction == 3) {
                mySprite9.setVelocity(0, 100)
            } else if (direction == 4) {
                mySprite9.setVelocity(-100, 0)
            }
            pause(5000)
            mySprite9.destroy()
        } else if (blockSettings.readNumber("Weapon") == 8 || blockSettings.readNumber("Weapon") == 10) {
            if (true) {
                mySprite9 = sprites.create(img`
                    . . . . . f f f f f f . . . . . 
                    . . . f f f 2 2 2 2 f f f . . . 
                    . . f 4 4 1 f 2 2 f 4 4 1 f . . 
                    . f 4 4 4 4 1 f f 4 4 4 4 1 f . 
                    . f 4 4 4 4 4 f f 4 4 4 4 4 f . 
                    f f 4 4 4 4 4 f f 4 4 4 4 4 f f 
                    f 2 f 4 4 4 f 2 2 f 4 4 4 f 2 f 
                    f 2 2 f f f 2 2 2 2 f f f 2 2 f 
                    f 2 2 f f f 2 2 2 2 f f f 2 2 f 
                    f 2 f 4 4 1 f 2 2 f 4 4 1 f 2 f 
                    f f 4 4 4 4 1 f f 4 4 4 4 1 f f 
                    . f 4 4 4 4 4 f f 4 4 4 4 4 f . 
                    . f 4 4 4 4 4 f f 4 4 4 4 4 f . 
                    . . f 4 4 4 f 2 2 f 4 4 4 f . . 
                    . . . f f f 2 2 2 2 f f f . . . 
                    . . . . . f f f f f f . . . . . 
                    `, SpriteKind.damaging)
                mySprite9.setPosition(mySprite4.x, mySprite4.y)
                sprites.setDataString(mySprite9, "type", "splitshot")
                if (blockSettings.readNumber("Weapon") == 10) {
                    sprites.setDataString(mySprite9, "type", "splitshot+")
                    mySprite9.setImage(img`
                        . . . . . f f f f f f . . . . . 
                        . . . f f f 4 4 4 4 f f f . . . 
                        . . f 4 4 1 f 4 4 f 4 4 1 f . . 
                        . f 4 4 4 4 1 f f 4 4 4 4 1 f . 
                        . f 4 4 4 4 4 f f 4 4 4 4 4 f . 
                        f f 4 4 4 4 4 f f 4 4 4 4 4 f f 
                        f 4 f 4 4 4 f 4 4 f 4 4 4 f 4 f 
                        f 4 4 f f f 4 4 4 4 f f f 4 4 f 
                        f 4 4 f f f 4 4 4 4 f f f 4 4 f 
                        f 4 f 4 4 1 f 4 4 f 4 4 1 f 4 f 
                        f f 4 4 4 4 1 f f 4 4 4 4 1 f f 
                        . f 4 4 4 4 4 f f 4 4 4 4 4 f . 
                        . f 4 4 4 4 4 f f 4 4 4 4 4 f . 
                        . . f 4 4 4 f 4 4 f 4 4 4 f . . 
                        . . . f f f 4 4 4 4 f f f . . . 
                        . . . . . f f f f f f . . . . . 
                        `)
                }
                mySprite9.setVelocity(100, 0)
            }
            if (true) {
                mySprite9 = sprites.create(img`
                    . . . . . f f f f f f . . . . . 
                    . . . f f f 2 2 2 2 f f f . . . 
                    . . f 4 4 1 f 2 2 f 4 4 1 f . . 
                    . f 4 4 4 4 1 f f 4 4 4 4 1 f . 
                    . f 4 4 4 4 4 f f 4 4 4 4 4 f . 
                    f f 4 4 4 4 4 f f 4 4 4 4 4 f f 
                    f 2 f 4 4 4 f 2 2 f 4 4 4 f 2 f 
                    f 2 2 f f f 2 2 2 2 f f f 2 2 f 
                    f 2 2 f f f 2 2 2 2 f f f 2 2 f 
                    f 2 f 4 4 1 f 2 2 f 4 4 1 f 2 f 
                    f f 4 4 4 4 1 f f 4 4 4 4 1 f f 
                    . f 4 4 4 4 4 f f 4 4 4 4 4 f . 
                    . f 4 4 4 4 4 f f 4 4 4 4 4 f . 
                    . . f 4 4 4 f 2 2 f 4 4 4 f . . 
                    . . . f f f 2 2 2 2 f f f . . . 
                    . . . . . f f f f f f . . . . . 
                    `, SpriteKind.damaging)
                mySprite9.setPosition(mySprite4.x, mySprite4.y)
                sprites.setDataString(mySprite9, "type", "splitshot")
                if (blockSettings.readNumber("Weapon") == 10) {
                    sprites.setDataString(mySprite9, "type", "splitshot+")
                    mySprite9.setImage(img`
                        . . . . . f f f f f f . . . . . 
                        . . . f f f 4 4 4 4 f f f . . . 
                        . . f 4 4 1 f 4 4 f 4 4 1 f . . 
                        . f 4 4 4 4 1 f f 4 4 4 4 1 f . 
                        . f 4 4 4 4 4 f f 4 4 4 4 4 f . 
                        f f 4 4 4 4 4 f f 4 4 4 4 4 f f 
                        f 4 f 4 4 4 f 4 4 f 4 4 4 f 4 f 
                        f 4 4 f f f 4 4 4 4 f f f 4 4 f 
                        f 4 4 f f f 4 4 4 4 f f f 4 4 f 
                        f 4 f 4 4 1 f 4 4 f 4 4 1 f 4 f 
                        f f 4 4 4 4 1 f f 4 4 4 4 1 f f 
                        . f 4 4 4 4 4 f f 4 4 4 4 4 f . 
                        . f 4 4 4 4 4 f f 4 4 4 4 4 f . 
                        . . f 4 4 4 f 4 4 f 4 4 4 f . . 
                        . . . f f f 4 4 4 4 f f f . . . 
                        . . . . . f f f f f f . . . . . 
                        `)
                }
                mySprite9.setVelocity(100, 0)
            }
            if (true) {
                mySprite9 = sprites.create(img`
                    . . . . . f f f f f f . . . . . 
                    . . . f f f 2 2 2 2 f f f . . . 
                    . . f 4 4 1 f 2 2 f 4 4 1 f . . 
                    . f 4 4 4 4 1 f f 4 4 4 4 1 f . 
                    . f 4 4 4 4 4 f f 4 4 4 4 4 f . 
                    f f 4 4 4 4 4 f f 4 4 4 4 4 f f 
                    f 2 f 4 4 4 f 2 2 f 4 4 4 f 2 f 
                    f 2 2 f f f 2 2 2 2 f f f 2 2 f 
                    f 2 2 f f f 2 2 2 2 f f f 2 2 f 
                    f 2 f 4 4 1 f 2 2 f 4 4 1 f 2 f 
                    f f 4 4 4 4 1 f f 4 4 4 4 1 f f 
                    . f 4 4 4 4 4 f f 4 4 4 4 4 f . 
                    . f 4 4 4 4 4 f f 4 4 4 4 4 f . 
                    . . f 4 4 4 f 2 2 f 4 4 4 f . . 
                    . . . f f f 2 2 2 2 f f f . . . 
                    . . . . . f f f f f f . . . . . 
                    `, SpriteKind.damaging)
                mySprite9.setPosition(mySprite4.x, mySprite4.y)
                sprites.setDataString(mySprite9, "type", "splitshot")
                if (blockSettings.readNumber("Weapon") == 10) {
                    sprites.setDataString(mySprite9, "type", "splitshot+")
                    mySprite9.setImage(img`
                        . . . . . f f f f f f . . . . . 
                        . . . f f f 4 4 4 4 f f f . . . 
                        . . f 4 4 1 f 4 4 f 4 4 1 f . . 
                        . f 4 4 4 4 1 f f 4 4 4 4 1 f . 
                        . f 4 4 4 4 4 f f 4 4 4 4 4 f . 
                        f f 4 4 4 4 4 f f 4 4 4 4 4 f f 
                        f 4 f 4 4 4 f 4 4 f 4 4 4 f 4 f 
                        f 4 4 f f f 4 4 4 4 f f f 4 4 f 
                        f 4 4 f f f 4 4 4 4 f f f 4 4 f 
                        f 4 f 4 4 1 f 4 4 f 4 4 1 f 4 f 
                        f f 4 4 4 4 1 f f 4 4 4 4 1 f f 
                        . f 4 4 4 4 4 f f 4 4 4 4 4 f . 
                        . f 4 4 4 4 4 f f 4 4 4 4 4 f . 
                        . . f 4 4 4 f 4 4 f 4 4 4 f . . 
                        . . . f f f 4 4 4 4 f f f . . . 
                        . . . . . f f f f f f . . . . . 
                        `)
                }
                mySprite9.setVelocity(0, -100)
            }
            if (true) {
                mySprite9 = sprites.create(img`
                    . . . . . f f f f f f . . . . . 
                    . . . f f f 2 2 2 2 f f f . . . 
                    . . f 4 4 1 f 2 2 f 4 4 1 f . . 
                    . f 4 4 4 4 1 f f 4 4 4 4 1 f . 
                    . f 4 4 4 4 4 f f 4 4 4 4 4 f . 
                    f f 4 4 4 4 4 f f 4 4 4 4 4 f f 
                    f 2 f 4 4 4 f 2 2 f 4 4 4 f 2 f 
                    f 2 2 f f f 2 2 2 2 f f f 2 2 f 
                    f 2 2 f f f 2 2 2 2 f f f 2 2 f 
                    f 2 f 4 4 1 f 2 2 f 4 4 1 f 2 f 
                    f f 4 4 4 4 1 f f 4 4 4 4 1 f f 
                    . f 4 4 4 4 4 f f 4 4 4 4 4 f . 
                    . f 4 4 4 4 4 f f 4 4 4 4 4 f . 
                    . . f 4 4 4 f 2 2 f 4 4 4 f . . 
                    . . . f f f 2 2 2 2 f f f . . . 
                    . . . . . f f f f f f . . . . . 
                    `, SpriteKind.damaging)
                mySprite9.setPosition(mySprite4.x, mySprite4.y)
                sprites.setDataString(mySprite9, "type", "splitshot")
                if (blockSettings.readNumber("Weapon") == 10) {
                    sprites.setDataString(mySprite9, "type", "splitshot+")
                    mySprite9.setImage(img`
                        . . . . . f f f f f f . . . . . 
                        . . . f f f 4 4 4 4 f f f . . . 
                        . . f 4 4 1 f 4 4 f 4 4 1 f . . 
                        . f 4 4 4 4 1 f f 4 4 4 4 1 f . 
                        . f 4 4 4 4 4 f f 4 4 4 4 4 f . 
                        f f 4 4 4 4 4 f f 4 4 4 4 4 f f 
                        f 4 f 4 4 4 f 4 4 f 4 4 4 f 4 f 
                        f 4 4 f f f 4 4 4 4 f f f 4 4 f 
                        f 4 4 f f f 4 4 4 4 f f f 4 4 f 
                        f 4 f 4 4 1 f 4 4 f 4 4 1 f 4 f 
                        f f 4 4 4 4 1 f f 4 4 4 4 1 f f 
                        . f 4 4 4 4 4 f f 4 4 4 4 4 f . 
                        . f 4 4 4 4 4 f f 4 4 4 4 4 f . 
                        . . f 4 4 4 f 4 4 f 4 4 4 f . . 
                        . . . f f f 4 4 4 4 f f f . . . 
                        . . . . . f f f f f f . . . . . 
                        `)
                }
                mySprite9.setVelocity(-100, 0)
            }
            if (true) {
                mySprite9 = sprites.create(img`
                    . . . . . f f f f f f . . . . . 
                    . . . f f f 2 2 2 2 f f f . . . 
                    . . f 4 4 1 f 2 2 f 4 4 1 f . . 
                    . f 4 4 4 4 1 f f 4 4 4 4 1 f . 
                    . f 4 4 4 4 4 f f 4 4 4 4 4 f . 
                    f f 4 4 4 4 4 f f 4 4 4 4 4 f f 
                    f 2 f 4 4 4 f 2 2 f 4 4 4 f 2 f 
                    f 2 2 f f f 2 2 2 2 f f f 2 2 f 
                    f 2 2 f f f 2 2 2 2 f f f 2 2 f 
                    f 2 f 4 4 1 f 2 2 f 4 4 1 f 2 f 
                    f f 4 4 4 4 1 f f 4 4 4 4 1 f f 
                    . f 4 4 4 4 4 f f 4 4 4 4 4 f . 
                    . f 4 4 4 4 4 f f 4 4 4 4 4 f . 
                    . . f 4 4 4 f 2 2 f 4 4 4 f . . 
                    . . . f f f 2 2 2 2 f f f . . . 
                    . . . . . f f f f f f . . . . . 
                    `, SpriteKind.damaging)
                mySprite9.setPosition(mySprite4.x, mySprite4.y)
                sprites.setDataString(mySprite9, "type", "splitshot")
                if (blockSettings.readNumber("Weapon") == 10) {
                    sprites.setDataString(mySprite9, "type", "splitshot+")
                    mySprite9.setImage(img`
                        . . . . . f f f f f f . . . . . 
                        . . . f f f 4 4 4 4 f f f . . . 
                        . . f 4 4 1 f 4 4 f 4 4 1 f . . 
                        . f 4 4 4 4 1 f f 4 4 4 4 1 f . 
                        . f 4 4 4 4 4 f f 4 4 4 4 4 f . 
                        f f 4 4 4 4 4 f f 4 4 4 4 4 f f 
                        f 4 f 4 4 4 f 4 4 f 4 4 4 f 4 f 
                        f 4 4 f f f 4 4 4 4 f f f 4 4 f 
                        f 4 4 f f f 4 4 4 4 f f f 4 4 f 
                        f 4 f 4 4 1 f 4 4 f 4 4 1 f 4 f 
                        f f 4 4 4 4 1 f f 4 4 4 4 1 f f 
                        . f 4 4 4 4 4 f f 4 4 4 4 4 f . 
                        . f 4 4 4 4 4 f f 4 4 4 4 4 f . 
                        . . f 4 4 4 f 4 4 f 4 4 4 f . . 
                        . . . f f f 4 4 4 4 f f f . . . 
                        . . . . . f f f f f f . . . . . 
                        `)
                }
                mySprite9.setVelocity(100, 100)
            }
            if (true) {
                mySprite9 = sprites.create(img`
                    . . . . . f f f f f f . . . . . 
                    . . . f f f 2 2 2 2 f f f . . . 
                    . . f 4 4 1 f 2 2 f 4 4 1 f . . 
                    . f 4 4 4 4 1 f f 4 4 4 4 1 f . 
                    . f 4 4 4 4 4 f f 4 4 4 4 4 f . 
                    f f 4 4 4 4 4 f f 4 4 4 4 4 f f 
                    f 2 f 4 4 4 f 2 2 f 4 4 4 f 2 f 
                    f 2 2 f f f 2 2 2 2 f f f 2 2 f 
                    f 2 2 f f f 2 2 2 2 f f f 2 2 f 
                    f 2 f 4 4 1 f 2 2 f 4 4 1 f 2 f 
                    f f 4 4 4 4 1 f f 4 4 4 4 1 f f 
                    . f 4 4 4 4 4 f f 4 4 4 4 4 f . 
                    . f 4 4 4 4 4 f f 4 4 4 4 4 f . 
                    . . f 4 4 4 f 2 2 f 4 4 4 f . . 
                    . . . f f f 2 2 2 2 f f f . . . 
                    . . . . . f f f f f f . . . . . 
                    `, SpriteKind.damaging)
                mySprite9.setPosition(mySprite4.x, mySprite4.y)
                sprites.setDataString(mySprite9, "type", "splitshot")
                if (blockSettings.readNumber("Weapon") == 10) {
                    sprites.setDataString(mySprite9, "type", "splitshot+")
                    mySprite9.setImage(img`
                        . . . . . f f f f f f . . . . . 
                        . . . f f f 4 4 4 4 f f f . . . 
                        . . f 4 4 1 f 4 4 f 4 4 1 f . . 
                        . f 4 4 4 4 1 f f 4 4 4 4 1 f . 
                        . f 4 4 4 4 4 f f 4 4 4 4 4 f . 
                        f f 4 4 4 4 4 f f 4 4 4 4 4 f f 
                        f 4 f 4 4 4 f 4 4 f 4 4 4 f 4 f 
                        f 4 4 f f f 4 4 4 4 f f f 4 4 f 
                        f 4 4 f f f 4 4 4 4 f f f 4 4 f 
                        f 4 f 4 4 1 f 4 4 f 4 4 1 f 4 f 
                        f f 4 4 4 4 1 f f 4 4 4 4 1 f f 
                        . f 4 4 4 4 4 f f 4 4 4 4 4 f . 
                        . f 4 4 4 4 4 f f 4 4 4 4 4 f . 
                        . . f 4 4 4 f 4 4 f 4 4 4 f . . 
                        . . . f f f 4 4 4 4 f f f . . . 
                        . . . . . f f f f f f . . . . . 
                        `)
                }
                mySprite9.setVelocity(100, -100)
            }
            if (true) {
                mySprite9 = sprites.create(img`
                    . . . . . f f f f f f . . . . . 
                    . . . f f f 2 2 2 2 f f f . . . 
                    . . f 4 4 1 f 2 2 f 4 4 1 f . . 
                    . f 4 4 4 4 1 f f 4 4 4 4 1 f . 
                    . f 4 4 4 4 4 f f 4 4 4 4 4 f . 
                    f f 4 4 4 4 4 f f 4 4 4 4 4 f f 
                    f 2 f 4 4 4 f 2 2 f 4 4 4 f 2 f 
                    f 2 2 f f f 2 2 2 2 f f f 2 2 f 
                    f 2 2 f f f 2 2 2 2 f f f 2 2 f 
                    f 2 f 4 4 1 f 2 2 f 4 4 1 f 2 f 
                    f f 4 4 4 4 1 f f 4 4 4 4 1 f f 
                    . f 4 4 4 4 4 f f 4 4 4 4 4 f . 
                    . f 4 4 4 4 4 f f 4 4 4 4 4 f . 
                    . . f 4 4 4 f 2 2 f 4 4 4 f . . 
                    . . . f f f 2 2 2 2 f f f . . . 
                    . . . . . f f f f f f . . . . . 
                    `, SpriteKind.damaging)
                mySprite9.setPosition(mySprite4.x, mySprite4.y)
                sprites.setDataString(mySprite9, "type", "splitshot")
                if (blockSettings.readNumber("Weapon") == 10) {
                    sprites.setDataString(mySprite9, "type", "splitshot+")
                    mySprite9.setImage(img`
                        . . . . . f f f f f f . . . . . 
                        . . . f f f 4 4 4 4 f f f . . . 
                        . . f 4 4 1 f 4 4 f 4 4 1 f . . 
                        . f 4 4 4 4 1 f f 4 4 4 4 1 f . 
                        . f 4 4 4 4 4 f f 4 4 4 4 4 f . 
                        f f 4 4 4 4 4 f f 4 4 4 4 4 f f 
                        f 4 f 4 4 4 f 4 4 f 4 4 4 f 4 f 
                        f 4 4 f f f 4 4 4 4 f f f 4 4 f 
                        f 4 4 f f f 4 4 4 4 f f f 4 4 f 
                        f 4 f 4 4 1 f 4 4 f 4 4 1 f 4 f 
                        f f 4 4 4 4 1 f f 4 4 4 4 1 f f 
                        . f 4 4 4 4 4 f f 4 4 4 4 4 f . 
                        . f 4 4 4 4 4 f f 4 4 4 4 4 f . 
                        . . f 4 4 4 f 4 4 f 4 4 4 f . . 
                        . . . f f f 4 4 4 4 f f f . . . 
                        . . . . . f f f f f f . . . . . 
                        `)
                }
                mySprite9.setVelocity(-100, -100)
            }
            if (true) {
                mySprite9 = sprites.create(img`
                    . . . . . f f f f f f . . . . . 
                    . . . f f f 2 2 2 2 f f f . . . 
                    . . f 4 4 1 f 2 2 f 4 4 1 f . . 
                    . f 4 4 4 4 1 f f 4 4 4 4 1 f . 
                    . f 4 4 4 4 4 f f 4 4 4 4 4 f . 
                    f f 4 4 4 4 4 f f 4 4 4 4 4 f f 
                    f 2 f 4 4 4 f 2 2 f 4 4 4 f 2 f 
                    f 2 2 f f f 2 2 2 2 f f f 2 2 f 
                    f 2 2 f f f 2 2 2 2 f f f 2 2 f 
                    f 2 f 4 4 1 f 2 2 f 4 4 1 f 2 f 
                    f f 4 4 4 4 1 f f 4 4 4 4 1 f f 
                    . f 4 4 4 4 4 f f 4 4 4 4 4 f . 
                    . f 4 4 4 4 4 f f 4 4 4 4 4 f . 
                    . . f 4 4 4 f 2 2 f 4 4 4 f . . 
                    . . . f f f 2 2 2 2 f f f . . . 
                    . . . . . f f f f f f . . . . . 
                    `, SpriteKind.damaging)
                mySprite9.setPosition(mySprite4.x, mySprite4.y)
                sprites.setDataString(mySprite9, "type", "splitshot")
                if (blockSettings.readNumber("Weapon") == 10) {
                    sprites.setDataString(mySprite9, "type", "splitshot+")
                    mySprite9.setImage(img`
                        . . . . . f f f f f f . . . . . 
                        . . . f f f 4 4 4 4 f f f . . . 
                        . . f 4 4 1 f 4 4 f 4 4 1 f . . 
                        . f 4 4 4 4 1 f f 4 4 4 4 1 f . 
                        . f 4 4 4 4 4 f f 4 4 4 4 4 f . 
                        f f 4 4 4 4 4 f f 4 4 4 4 4 f f 
                        f 4 f 4 4 4 f 4 4 f 4 4 4 f 4 f 
                        f 4 4 f f f 4 4 4 4 f f f 4 4 f 
                        f 4 4 f f f 4 4 4 4 f f f 4 4 f 
                        f 4 f 4 4 1 f 4 4 f 4 4 1 f 4 f 
                        f f 4 4 4 4 1 f f 4 4 4 4 1 f f 
                        . f 4 4 4 4 4 f f 4 4 4 4 4 f . 
                        . f 4 4 4 4 4 f f 4 4 4 4 4 f . 
                        . . f 4 4 4 f 4 4 f 4 4 4 f . . 
                        . . . f f f 4 4 4 4 f f f . . . 
                        . . . . . f f f f f f . . . . . 
                        `)
                }
                mySprite9.setVelocity(-100, 100)
            }
        }
    }
})
controller.player1.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    if (!(controller.player2.isPressed(ControllerButton.Up) || (controller.player2.isPressed(ControllerButton.Right) || (controller.player2.isPressed(ControllerButton.Down) || controller.player2.isPressed(ControllerButton.Left))))) {
        direction = 1
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (readyforpull) {
        if (!(Ingame)) {
            readyforpull = false
            scene.setBackgroundImage(img`
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ..................................................................................................................................................4444..........
                ..................................................................................................................................................4444..........
                ..................................................................................................................................................4444..........
                ..................................................................................................................................................4444..........
                ..................................................................................................................................................4444..........
                ..................................................................................................................................................4444..........
                ..................................................................................................................................................4444..........
                ..................................................................................................................................................4444..........
                ..................................................................................................................................................4444..........
                ..................................................................................................................................................4444..........
                ..................................................................................................................................................4444..........
                ..................................................................................................................................................4444..........
                ..................................................................................................................................................4444..........
                ..................................................................................................................................................4444..........
                ..................................................................................................................................................4444..........
                ..................................................................................................................................................4444..........
                ..................................................................................................................................................4444..........
                ..................................................................................................................................................4444..........
                ..................................................................................................................................................4444..........
                ..................................................................................................................................................4444..........
                ..................................................................................................................................................4444..........
                ..................................................................................................................................................4444..........
                ..............................................................................................................................................444444444444......
                ..............................................................................................................................................444444444444......
                ..............................................................................................................................................444444444444......
                ..............................................................................................................................................444444444444......
                ..............................................................................................................................................444444444444......
                ..............................................................................................................................................444444444444......
                ..............................................................................................................................................444444444444......
                ..............................................................................................................................................444444444444......
                ..............................................................................................................................................444444444444......
                ..............................................................................................................................................444444444444......
                ..............................................................................................................................................444444444444......
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                `)
            if (numofpulls < 3) {
                music.playTone(294, music.beat(BeatFraction.Quarter))
                music.playTone(349, music.beat(BeatFraction.Quarter))
            }
            if (blockSettings.readNumber("section") == 1) {
                Pulltype = randint(1, 4)
            } else if (blockSettings.readNumber("section") == 2) {
                Pulltype = randint(1, 6)
            } else if (blockSettings.readNumber("section") == 3) {
                Pulltype = randint(1, 8)
            }
            if (numofpulls == 0) {
                pull1 = Pulltype
                if (Pulltype == 1) {
                    animation.setAction(mySprite2, ActionKind.roulette_coin)
                    numofcoin += 1
                } else if (Pulltype == 2) {
                    animation.setAction(mySprite2, ActionKind.roulette_skull)
                    numofskull += 1
                } else if (Pulltype == 3) {
                    animation.setAction(mySprite2, ActionKind.roulette_chest)
                    numofchest += 1
                } else if (Pulltype == 4) {
                    animation.setAction(mySprite2, ActionKind.roulette_boss)
                    numofvs += 1
                } else if (Pulltype == 5) {
                    animation.setAction(mySprite2, ActionKind.roulette_shop)
                    numofshop += 1
                } else if (Pulltype == 6) {
                    animation.setAction(mySprite2, ActionKind.roulette_enemy)
                    numofenemy += 1
                } else if (Pulltype == 7) {
                    animation.setAction(mySprite2, ActionKind.roulette_sp1)
                    blockSettings.writeNumber("special", blockSettings.readNumber("special") + 1)
                    while (blockSettings.readNumber("special") > 10) {
                        blockSettings.writeNumber("special", blockSettings.readNumber("special") - 1)
                    }
                } else if (Pulltype == 8) {
                    animation.setAction(mySprite2, ActionKind.roulette_sp2)
                    blockSettings.writeNumber("special", blockSettings.readNumber("special") + 3)
                    while (blockSettings.readNumber("special") > 10) {
                        blockSettings.writeNumber("special", blockSettings.readNumber("special") - 1)
                    }
                }
            } else if (numofpulls == 1) {
                pull2 = Pulltype
                if (Pulltype == 1) {
                    animation.setAction(mySprite, ActionKind.roulette_coin)
                    numofcoin += 1
                } else if (Pulltype == 2) {
                    animation.setAction(mySprite, ActionKind.roulette_skull)
                    numofskull += 1
                } else if (Pulltype == 3) {
                    animation.setAction(mySprite, ActionKind.roulette_chest)
                    numofchest += 1
                } else if (Pulltype == 4) {
                    animation.setAction(mySprite, ActionKind.roulette_boss)
                    numofvs += 1
                } else if (Pulltype == 5) {
                    animation.setAction(mySprite, ActionKind.roulette_shop)
                    numofshop += 1
                } else if (Pulltype == 6) {
                    animation.setAction(mySprite, ActionKind.roulette_enemy)
                    numofenemy += 1
                } else if (Pulltype == 7) {
                    animation.setAction(mySprite, ActionKind.roulette_sp1)
                    blockSettings.writeNumber("special", blockSettings.readNumber("special") + 1)
                    while (blockSettings.readNumber("special") > 10) {
                        blockSettings.writeNumber("special", blockSettings.readNumber("special") - 1)
                    }
                } else if (Pulltype == 8) {
                    animation.setAction(mySprite, ActionKind.roulette_sp2)
                    blockSettings.writeNumber("special", blockSettings.readNumber("special") + 3)
                    while (blockSettings.readNumber("special") > 10) {
                        blockSettings.writeNumber("special", blockSettings.readNumber("special") - 1)
                    }
                }
            } else if (numofpulls == 2) {
                pull3 = Pulltype
                if (Pulltype == 1) {
                    animation.setAction(mySprite3, ActionKind.roulette_coin)
                    numofcoin += 1
                } else if (Pulltype == 2) {
                    animation.setAction(mySprite3, ActionKind.roulette_skull)
                    numofskull += 1
                } else if (Pulltype == 3) {
                    animation.setAction(mySprite3, ActionKind.roulette_chest)
                    numofchest += 1
                } else if (Pulltype == 4) {
                    animation.setAction(mySprite3, ActionKind.roulette_boss)
                    numofvs += 1
                } else if (Pulltype == 5) {
                    animation.setAction(mySprite3, ActionKind.roulette_shop)
                    numofshop += 1
                } else if (Pulltype == 6) {
                    animation.setAction(mySprite3, ActionKind.roulette_enemy)
                    numofenemy += 1
                } else if (Pulltype == 7) {
                    animation.setAction(mySprite3, ActionKind.roulette_sp1)
                    blockSettings.writeNumber("special", blockSettings.readNumber("special") + 1)
                    while (blockSettings.readNumber("special") > 10) {
                        blockSettings.writeNumber("special", blockSettings.readNumber("special") - 1)
                    }
                } else if (Pulltype == 8) {
                    animation.setAction(mySprite3, ActionKind.roulette_sp2)
                    blockSettings.writeNumber("special", blockSettings.readNumber("special") + 3)
                    while (blockSettings.readNumber("special") > 10) {
                        blockSettings.writeNumber("special", blockSettings.readNumber("special") - 1)
                    }
                }
            } else if (numofpulls > 2) {
                readyforpull = false
                if (boss) {
                    if (blockSettings.readNumber("section") == 2) {
                        tiles.setCurrentTilemap(tileUtil.createSmallMap(tilemap`level0`))
                    } else if (blockSettings.readNumber("section") == 3) {
                        tiles.setCurrentTilemap(tileUtil.createSmallMap(tilemap`level12`))
                    } else {
                        tiles.setCurrentTilemap(tileUtil.createSmallMap(tilemap`level5`))
                    }
                } else {
                    tiles.setCurrentTilemap(tileUtil.createSmallMap(tilemap`level2`))
                }
                mySprite4 = sprites.create(img`
                    . . . . . . . . . . b 5 b . . . 
                    . . . . . . . . . b 5 b . . . . 
                    . . . . . . . . . b c . . . . . 
                    . . . . . . b b b b b b . . . . 
                    . . . . . b b 5 5 5 5 5 b . . . 
                    . . . . b b 5 d 1 f 5 5 d f . . 
                    . . . . b 5 5 1 f f 5 d 4 c . . 
                    . . . . b 5 5 d f b d d 4 4 . . 
                    b d d d b b d 5 5 5 4 4 4 4 4 b 
                    b b d 5 5 5 b 5 5 4 4 4 4 4 b . 
                    b d c 5 5 5 5 d 5 5 5 5 5 b . . 
                    c d d c d 5 5 b 5 5 5 5 5 5 b . 
                    c b d d c c b 5 5 5 5 5 5 5 b . 
                    . c d d d d d d 5 5 5 5 5 d b . 
                    . . c b d d d d d 5 5 5 b b . . 
                    . . . c c c c c c c c b b . . . 
                    `, SpriteKind.Player)
                tiles.placeOnRandomTile(mySprite4, assets.tile`myTile0`)
                if (blockSettings.readNumber("section") == 3) {
                    statusbar = statusbars.create(20, 4, StatusBarKind.Magic)
                    statusbar.max = 10
                    statusbar.value = blockSettings.readNumber("special")
                    statusbar.setColor(9, 15, 1)
                    statusbar.setBarBorder(1, 15)
                    statusbar.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
                    statusbar.attachToSprite(mySprite4)
                }
                if (blockSettings.readNumber("Weapon") == 2 || blockSettings.readNumber("Weapon") == 5) {
                    controller.moveSprite(mySprite4, 150, 150)
                } else {
                    controller.moveSprite(mySprite4, 100, 100)
                }
                if (blockSettings.readNumber("Weapon") == 1 || blockSettings.readNumber("Weapon") == 4) {
                    mySprite5 = sprites.create(img`
                        ................................
                        ................................
                        ................................
                        ................................
                        ................................
                        ................................
                        ................................
                        ................................
                        ................................
                        ................................
                        ................................
                        ................................
                        ................................
                        ................................
                        ................................
                        ................................
                        ................................
                        ................................
                        ................................
                        ................................
                        ................................
                        ................................
                        ................................
                        ................................
                        ................................
                        ................................
                        ................................
                        ................................
                        ................................
                        ................................
                        ................................
                        ................................
                        `, SpriteKind.damaging)
                    mySprite5.setPosition(mySprite4.x, mySprite4.y)
                    mySprite5.follow(mySprite4, 200)
                    sprites.setDataString(mySprite5, "type", "sword")
                    if (blockSettings.readNumber("Weapon") == 1) {
                        mySprite5.setScale(1.5, ScaleAnchor.Middle)
                    } else if (blockSettings.readNumber("Weapon") == 4) {
                        mySprite5.setScale(2.5, ScaleAnchor.Middle)
                    }
                    anim = animation.createAnimation(ActionKind.sword_swing, 1000)
                    anim.addAnimationFrame(img`
                        ..........dddddddddddd..........
                        ........dddddddddddddddd........
                        ......dddddddddddddddddddd......
                        .....dddddddddddddddddddddd.....
                        ....dddddddddddddddddddddddd....
                        ...dddddddddddddddddddddddddd...
                        ..ddddddddd..........ddddddddd..
                        ..ddddddd..............ddddddd..
                        .ddddddd................ddddddd.
                        .dddddd..................dddddd.
                        ddddddd..................ddddddd
                        dddddd....................dddddd
                        dddddd....................dddddd
                        dddddd....................dddddd
                        dddddd....................dddddd
                        dddddd....................dddddd
                        dddddd....................dddddd
                        dddddd....................dddddd
                        dddddd....................dddddd
                        dddddd....................dddddd
                        dddddd....................dddddd
                        ddddddd..................ddddddd
                        .dddddd..................dddddd.
                        .ddddddd................ddddddd.
                        ..ddddddd..............ddddddd..
                        ..ddddddddd..........ddddddddd..
                        ...dddddddddddddddddddddddddd...
                        ....dddddddddddddddddddddddd....
                        .....dddddddddddddddddddddd.....
                        ......dddddddddddddddddddd......
                        ........dddddddddddddddd........
                        ..........dddddddddddd..........
                        `)
                    animation.attachAnimation(mySprite5, anim)
                    anim = animation.createAnimation(ActionKind.sword_none, 1000)
                    anim.addAnimationFrame(img`
                        ................................
                        ................................
                        ................................
                        ................................
                        ................................
                        ................................
                        ................................
                        ................................
                        ................................
                        ................................
                        ................................
                        ................................
                        ................................
                        ................................
                        ................................
                        ................................
                        ................................
                        ................................
                        ................................
                        ................................
                        ................................
                        ................................
                        ................................
                        ................................
                        ................................
                        ................................
                        ................................
                        ................................
                        ................................
                        ................................
                        ................................
                        ................................
                        `)
                    animation.attachAnimation(mySprite5, anim)
                }
                if (boss) {
                    anim = animation.createAnimation(ActionKind.boss_left, 1000)
                    anim.addAnimationFrame(img`
                        . . . c c c c c c . . . . . . . 
                        . . c 6 7 7 7 7 6 c . . . . . . 
                        . c 7 7 7 7 7 7 7 7 c . . . . . 
                        c 6 7 7 7 7 7 7 7 7 6 c . . . . 
                        c 7 c 6 6 6 6 c 7 7 7 c . . . . 
                        f 7 6 f 6 6 f 6 7 7 7 f . . . . 
                        f 7 7 7 7 7 7 7 7 7 7 f . . . . 
                        . f 7 7 7 7 6 c 7 7 6 f . . . . 
                        . . f c c c c 7 7 6 f c c c . . 
                        . . c 6 2 7 7 7 f c c 7 7 7 c . 
                        . c 6 7 7 2 7 7 c f 6 7 7 7 7 c 
                        . c 1 1 1 1 7 6 6 c 6 6 6 c c c 
                        . c 1 1 1 1 1 6 6 6 6 6 6 c . . 
                        . c 6 1 1 1 1 1 6 6 6 6 6 c . . 
                        . . c 6 1 1 1 1 1 7 6 6 c c . . 
                        . . . c c c c c c c c c c . . . 
                        `)
                    anim2 = animation.createAnimation(ActionKind.boss_right, 1000)
                    anim2.addAnimationFrame(img`
                        . . . . . . . c c c c c c . . . 
                        . . . . . . c 6 7 7 7 7 6 c . . 
                        . . . . . c 7 7 7 7 7 7 7 7 c . 
                        . . . . c 6 7 7 7 7 7 7 7 7 6 c 
                        . . . . c 7 7 7 c 6 6 6 6 c 7 c 
                        . . . . f 7 7 7 6 f 6 6 f 6 7 f 
                        . . . . f 7 7 7 7 7 7 7 7 7 7 f 
                        . . . . f 6 7 7 c 6 7 7 7 7 f . 
                        . . c c c f 6 7 7 c c c c f . . 
                        . c 7 7 7 c c f 7 7 7 2 6 c . . 
                        c 7 7 7 7 6 f c 7 7 2 7 7 6 c . 
                        c c c 6 6 6 c 6 6 7 1 1 1 1 c . 
                        . . c 6 6 6 6 6 6 1 1 1 1 1 c . 
                        . . c 6 6 6 6 6 1 1 1 1 1 6 c . 
                        . . c c 6 6 7 1 1 1 1 1 6 c . . 
                        . . . c c c c c c c c c c . . . 
                        `)
                    boss_sprite = sprites.create(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `, SpriteKind.Boss)
                    boss_bar = statusbars.create(120, 6, StatusBarKind.BossHealth)
                    boss_bar.max = 100 + 200 * blockSettings.readNumber("section")
                    boss_bar.value = 100 + 200 * blockSettings.readNumber("section")
                    boss_bar.setColor(2, 15, 4)
                    boss_bar.setBarBorder(1, 15)
                    boss_bar.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
                    boss_bar.y = 3
                    boss_bar.x = 90
                    spritetofollow = boss_sprite
                    for (let index = 0; index < 20; index++) {
                        mySprite6 = sprites.create(img`
                            . . . c c c c c c . . . . . . . 
                            . . c 6 7 7 7 7 6 c . . . . . . 
                            . c 7 7 7 7 7 7 7 7 c . . . . . 
                            c 6 7 7 7 7 7 7 7 7 6 c . . . . 
                            c 7 c 6 6 6 6 c 7 7 7 c . . . . 
                            f 7 6 f 6 6 f 6 7 7 7 f . . . . 
                            f 7 7 7 7 7 7 7 7 7 7 f . . . . 
                            . f 7 7 7 7 6 c 7 7 6 f . . . . 
                            . . f c c c c 7 7 6 f c c c . . 
                            . . c 6 2 7 7 7 f c c 7 7 7 c . 
                            . c 6 7 7 2 7 7 c f 6 7 7 7 7 c 
                            . c 1 1 1 1 7 6 6 c 6 6 6 c c c 
                            . c 1 1 1 1 1 6 6 6 6 6 6 c . . 
                            . c 6 1 1 1 1 1 6 6 6 6 6 c . . 
                            . . c 6 1 1 1 1 1 7 6 6 c c . . 
                            . . . c c c c c c c c c c . . . 
                            `, SpriteKind.Enemy)
                        animation.attachAnimation(mySprite6, anim)
                        animation.attachAnimation(mySprite6, anim2)
                        mySprite6.follow(spritetofollow, 20 + 80 * blockSettings.readNumber("section"))
                        spritetofollow = mySprite6
                    }
                } else {
                    mySprite6 = sprites.create(img`
                        . . f f f . . . . . . . . f f f 
                        . f f c c . . . . . . f c b b c 
                        f f c c . . . . . . f c b b c . 
                        f c f c . . . . . . f b c c c . 
                        f f f c c . c c . f c b b c c . 
                        f f c 3 c c 3 c c f b c b b c . 
                        f f b 3 b c 3 b c f b c c b c . 
                        . c b b b b b b c b b c c c . . 
                        . c 1 b b b 1 b b c c c c . . . 
                        c b b b b b b b b b c c . . . . 
                        c b c b b b c b b b b f . . . . 
                        f b 1 f f f 1 b b b b f c . . . 
                        f b b b b b b b b b b f c c . . 
                        . f b b b b b b b b c f . . . . 
                        . . f b b b b b b c f . . . . . 
                        . . . f f f f f f f . . . . . . 
                        `, SpriteKind.Enemy)
                    if (numofenemy == 1) {
                        mySprite6.setImage(img`
                            . . . . f f f f f . . . . . . . 
                            . . . f e e e e e f . . . . . . 
                            . . f d d d d e e e f . . . . . 
                            . c d f d d f d e e f f . . . . 
                            . c d f d d f d e e d d f . . . 
                            c d e e d d d d e e b d c . . . 
                            c d d d d c d d e e b d c . f f 
                            c c c c c d d d e e f c . f e f 
                            . f d d d d d e e f f . . f e f 
                            . . f f f f f e e e e f . f e f 
                            . . . . f e e e e e e e f f e f 
                            . . . f e f f e f e e e e f f . 
                            . . . f e f f e f e e e e f . . 
                            . . . f d b f d b f f e f . . . 
                            . . . f d d c d d b b d f . . . 
                            . . . . f f f f f f f f f . . . 
                            `)
                    } else if (numofenemy == 2) {
                        mySprite6.setImage(img`
                            . . . . . . . . b b b b . . . . 
                            . . . . b b b b 3 3 3 3 b . . . 
                            . c c b b 1 1 3 3 3 3 3 b b . . 
                            c c 3 3 1 1 3 3 3 3 3 1 1 b . . 
                            c b 3 3 3 3 3 3 3 3 3 1 1 b . . 
                            f b b c c c 3 3 3 3 3 3 3 c . . 
                            f b c c c b b b b 3 3 3 3 3 c . 
                            f b c c d d d d d b b 3 3 3 3 c 
                            . c c d c d d d d d d b c 3 3 c 
                            . c b d c d d d c d d c c c 3 f 
                            . f d d d d d c d d d c c c b f 
                            . f d b b b d d d d d c c c b f 
                            . . c d d d d d d d b c b b f f 
                            . . f f d d d d c c b f f f f . 
                            . f f b b f f c c b d d b f . . 
                            . f b b b f f . . b d d d f . . 
                            `)
                    } else if (numofenemy == 3) {
                        mySprite6.setImage(img`
                            . . . c c c c c c . . . . . . . 
                            . . c 6 7 7 7 7 6 c . . . . . . 
                            . c 7 7 7 7 7 7 7 7 c . . . . . 
                            c 6 7 7 7 7 7 7 7 7 6 c . . . . 
                            c 7 c 6 6 6 6 c 7 7 7 c . . . . 
                            f 7 6 f 6 6 f 6 7 7 7 f . . . . 
                            f 7 7 7 7 7 7 7 7 7 7 f . . . . 
                            . f 7 7 7 7 6 c 7 7 6 f . . . . 
                            . . f c c c c 7 7 6 f c c c . . 
                            . . c 6 2 7 7 7 f c c 7 7 7 c . 
                            . c 6 7 7 2 7 7 c f 6 7 7 7 7 c 
                            . c 1 1 1 1 7 6 6 c 6 6 6 c c c 
                            . c 1 1 1 1 1 6 6 6 6 6 6 c . . 
                            . c 6 1 1 1 1 1 6 6 6 6 6 c . . 
                            . . c 6 1 1 1 1 1 7 6 6 c c . . 
                            . . . c c c c c c c c c c . . . 
                            `)
                    }
                    if (numofenemy == 1) {
                        mySprite6.follow(mySprite4, 50)
                    } else if (numofenemy == 2) {
                        mySprite6.follow(mySprite4, 60)
                    } else if (numofenemy == 3) {
                        mySprite6.follow(mySprite4, 60)
                    } else {
                        mySprite6.follow(mySprite4, 40)
                    }
                    if (numofskull > 1) {
                        statusbar = statusbars.create(30, 4, StatusBarKind.EnemyHealth)
                        statusbar.max = 20 + blockSettings.readNumber("section") * 5
                        statusbar.value = 20 + blockSettings.readNumber("section") * 5
                    } else {
                        statusbar = statusbars.create(20, 4, StatusBarKind.EnemyHealth)
                        statusbar.max = 10 + blockSettings.readNumber("section") * 5
                        statusbar.value = 10 + blockSettings.readNumber("section") * 5
                    }
                    statusbar.attachToSprite(mySprite6)
                    statusbar.setColor(2, 15)
                    statusbar.setBarBorder(1, 15)
                    if (numofskull > 0) {
                        mySprite6.x = 40
                    }
                    if (numofenemy == 3) {
                        spritetofollow = mySprite6
                        for (let index = 0; index < 4; index++) {
                            pause(500)
                            mySprite6 = sprites.create(img`
                                . . . c c c c c c . . . . . . . 
                                . . c 6 7 7 7 7 6 c . . . . . . 
                                . c 7 7 7 7 7 7 7 7 c . . . . . 
                                c 6 7 7 7 7 7 7 7 7 6 c . . . . 
                                c 7 c 6 6 6 6 c 7 7 7 c . . . . 
                                f 7 6 f 6 6 f 6 7 7 7 f . . . . 
                                f 7 7 7 7 7 7 7 7 7 7 f . . . . 
                                . f 7 7 7 7 6 c 7 7 6 f . . . . 
                                . . f c c c c 7 7 6 f c c c . . 
                                . . c 6 2 7 7 7 f c c 7 7 7 c . 
                                . c 6 7 7 2 7 7 c f 6 7 7 7 7 c 
                                . c 1 1 1 1 7 6 6 c 6 6 6 c c c 
                                . c 1 1 1 1 1 6 6 6 6 6 6 c . . 
                                . c 6 1 1 1 1 1 6 6 6 6 6 c . . 
                                . . c 6 1 1 1 1 1 7 6 6 c c . . 
                                . . . c c c c c c c c c c . . . 
                                `, SpriteKind.Enemy)
                            mySprite6.setPosition(spritetofollow.x, spritetofollow.y)
                            mySprite6.follow(spritetofollow, 60)
                            spritetofollow = mySprite6
                            statusbar = statusbars.create(20, 4, StatusBarKind.EnemyHealth)
                            statusbar.max = blockSettings.readNumber("section") * 5
                            statusbar.value = blockSettings.readNumber("section") * 5
                            statusbar.attachToSprite(mySprite6)
                            statusbar.setColor(2, 15)
                            statusbar.setBarBorder(1, 15)
                        }
                    }
                    if (numofskull > 0) {
                        mySprite6 = sprites.create(img`
                            . . f f f . . . . . . . . f f f 
                            . f f c c . . . . . . f c b b c 
                            f f c c . . . . . . f c b b c . 
                            f c f c . . . . . . f b c c c . 
                            f f f c c . c c . f c b b c c . 
                            f f c 3 c c 3 c c f b c b b c . 
                            f f b 3 b c 3 b c f b c c b c . 
                            . c b b b b b b c b b c c c . . 
                            . c 1 b b b 1 b b c c c c . . . 
                            c b b b b b b b b b c c . . . . 
                            c b c b b b c b b b b f . . . . 
                            f b 1 f f f 1 b b b b f c . . . 
                            f b b b b b b b b b b f c c . . 
                            . f b b b b b b b b c f . . . . 
                            . . f b b b b b b c f . . . . . 
                            . . . f f f f f f f . . . . . . 
                            `, SpriteKind.Enemy)
                        if (numofenemy == 1) {
                            mySprite6.setImage(img`
                                . . . . f f f f f . . . . . . . 
                                . . . f e e e e e f . . . . . . 
                                . . f d d d d e e e f . . . . . 
                                . c d f d d f d e e f f . . . . 
                                . c d f d d f d e e d d f . . . 
                                c d e e d d d d e e b d c . . . 
                                c d d d d c d d e e b d c . f f 
                                c c c c c d d d e e f c . f e f 
                                . f d d d d d e e f f . . f e f 
                                . . f f f f f e e e e f . f e f 
                                . . . . f e e e e e e e f f e f 
                                . . . f e f f e f e e e e f f . 
                                . . . f e f f e f e e e e f . . 
                                . . . f d b f d b f f e f . . . 
                                . . . f d d c d d b b d f . . . 
                                . . . . f f f f f f f f f . . . 
                                `)
                        } else if (numofenemy == 2) {
                            mySprite6.setImage(img`
                                . . . . . . . . b b b b . . . . 
                                . . . . b b b b 3 3 3 3 b . . . 
                                . c c b b 1 1 3 3 3 3 3 b b . . 
                                c c 3 3 1 1 3 3 3 3 3 1 1 b . . 
                                c b 3 3 3 3 3 3 3 3 3 1 1 b . . 
                                f b b c c c 3 3 3 3 3 3 3 c . . 
                                f b c c c b b b b 3 3 3 3 3 c . 
                                f b c c d d d d d b b 3 3 3 3 c 
                                . c c d c d d d d d d b c 3 3 c 
                                . c b d c d d d c d d c c c 3 f 
                                . f d d d d d c d d d c c c b f 
                                . f d b b b d d d d d c c c b f 
                                . . c d d d d d d d b c b b f f 
                                . . f f d d d d c c b f f f f . 
                                . f f b b f f c c b d d b f . . 
                                . f b b b f f . . b d d d f . . 
                                `)
                        } else if (numofenemy == 3) {
                            mySprite6.setImage(img`
                                . . . c c c c c c . . . . . . . 
                                . . c 6 7 7 7 7 6 c . . . . . . 
                                . c 7 7 7 7 7 7 7 7 c . . . . . 
                                c 6 7 7 7 7 7 7 7 7 6 c . . . . 
                                c 7 c 6 6 6 6 c 7 7 7 c . . . . 
                                f 7 6 f 6 6 f 6 7 7 7 f . . . . 
                                f 7 7 7 7 7 7 7 7 7 7 f . . . . 
                                . f 7 7 7 7 6 c 7 7 6 f . . . . 
                                . . f c c c c 7 7 6 f c c c . . 
                                . . c 6 2 7 7 7 f c c 7 7 7 c . 
                                . c 6 7 7 2 7 7 c f 6 7 7 7 7 c 
                                . c 1 1 1 1 7 6 6 c 6 6 6 c c c 
                                . c 1 1 1 1 1 6 6 6 6 6 6 c . . 
                                . c 6 1 1 1 1 1 6 6 6 6 6 c . . 
                                . . c 6 1 1 1 1 1 7 6 6 c c . . 
                                . . . c c c c c c c c c c . . . 
                                `)
                        }
                        if (numofenemy == 1) {
                            mySprite6.follow(mySprite4, 50)
                        } else if (numofenemy == 2) {
                            mySprite6.follow(mySprite4, 60)
                        } else if (numofenemy == 3) {
                            mySprite6.follow(mySprite4, 60)
                        } else {
                            mySprite6.follow(mySprite4, 40)
                        }
                        if (numofskull > 1) {
                            statusbar = statusbars.create(30, 4, StatusBarKind.EnemyHealth)
                            statusbar.max = 20 + blockSettings.readNumber("section") * 5
                            statusbar.value = 20 + blockSettings.readNumber("section") * 5
                        } else {
                            statusbar = statusbars.create(20, 4, StatusBarKind.EnemyHealth)
                            statusbar.max = 10 + blockSettings.readNumber("section") * 5
                            statusbar.value = 10 + blockSettings.readNumber("section") * 5
                        }
                        statusbar.attachToSprite(mySprite6)
                        statusbar.setColor(2, 15)
                        statusbar.setBarBorder(1, 15)
                        mySprite6.x = 120
                        if (numofenemy == 3) {
                            spritetofollow = mySprite6
                            for (let index = 0; index < 4; index++) {
                                mySprite6 = sprites.create(img`
                                    . . . c c c c c c . . . . . . . 
                                    . . c 6 7 7 7 7 6 c . . . . . . 
                                    . c 7 7 7 7 7 7 7 7 c . . . . . 
                                    c 6 7 7 7 7 7 7 7 7 6 c . . . . 
                                    c 7 c 6 6 6 6 c 7 7 7 c . . . . 
                                    f 7 6 f 6 6 f 6 7 7 7 f . . . . 
                                    f 7 7 7 7 7 7 7 7 7 7 f . . . . 
                                    . f 7 7 7 7 6 c 7 7 6 f . . . . 
                                    . . f c c c c 7 7 6 f c c c . . 
                                    . . c 6 2 7 7 7 f c c 7 7 7 c . 
                                    . c 6 7 7 2 7 7 c f 6 7 7 7 7 c 
                                    . c 1 1 1 1 7 6 6 c 6 6 6 c c c 
                                    . c 1 1 1 1 1 6 6 6 6 6 6 c . . 
                                    . c 6 1 1 1 1 1 6 6 6 6 6 c . . 
                                    . . c 6 1 1 1 1 1 7 6 6 c c . . 
                                    . . . c c c c c c c c c c . . . 
                                    `, SpriteKind.Enemy)
                                mySprite6.setPosition(spritetofollow.x, spritetofollow.y)
                                mySprite6.follow(spritetofollow, 60)
                                spritetofollow = mySprite6
                                statusbar = statusbars.create(20, 4, StatusBarKind.EnemyHealth)
                                statusbar.max = blockSettings.readNumber("section") * 5
                                statusbar.value = blockSettings.readNumber("section") * 5
                                statusbar.attachToSprite(mySprite6)
                                statusbar.setColor(2, 15)
                                statusbar.setBarBorder(1, 15)
                            }
                        }
                        if (numofskull > 2) {
                            mySprite6 = sprites.create(img`
                                . . f f f . . . . . . . . f f f 
                                . f f c c . . . . . . f c b b c 
                                f f c c . . . . . . f c b b c . 
                                f c f c . . . . . . f b c c c . 
                                f f f c c . c c . f c b b c c . 
                                f f c 3 c c 3 c c f b c b b c . 
                                f f b 3 b c 3 b c f b c c b c . 
                                . c b b b b b b c b b c c c . . 
                                . c 1 b b b 1 b b c c c c . . . 
                                c b b b b b b b b b c c . . . . 
                                c b c b b b c b b b b f . . . . 
                                f b 1 f f f 1 b b b b f c . . . 
                                f b b b b b b b b b b f c c . . 
                                . f b b b b b b b b c f . . . . 
                                . . f b b b b b b c f . . . . . 
                                . . . f f f f f f f . . . . . . 
                                `, SpriteKind.Enemy)
                            if (numofenemy == 1) {
                                mySprite6.setImage(img`
                                    . . . . f f f f f . . . . . . . 
                                    . . . f e e e e e f . . . . . . 
                                    . . f d d d d e e e f . . . . . 
                                    . c d f d d f d e e f f . . . . 
                                    . c d f d d f d e e d d f . . . 
                                    c d e e d d d d e e b d c . . . 
                                    c d d d d c d d e e b d c . f f 
                                    c c c c c d d d e e f c . f e f 
                                    . f d d d d d e e f f . . f e f 
                                    . . f f f f f e e e e f . f e f 
                                    . . . . f e e e e e e e f f e f 
                                    . . . f e f f e f e e e e f f . 
                                    . . . f e f f e f e e e e f . . 
                                    . . . f d b f d b f f e f . . . 
                                    . . . f d d c d d b b d f . . . 
                                    . . . . f f f f f f f f f . . . 
                                    `)
                            } else if (numofenemy == 2) {
                                mySprite6.setImage(img`
                                    . . . . . . . . b b b b . . . . 
                                    . . . . b b b b 3 3 3 3 b . . . 
                                    . c c b b 1 1 3 3 3 3 3 b b . . 
                                    c c 3 3 1 1 3 3 3 3 3 1 1 b . . 
                                    c b 3 3 3 3 3 3 3 3 3 1 1 b . . 
                                    f b b c c c 3 3 3 3 3 3 3 c . . 
                                    f b c c c b b b b 3 3 3 3 3 c . 
                                    f b c c d d d d d b b 3 3 3 3 c 
                                    . c c d c d d d d d d b c 3 3 c 
                                    . c b d c d d d c d d c c c 3 f 
                                    . f d d d d d c d d d c c c b f 
                                    . f d b b b d d d d d c c c b f 
                                    . . c d d d d d d d b c b b f f 
                                    . . f f d d d d c c b f f f f . 
                                    . f f b b f f c c b d d b f . . 
                                    . f b b b f f . . b d d d f . . 
                                    `)
                            } else if (numofenemy == 3) {
                                mySprite6.setImage(img`
                                    . . . c c c c c c . . . . . . . 
                                    . . c 6 7 7 7 7 6 c . . . . . . 
                                    . c 7 7 7 7 7 7 7 7 c . . . . . 
                                    c 6 7 7 7 7 7 7 7 7 6 c . . . . 
                                    c 7 c 6 6 6 6 c 7 7 7 c . . . . 
                                    f 7 6 f 6 6 f 6 7 7 7 f . . . . 
                                    f 7 7 7 7 7 7 7 7 7 7 f . . . . 
                                    . f 7 7 7 7 6 c 7 7 6 f . . . . 
                                    . . f c c c c 7 7 6 f c c c . . 
                                    . . c 6 2 7 7 7 f c c 7 7 7 c . 
                                    . c 6 7 7 2 7 7 c f 6 7 7 7 7 c 
                                    . c 1 1 1 1 7 6 6 c 6 6 6 c c c 
                                    . c 1 1 1 1 1 6 6 6 6 6 6 c . . 
                                    . c 6 1 1 1 1 1 6 6 6 6 6 c . . 
                                    . . c 6 1 1 1 1 1 7 6 6 c c . . 
                                    . . . c c c c c c c c c c . . . 
                                    `)
                            }
                            if (numofenemy == 1) {
                                mySprite6.follow(mySprite4, 50)
                            } else if (numofenemy == 2) {
                                mySprite6.follow(mySprite4, 60)
                            } else if (numofenemy == 3) {
                                mySprite6.follow(mySprite4, 60)
                            } else {
                                mySprite6.follow(mySprite4, 40)
                            }
                            if (numofskull > 1) {
                                statusbar = statusbars.create(30, 4, StatusBarKind.EnemyHealth)
                                statusbar.max = 15 + blockSettings.readNumber("section") * 10
                                statusbar.value = 15 + blockSettings.readNumber("section") * 10
                            } else {
                                statusbar = statusbars.create(20, 4, StatusBarKind.EnemyHealth)
                                statusbar.max = 10 + blockSettings.readNumber("section") * 5
                                statusbar.value = 10 + blockSettings.readNumber("section") * 5
                            }
                            statusbar.attachToSprite(mySprite6)
                            statusbar.setColor(2, 15)
                            statusbar.setBarBorder(1, 15)
                            if (numofenemy == 3) {
                                spritetofollow = mySprite6
                                for (let index = 0; index < 4; index++) {
                                    mySprite6 = sprites.create(img`
                                        . . . c c c c c c . . . . . . . 
                                        . . c 6 7 7 7 7 6 c . . . . . . 
                                        . c 7 7 7 7 7 7 7 7 c . . . . . 
                                        c 6 7 7 7 7 7 7 7 7 6 c . . . . 
                                        c 7 c 6 6 6 6 c 7 7 7 c . . . . 
                                        f 7 6 f 6 6 f 6 7 7 7 f . . . . 
                                        f 7 7 7 7 7 7 7 7 7 7 f . . . . 
                                        . f 7 7 7 7 6 c 7 7 6 f . . . . 
                                        . . f c c c c 7 7 6 f c c c . . 
                                        . . c 6 2 7 7 7 f c c 7 7 7 c . 
                                        . c 6 7 7 2 7 7 c f 6 7 7 7 7 c 
                                        . c 1 1 1 1 7 6 6 c 6 6 6 c c c 
                                        . c 1 1 1 1 1 6 6 6 6 6 6 c . . 
                                        . c 6 1 1 1 1 1 6 6 6 6 6 c . . 
                                        . . c 6 1 1 1 1 1 7 6 6 c c . . 
                                        . . . c c c c c c c c c c . . . 
                                        `, SpriteKind.Enemy)
                                    mySprite6.setPosition(spritetofollow.x, spritetofollow.y)
                                    mySprite6.follow(spritetofollow, 60)
                                    spritetofollow = mySprite6
                                    statusbar = statusbars.create(20, 4, StatusBarKind.EnemyHealth)
                                    statusbar.max = blockSettings.readNumber("section") * 5
                                    statusbar.value = blockSettings.readNumber("section") * 5
                                    statusbar.attachToSprite(mySprite6)
                                    statusbar.setColor(2, 15)
                                    statusbar.setBarBorder(1, 15)
                                }
                            }
                        }
                    }
                }
                Ingame = true
                readyforpull = true
            }
            if (!(Ingame)) {
                numofpulls += 1
                pause(200)
                readyforpull = true
                scene.setBackgroundImage(img`
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ..............................................................................................................................................444444444444......
                    ..............................................................................................................................................444444444444......
                    ..............................................................................................................................................444444444444......
                    ..............................................................................................................................................444444444444......
                    ..............................................................................................................................................444444444444......
                    ..............................................................................................................................................444444444444......
                    ..............................................................................................................................................444444444444......
                    ..............................................................................................................................................444444444444......
                    ..............................................................................................................................................444444444444......
                    ..............................................................................................................................................444444444444......
                    ..............................................................................................................................................444444444444......
                    ..................................................................................................................................................4444..........
                    ..................................................................................................................................................4444..........
                    ..................................................................................................................................................4444..........
                    ..................................................................................................................................................4444..........
                    ..................................................................................................................................................4444..........
                    ..................................................................................................................................................4444..........
                    ..................................................................................................................................................4444..........
                    ..................................................................................................................................................4444..........
                    ..................................................................................................................................................4444..........
                    ..................................................................................................................................................4444..........
                    ..................................................................................................................................................4444..........
                    ..................................................................................................................................................4444..........
                    ..................................................................................................................................................4444..........
                    ..................................................................................................................................................4444..........
                    ..................................................................................................................................................4444..........
                    ..................................................................................................................................................4444..........
                    ..................................................................................................................................................4444..........
                    ..................................................................................................................................................4444..........
                    ..................................................................................................................................................4444..........
                    ..................................................................................................................................................4444..........
                    ..................................................................................................................................................4444..........
                    ..................................................................................................................................................4444..........
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    `)
            }
        }
        if (controller.A.isPressed()) {
            if (Ingame) {
                if (blockSettings.readNumber("Weapon") == 1 || blockSettings.readNumber("Weapon") == 4) {
                    readyforpull = false
                    damagable = false
                    animation.setAction(mySprite5, ActionKind.sword_swing)
                    pause(200)
                    animation.setAction(mySprite5, ActionKind.sword_none)
                    pause(200)
                    damagable = true
                    pause(200)
                    readyforpull = true
                } else if (blockSettings.readNumber("Weapon") == 2 || blockSettings.readNumber("Weapon") == 5) {
                    readyforpull = false
                    mySprite9 = sprites.create(img`
                        . . f f f f . . 
                        . f 4 4 4 1 f . 
                        f 4 4 4 4 4 1 f 
                        f 4 4 4 4 4 4 f 
                        f 4 4 4 4 4 4 f 
                        f 4 4 4 4 4 4 f 
                        . f 4 4 4 4 f . 
                        . . f f f f . . 
                        `, SpriteKind.damaging)
                    mySprite9.setPosition(mySprite4.x, mySprite4.y)
                    sprites.setDataString(mySprite9, "type", "blaster")
                    if (direction == 1) {
                        mySprite9.setVelocity(0, -100)
                    } else if (direction == 2) {
                        mySprite9.setVelocity(100, 0)
                    } else if (direction == 3) {
                        mySprite9.setVelocity(0, 100)
                    } else if (direction == 4) {
                        mySprite9.setVelocity(-100, 0)
                    }
                    if (blockSettings.readNumber("Weapon") == 5) {
                        for (let index = 0; index < 2; index++) {
                            pause(100)
                            mySprite9 = sprites.create(img`
                                . . f f f f . . 
                                . f 4 4 4 1 f . 
                                f 4 4 4 4 4 1 f 
                                f 4 4 4 4 4 4 f 
                                f 4 4 4 4 4 4 f 
                                f 4 4 4 4 4 4 f 
                                . f 4 4 4 4 f . 
                                . . f f f f . . 
                                `, SpriteKind.damaging)
                            mySprite9.setPosition(mySprite4.x, mySprite4.y)
                            sprites.setDataString(mySprite9, "type", "blaster")
                            if (direction == 1) {
                                mySprite9.setVelocity(0, -100)
                            } else if (direction == 2) {
                                mySprite9.setVelocity(100, 0)
                            } else if (direction == 3) {
                                mySprite9.setVelocity(0, 100)
                            } else if (direction == 4) {
                                mySprite9.setVelocity(-100, 0)
                            }
                        }
                    }
                    pause(300)
                    readyforpull = true
                } else if (blockSettings.readNumber("Weapon") == 3 || blockSettings.readNumber("Weapon") == 6) {
                    readyforpull = false
                    mySprite9 = sprites.create(img`
                        . . . . . f f f f f f . . . . . 
                        . . . f f 4 4 4 4 1 1 f f . . . 
                        . . f 4 4 4 4 4 4 4 4 1 1 f . . 
                        . f 4 4 4 4 4 4 4 4 4 4 4 1 f . 
                        . f 4 4 4 4 4 4 4 4 4 4 4 4 f . 
                        f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
                        f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
                        f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
                        f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
                        f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
                        f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
                        . f 4 4 4 4 4 4 4 4 4 4 4 4 f . 
                        . f 4 4 4 4 4 4 4 4 4 4 4 4 f . 
                        . . f 4 4 4 4 4 4 4 4 4 4 f . . 
                        . . . f f 4 4 4 4 4 4 f f . . . 
                        . . . . . f f f f f f . . . . . 
                        `, SpriteKind.damaging)
                    mySprite9.setPosition(mySprite4.x, mySprite4.y)
                    sprites.setDataString(mySprite9, "type", "launcher")
                    if (direction == 1) {
                        mySprite9.setVelocity(0, -100)
                    } else if (direction == 2) {
                        mySprite9.setVelocity(100, 0)
                    } else if (direction == 3) {
                        mySprite9.setVelocity(0, 100)
                    } else if (direction == 4) {
                        mySprite9.setVelocity(-100, 0)
                    }
                    if (blockSettings.readNumber("Weapon") == 6) {
                        sprites.setDataString(mySprite9, "type", "launcher+")
                    }
                    pause(750)
                    readyforpull = true
                } else if (blockSettings.readNumber("Weapon") == 7 || blockSettings.readNumber("Weapon") == 9) {
                    readyforpull = false
                    sprites.destroyAllSpritesOfKind(SpriteKind.damaging)
                    mySprite9 = sprites.create(img`
                        . . . . . f f f f f f . . . . . 
                        . . . f f 2 2 2 2 2 2 f f . . . 
                        . . f 2 2 2 2 2 2 2 2 2 2 f . . 
                        . f 2 2 2 4 4 4 4 4 4 2 2 2 f . 
                        . f 2 2 4 4 4 4 4 4 4 4 2 2 f . 
                        f 2 2 4 4 4 5 5 5 5 4 4 4 2 2 f 
                        f 2 2 4 4 5 5 5 5 5 5 4 4 2 2 f 
                        f 2 2 4 4 5 5 5 5 5 5 4 4 2 2 f 
                        f 2 2 4 4 5 5 5 5 5 5 4 4 2 2 f 
                        f 2 2 4 4 5 5 5 5 5 5 4 4 2 2 f 
                        f 2 2 4 4 4 5 5 5 5 4 4 4 2 2 f 
                        . f 2 2 4 4 4 4 4 4 4 4 2 2 f . 
                        . f 2 2 2 4 4 4 4 4 4 2 2 2 f . 
                        . . f 2 2 2 2 2 2 2 2 2 2 f . . 
                        . . . f f 2 2 2 2 2 2 f f . . . 
                        . . . . . f f f f f f . . . . . 
                        `, SpriteKind.damaging)
                    mySprite9.setPosition(mySprite4.x, mySprite4.y)
                    sprites.setDataString(mySprite9, "type", "kaboomer")
                    if (blockSettings.readNumber("Weapon") == 9) {
                        sprites.setDataString(mySprite9, "type", "kaboomer+")
                    }
                    if (direction == 1) {
                        mySprite9.setVelocity(0, -100)
                    } else if (direction == 2) {
                        mySprite9.setVelocity(100, 0)
                    } else if (direction == 3) {
                        mySprite9.setVelocity(0, 100)
                    } else if (direction == 4) {
                        mySprite9.setVelocity(-100, 0)
                    }
                    pause(1000)
                    mySprite9.destroy()
                    pause(500)
                    readyforpull = true
                } else if (blockSettings.readNumber("Weapon") == 8 || blockSettings.readNumber("Weapon") == 10) {
                    readyforpull = false
                    mySprite9 = sprites.create(img`
                        . . . . . f f f f f f . . . . . 
                        . . . f f f 2 2 2 2 f f f . . . 
                        . . f 4 4 1 f 2 2 f 4 4 1 f . . 
                        . f 4 4 4 4 1 f f 4 4 4 4 1 f . 
                        . f 4 4 4 4 4 f f 4 4 4 4 4 f . 
                        f f 4 4 4 4 4 f f 4 4 4 4 4 f f 
                        f 2 f 4 4 4 f 2 2 f 4 4 4 f 2 f 
                        f 2 2 f f f 2 2 2 2 f f f 2 2 f 
                        f 2 2 f f f 2 2 2 2 f f f 2 2 f 
                        f 2 f 4 4 1 f 2 2 f 4 4 1 f 2 f 
                        f f 4 4 4 4 1 f f 4 4 4 4 1 f f 
                        . f 4 4 4 4 4 f f 4 4 4 4 4 f . 
                        . f 4 4 4 4 4 f f 4 4 4 4 4 f . 
                        . . f 4 4 4 f 2 2 f 4 4 4 f . . 
                        . . . f f f 2 2 2 2 f f f . . . 
                        . . . . . f f f f f f . . . . . 
                        `, SpriteKind.damaging)
                    mySprite9.setPosition(mySprite4.x, mySprite4.y)
                    sprites.setDataString(mySprite9, "type", "splitshot")
                    if (blockSettings.readNumber("Weapon") == 10) {
                        sprites.setDataString(mySprite9, "type", "splitshot+")
                        mySprite9.setImage(img`
                            . . . . . f f f f f f . . . . . 
                            . . . f f f 4 4 4 4 f f f . . . 
                            . . f 4 4 1 f 4 4 f 4 4 1 f . . 
                            . f 4 4 4 4 1 f f 4 4 4 4 1 f . 
                            . f 4 4 4 4 4 f f 4 4 4 4 4 f . 
                            f f 4 4 4 4 4 f f 4 4 4 4 4 f f 
                            f 4 f 4 4 4 f 4 4 f 4 4 4 f 4 f 
                            f 4 4 f f f 4 4 4 4 f f f 4 4 f 
                            f 4 4 f f f 4 4 4 4 f f f 4 4 f 
                            f 4 f 4 4 1 f 4 4 f 4 4 1 f 4 f 
                            f f 4 4 4 4 1 f f 4 4 4 4 1 f f 
                            . f 4 4 4 4 4 f f 4 4 4 4 4 f . 
                            . f 4 4 4 4 4 f f 4 4 4 4 4 f . 
                            . . f 4 4 4 f 4 4 f 4 4 4 f . . 
                            . . . f f f 4 4 4 4 f f f . . . 
                            . . . . . f f f f f f . . . . . 
                            `)
                    }
                    if (direction == 1) {
                        mySprite9.setVelocity(0, -100)
                    } else if (direction == 2) {
                        mySprite9.setVelocity(100, 0)
                    } else if (direction == 3) {
                        mySprite9.setVelocity(0, 100)
                    } else if (direction == 4) {
                        mySprite9.setVelocity(-100, 0)
                    }
                    pause(600)
                    readyforpull = true
                }
            }
        }
    }
})
controller.player2.onButtonEvent(ControllerButton.Down, ControllerButtonEvent.Pressed, function () {
    direction = 3
})
scene.onHitWall(SpriteKind.damaging, function (sprite, location) {
    if (sprites.readDataString(sprite, "type") == "blaster") {
        sprite.destroy()
    } else if (sprites.readDataString(sprite, "type") == "launcher" || sprites.readDataString(sprite, "type") == "launcher+") {
        sprite.destroy(effects.fire, 1000)
    } else if (sprites.readDataString(sprite, "type") == "kaboomer") {
        sprite.setVelocity(0, 0)
        sprite.setScale(2, ScaleAnchor.Middle)
    } else if (sprites.readDataString(sprite, "type") == "splitshot") {
        mySprite10 = sprites.create(img`
            . . f f f f . . 
            . f 4 4 4 1 f . 
            f 4 4 4 4 4 1 f 
            f 4 4 4 4 4 4 f 
            f 4 4 4 4 4 4 f 
            f 4 4 4 4 4 4 f 
            . f 4 4 4 4 f . 
            . . f f f f . . 
            `, SpriteKind.damaging)
        mySprite10.setPosition(sprite.x, sprite.y)
        sprites.setDataString(mySprite10, "type", "blaster")
        mySprite10.setVelocity(100, 100)
        mySprite10 = sprites.create(img`
            . . f f f f . . 
            . f 4 4 4 1 f . 
            f 4 4 4 4 4 1 f 
            f 4 4 4 4 4 4 f 
            f 4 4 4 4 4 4 f 
            f 4 4 4 4 4 4 f 
            . f 4 4 4 4 f . 
            . . f f f f . . 
            `, SpriteKind.damaging)
        mySprite10.setPosition(sprite.x, sprite.y)
        sprites.setDataString(mySprite10, "type", "blaster")
        mySprite10.setVelocity(100, -100)
        mySprite10 = sprites.create(img`
            . . f f f f . . 
            . f 4 4 4 1 f . 
            f 4 4 4 4 4 1 f 
            f 4 4 4 4 4 4 f 
            f 4 4 4 4 4 4 f 
            f 4 4 4 4 4 4 f 
            . f 4 4 4 4 f . 
            . . f f f f . . 
            `, SpriteKind.damaging)
        mySprite10.setPosition(sprite.x, sprite.y)
        sprites.setDataString(mySprite10, "type", "blaster")
        mySprite10.setVelocity(-100, -100)
        mySprite10 = sprites.create(img`
            . . f f f f . . 
            . f 4 4 4 1 f . 
            f 4 4 4 4 4 1 f 
            f 4 4 4 4 4 4 f 
            f 4 4 4 4 4 4 f 
            f 4 4 4 4 4 4 f 
            . f 4 4 4 4 f . 
            . . f f f f . . 
            `, SpriteKind.damaging)
        mySprite10.setPosition(sprite.x, sprite.y)
        sprites.setDataString(mySprite10, "type", "blaster")
        mySprite10.setVelocity(-100, 100)
        sprite.destroy()
    } else if (sprites.readDataString(sprite, "type") == "kaboomer+") {
        sprite.setVelocity(0, 0)
        sprite.setScale(3, ScaleAnchor.Middle)
    } else if (sprites.readDataString(sprite, "type") == "splitshot+") {
        mySprite10 = sprites.create(img`
            . . f f f f . . 
            . f 4 4 4 1 f . 
            f 4 4 4 4 4 1 f 
            f 4 4 4 4 4 4 f 
            f 4 4 4 4 4 4 f 
            f 4 4 4 4 4 4 f 
            . f 4 4 4 4 f . 
            . . f f f f . . 
            `, SpriteKind.damaging)
        mySprite10.setPosition(sprite.x, sprite.y)
        sprites.setDataString(mySprite10, "type", "blaster")
        mySprite10.setVelocity(100, 100)
        mySprite10 = sprites.create(img`
            . . f f f f . . 
            . f 4 4 4 1 f . 
            f 4 4 4 4 4 1 f 
            f 4 4 4 4 4 4 f 
            f 4 4 4 4 4 4 f 
            f 4 4 4 4 4 4 f 
            . f 4 4 4 4 f . 
            . . f f f f . . 
            `, SpriteKind.damaging)
        mySprite10.setPosition(sprite.x, sprite.y)
        sprites.setDataString(mySprite10, "type", "blaster")
        mySprite10.setVelocity(100, -100)
        mySprite10 = sprites.create(img`
            . . f f f f . . 
            . f 4 4 4 1 f . 
            f 4 4 4 4 4 1 f 
            f 4 4 4 4 4 4 f 
            f 4 4 4 4 4 4 f 
            f 4 4 4 4 4 4 f 
            . f 4 4 4 4 f . 
            . . f f f f . . 
            `, SpriteKind.damaging)
        mySprite10.setPosition(sprite.x, sprite.y)
        sprites.setDataString(mySprite10, "type", "blaster")
        mySprite10.setVelocity(-100, -100)
        mySprite10 = sprites.create(img`
            . . f f f f . . 
            . f 4 4 4 1 f . 
            f 4 4 4 4 4 1 f 
            f 4 4 4 4 4 4 f 
            f 4 4 4 4 4 4 f 
            f 4 4 4 4 4 4 f 
            . f 4 4 4 4 f . 
            . . f f f f . . 
            `, SpriteKind.damaging)
        mySprite10.setPosition(sprite.x, sprite.y)
        sprites.setDataString(mySprite10, "type", "blaster")
        mySprite10.setVelocity(-100, 100)
        sprite.destroy()
        mySprite10 = sprites.create(img`
            . . f f f f . . 
            . f 4 4 4 1 f . 
            f 4 4 4 4 4 1 f 
            f 4 4 4 4 4 4 f 
            f 4 4 4 4 4 4 f 
            f 4 4 4 4 4 4 f 
            . f 4 4 4 4 f . 
            . . f f f f . . 
            `, SpriteKind.damaging)
        mySprite10.setPosition(sprite.x, sprite.y)
        sprites.setDataString(mySprite10, "type", "blaster")
        mySprite10.setVelocity(0, 100)
        mySprite10 = sprites.create(img`
            . . f f f f . . 
            . f 4 4 4 1 f . 
            f 4 4 4 4 4 1 f 
            f 4 4 4 4 4 4 f 
            f 4 4 4 4 4 4 f 
            f 4 4 4 4 4 4 f 
            . f 4 4 4 4 f . 
            . . f f f f . . 
            `, SpriteKind.damaging)
        mySprite10.setPosition(sprite.x, sprite.y)
        sprites.setDataString(mySprite10, "type", "blaster")
        mySprite10.setVelocity(0, -100)
        mySprite10 = sprites.create(img`
            . . f f f f . . 
            . f 4 4 4 1 f . 
            f 4 4 4 4 4 1 f 
            f 4 4 4 4 4 4 f 
            f 4 4 4 4 4 4 f 
            f 4 4 4 4 4 4 f 
            . f 4 4 4 4 f . 
            . . f f f f . . 
            `, SpriteKind.damaging)
        mySprite10.setPosition(sprite.x, sprite.y)
        sprites.setDataString(mySprite10, "type", "blaster")
        mySprite10.setVelocity(-100, 0)
        mySprite10 = sprites.create(img`
            . . f f f f . . 
            . f 4 4 4 1 f . 
            f 4 4 4 4 4 1 f 
            f 4 4 4 4 4 4 f 
            f 4 4 4 4 4 4 f 
            f 4 4 4 4 4 4 f 
            . f 4 4 4 4 f . 
            . . f f f f . . 
            `, SpriteKind.damaging)
        mySprite10.setPosition(sprite.x, sprite.y)
        sprites.setDataString(mySprite10, "type", "blaster")
        mySprite10.setVelocity(100, 0)
        sprite.destroy()
    } else {
        if (sprites.readDataString(sprite, "type") == "kaboomersp") {
            sprite.setVelocity(0, 0)
            sprite.setScale(5, ScaleAnchor.Middle)
        }
    }
})
statusbars.onZero(StatusBarKind.EnemyHealth, function (status) {
    status.spriteAttachedTo().destroy(effects.fire, 500)
    music.pewPew.play()
    info.changeScoreBy(1)
    if (numofcoin > 0) {
        info.changeScoreBy(2)
        if (numofcoin > 1) {
            info.changeScoreBy(2)
            if (numofcoin > 2) {
                info.changeScoreBy(5)
            }
        }
    }
})
controller.player2.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    direction = 1
})
controller.player2.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    direction = 2
})
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    if (game.ask("RESTART?", "you cannot undo this")) {
        blockSettings.clear()
        pause(100)
        game.reset()
    }
})
info.onLifeZero(function () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    damagable = false
    tiles.placeOnRandomTile(mySprite4, assets.tile`myTile0`)
    if (info.score() >= 100) {
        if (game.ask("GAME OVER!", "continue? cost: 100")) {
            blockSettings.writeNumber("hp", 10)
            blockSettings.writeNumber("coins", info.score() - 100)
        } else {
            blockSettings.clear()
            pause(100)
            game.reset()
        }
    } else {
        if (game.ask("GAME OVER!")) {
        	
        }
        blockSettings.clear()
        pause(100)
        game.reset()
    }
    game.reset()
})
controller.player2.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    direction = 4
})
controller.player1.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    if (!(controller.player2.isPressed(ControllerButton.Up) || (controller.player2.isPressed(ControllerButton.Right) || (controller.player2.isPressed(ControllerButton.Down) || controller.player2.isPressed(ControllerButton.Left))))) {
        direction = 2
    }
})
controller.player1.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    if (!(controller.player2.isPressed(ControllerButton.Up) || (controller.player2.isPressed(ControllerButton.Right) || (controller.player2.isPressed(ControllerButton.Down) || controller.player2.isPressed(ControllerButton.Left))))) {
        direction = 4
    }
})
controller.player1.onButtonEvent(ControllerButton.Down, ControllerButtonEvent.Pressed, function () {
    if (!(controller.player2.isPressed(ControllerButton.Up) || (controller.player2.isPressed(ControllerButton.Right) || (controller.player2.isPressed(ControllerButton.Down) || controller.player2.isPressed(ControllerButton.Left))))) {
        direction = 3
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (damagable) {
        if (!(blockSettings.readNumber("boss next") == 1) || boss && blockSettings.readNumber("boss next") == 1) {
            damagable = false
            info.changeLifeBy(-1)
            music.smallCrash.play()
            pause(1000)
            damagable = true
        }
    }
})
let spritetofollow: Sprite = null
let anim2: animation.Animation = null
let statusbar: StatusBarSprite = null
let pull3 = 0
let pull2 = 0
let pull1 = 0
let Pulltype = 0
let mySprite9: Sprite = null
let mySprite5: Sprite = null
let mySprite4: Sprite = null
let mySprite10: Sprite = null
let upgrade_string = ""
let weapon_string = ""
let upgrade_cost = 0
let weapon_cost = 0
let weapon_item = 0
let hp_cost = 0
let hp_item = 0
let weapontype = 0
let mySprite6: Sprite = null
let boss_sprite: Sprite = null
let boss_bar: StatusBarSprite = null
let anim: animation.Animation = null
let mySprite3: Sprite = null
let mySprite2: Sprite = null
let mySprite: Sprite = null
let direction = 0
let numofenemy = 0
let numofpulls = 0
let numofchest = 0
let numofskull = 0
let numofcoin = 0
let Ingame = false
let readyforpull = false
let damagable = false
let boss = false
if (!(blockSettings.exists("Round"))) {
    blockSettings.writeNumber("Round", 1)
    blockSettings.writeNumber("section", 1)
    blockSettings.writeNumber("special", 0)
}
if (blockSettings.readNumber("section") == 1) {
    scene.setBackgroundColor(2)
} else if (blockSettings.readNumber("section") == 2) {
    scene.setBackgroundColor(8)
} else if (blockSettings.readNumber("section") == 3) {
    scene.setBackgroundColor(12)
}
if (blockSettings.readNumber("boss next") == 1) {
    boss = true
    game.splash("BOSS ROUND", "Round " + convertToText(blockSettings.readNumber("Round")) + ", Section " + blockSettings.readNumber("section"))
} else {
    boss = false
    game.splash("Round " + convertToText(blockSettings.readNumber("Round")), "Section " + convertToText(blockSettings.readNumber("section")))
}
if (!(blockSettings.exists("Weapon"))) {
    blockSettings.writeNumber("Weapon", 1)
}
if (!(blockSettings.exists("hp"))) {
    info.setLife(20)
} else {
    info.setLife(blockSettings.readNumber("hp"))
}
if (!(blockSettings.exists("coins"))) {
    info.setScore(10)
} else {
    info.setScore(blockSettings.readNumber("coins"))
}
damagable = true
readyforpull = false
Ingame = false
numofcoin = 0
numofskull = 0
if (boss) {
    if (Math.percentChance(20)) {
        numofchest = 3
    } else {
        numofchest = 2
    }
} else {
    numofchest = 0
}
let numofvs = 0
if (boss) {
    numofpulls = 3
} else {
    numofpulls = 0
}
let numofshop = 0
numofenemy = 0
direction = 1
scene.setBackgroundImage(img`
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ..............................................................................................................................................444444444444......
    ..............................................................................................................................................444444444444......
    ..............................................................................................................................................444444444444......
    ..............................................................................................................................................444444444444......
    ..............................................................................................................................................444444444444......
    ..............................................................................................................................................444444444444......
    ..............................................................................................................................................444444444444......
    ..............................................................................................................................................444444444444......
    ..............................................................................................................................................444444444444......
    ..............................................................................................................................................444444444444......
    ..............................................................................................................................................444444444444......
    ..................................................................................................................................................4444..........
    ..................................................................................................................................................4444..........
    ..................................................................................................................................................4444..........
    ..................................................................................................................................................4444..........
    ..................................................................................................................................................4444..........
    ..................................................................................................................................................4444..........
    ..................................................................................................................................................4444..........
    ..................................................................................................................................................4444..........
    ..................................................................................................................................................4444..........
    ..................................................................................................................................................4444..........
    ..................................................................................................................................................4444..........
    ..................................................................................................................................................4444..........
    ..................................................................................................................................................4444..........
    ..................................................................................................................................................4444..........
    ..................................................................................................................................................4444..........
    ..................................................................................................................................................4444..........
    ..................................................................................................................................................4444..........
    ..................................................................................................................................................4444..........
    ..................................................................................................................................................4444..........
    ..................................................................................................................................................4444..........
    ..................................................................................................................................................4444..........
    ..................................................................................................................................................4444..........
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    `)
mySprite = sprites.create(img`
    ........................................
    ........................................
    ..111111111111111111111111111111111111..
    ..111111111111111111111111111111111111..
    ..111111111111111111111111111111111111..
    ..111111111111111111111111111111111111..
    ..111111111111111111111111111111111111..
    ..111111111111111111111111111111111111..
    ..111111111111111111111111111111111111..
    ..111111111111111111111111111111111111..
    ..111111111111111111111111111111111111..
    ..111111111111111111111111111111111111..
    ..111111111111111111111111111111111111..
    ..111111111111111111111111111111111111..
    ..111111111111111111111111111111111111..
    ..111111111111111111111111111111111111..
    ..111111111111111111111111111111111111..
    ..111111111111111111111111111111111111..
    ..111111111111111111111111111111111111..
    ..111111111111111111111111111111111111..
    ..111111111111111111111111111111111111..
    ..111111111111111111111111111111111111..
    ..111111111111111111111111111111111111..
    ..111111111111111111111111111111111111..
    ..111111111111111111111111111111111111..
    ..111111111111111111111111111111111111..
    ..111111111111111111111111111111111111..
    ..111111111111111111111111111111111111..
    ..111111111111111111111111111111111111..
    ..111111111111111111111111111111111111..
    ..111111111111111111111111111111111111..
    ..111111111111111111111111111111111111..
    ..111111111111111111111111111111111111..
    ..111111111111111111111111111111111111..
    ..111111111111111111111111111111111111..
    ..111111111111111111111111111111111111..
    ..111111111111111111111111111111111111..
    ..111111111111111111111111111111111111..
    ........................................
    ........................................
    `, SpriteKind.none)
mySprite2 = sprites.create(img`
    ........................................
    ........................................
    ..111111111111111111111111111111111111..
    ..111111111111111111111111111111111111..
    ..111111111111111111111111111111111111..
    ..111111111111111111111111111111111111..
    ..111111111111111111111111111111111111..
    ..111111111111111111111111111111111111..
    ..111111111111111111111111111111111111..
    ..111111111111111111111111111111111111..
    ..111111111111111111111111111111111111..
    ..111111111111111111111111111111111111..
    ..111111111111111111111111111111111111..
    ..111111111111111111111111111111111111..
    ..111111111111111111111111111111111111..
    ..111111111111111111111111111111111111..
    ..111111111111111111111111111111111111..
    ..111111111111111111111111111111111111..
    ..111111111111111111111111111111111111..
    ..111111111111111111111111111111111111..
    ..111111111111111111111111111111111111..
    ..111111111111111111111111111111111111..
    ..111111111111111111111111111111111111..
    ..111111111111111111111111111111111111..
    ..111111111111111111111111111111111111..
    ..111111111111111111111111111111111111..
    ..111111111111111111111111111111111111..
    ..111111111111111111111111111111111111..
    ..111111111111111111111111111111111111..
    ..111111111111111111111111111111111111..
    ..111111111111111111111111111111111111..
    ..111111111111111111111111111111111111..
    ..111111111111111111111111111111111111..
    ..111111111111111111111111111111111111..
    ..111111111111111111111111111111111111..
    ..111111111111111111111111111111111111..
    ..111111111111111111111111111111111111..
    ..111111111111111111111111111111111111..
    ........................................
    ........................................
    `, SpriteKind.none)
mySprite2.x = 40
mySprite3 = sprites.create(img`
    ........................................
    ........................................
    ..111111111111111111111111111111111111..
    ..111111111111111111111111111111111111..
    ..111111111111111111111111111111111111..
    ..111111111111111111111111111111111111..
    ..111111111111111111111111111111111111..
    ..111111111111111111111111111111111111..
    ..111111111111111111111111111111111111..
    ..111111111111111111111111111111111111..
    ..111111111111111111111111111111111111..
    ..111111111111111111111111111111111111..
    ..111111111111111111111111111111111111..
    ..111111111111111111111111111111111111..
    ..111111111111111111111111111111111111..
    ..111111111111111111111111111111111111..
    ..111111111111111111111111111111111111..
    ..111111111111111111111111111111111111..
    ..111111111111111111111111111111111111..
    ..111111111111111111111111111111111111..
    ..111111111111111111111111111111111111..
    ..111111111111111111111111111111111111..
    ..111111111111111111111111111111111111..
    ..111111111111111111111111111111111111..
    ..111111111111111111111111111111111111..
    ..111111111111111111111111111111111111..
    ..111111111111111111111111111111111111..
    ..111111111111111111111111111111111111..
    ..111111111111111111111111111111111111..
    ..111111111111111111111111111111111111..
    ..111111111111111111111111111111111111..
    ..111111111111111111111111111111111111..
    ..111111111111111111111111111111111111..
    ..111111111111111111111111111111111111..
    ..111111111111111111111111111111111111..
    ..111111111111111111111111111111111111..
    ..111111111111111111111111111111111111..
    ..111111111111111111111111111111111111..
    ........................................
    ........................................
    `, SpriteKind.none)
mySprite3.x = 120
if (!(boss)) {
    anim = animation.createAnimation(ActionKind.roulette_spin, 100)
    anim.addAnimationFrame(img`
        ........................................
        ........................................
        ..111111111111111111111111111111111111..
        ..111111111111111111111111111111111111..
        ..111111111111cccccccccccc111111111111..
        ..1111111111cc555555555555cc1111111111..
        ..11111111cc5555555555555555cc11111111..
        ..1111111c5555555cccccc5555555c1111111..
        ..111111c55555555c5555c55555555c111111..
        ..11111c555555555c5555c555555555c11111..
        ..1111c5555555555c5555c5555555555c1111..
        ..1111c5555555555c5555c5555555555c1111..
        ..111c55555555555c5555c55555555555c111..
        ..111c55555555555c5555c55555555555c111..
        ..11c555555555555c5555c555555555555c11..
        ..11c555555555555c5555c555555555555c11..
        ..11c555555555555c5555c555555555555c11..
        ..11c555555555555c5555c555555555555c11..
        ..11c555555555555c5555c555555555555c11..
        ..11c555555555555c5555c555555555555c11..
        ..11c555555555555c5555c555555555555c11..
        ..11c555555555555c5555c555555555555c11..
        ..11c555555555555c5555c555555555555c11..
        ..11c555555555555c5555c555555555555c11..
        ..11c555555555555c5555c555555555555c11..
        ..11c555555555555c5555c555555555555c11..
        ..111c55555555555c5555c55555555555c111..
        ..111c55555555555c5555c55555555555c111..
        ..1111c5555555555c5555c5555555555c1111..
        ..1111c5555555555c5555c5555555555c1111..
        ..11111c555555555c5555c555555555c11111..
        ..111111c55555555c5555c55555555c111111..
        ..1111111c5555555cccccc5555555c1111111..
        ..11111111cc5555555555555555cc11111111..
        ..1111111111cc555555555555cc1111111111..
        ..111111111111cccccccccccc111111111111..
        ..111111111111111111111111111111111111..
        ..111111111111111111111111111111111111..
        ........................................
        ........................................
        `)
    anim.addAnimationFrame(img`
        ........................................
        ........................................
        ..111111111111111111111111111111111111..
        ..111111111111111111111111111111111111..
        ..111111111111111111111111111111111111..
        ..111111111111111111111111111111111111..
        ..111111111111111111111111111111111111..
        ..111111111111111111111111111111111111..
        ..111111111111111111111111111111111111..
        ..11111ffffffffffffffffffffffffff11111..
        ..1111f11111111111111111111111111f1111..
        ..111f1111111111111111111111111111f111..
        ..11f111111111111111111111111111111f11..
        ..11f1111fffff111111111111fffff1111f11..
        ..11f111f11111f1111111111f11111f111f11..
        ..11f111f11111f1111111111f11111f111f11..
        ..11f111f11111f1111111111f11111f111f11..
        ..11f111f11111f1111111111f11111f111f11..
        ..11f111f11111f1111111111f11111f111f11..
        ..11f1111fffff111111111111fffff1111f11..
        ..11f111111111111111111111111111111f11..
        ..11f111111111111111111111111111111f11..
        ..11f111111111111111111111111111111f11..
        ..11f111111111111111111111111111111f11..
        ..111f1111111111111111111111111111f111..
        ..1111f111111ff1111ff1111ff111111f1111..
        ..11111ff111f11f11f11f11f11f111ff11111..
        ..1111111f11f11f11f11f11f11f11f1111111..
        ..1111111f11f11f11f11f11f11f11f1111111..
        ..1111111f11f11f11f11f11f11f11f1111111..
        ..1111111f11f11f11f11f11f11f11f1111111..
        ..1111111f11f11f11f11f11f11f11f1111111..
        ..1111111f11f11f11f11f11f11f11f1111111..
        ..1111111f11f11f11f11f11f11f11f1111111..
        ..1111111f11f11f11f11f11f11f11f1111111..
        ..11111111ff1111ff1111ff1111ff11111111..
        ..111111111111111111111111111111111111..
        ..111111111111111111111111111111111111..
        ........................................
        ........................................
        `)
    anim.addAnimationFrame(img`
        ........................................
        ........................................
        ..111111111111111111111111111111111111..
        ..111111111111111111111111111111111111..
        ..111111bbbbbbbbbbbbbbbbbbbbbbbb111111..
        ..111111bbbbbbbbbbbbbbbbbbbbbbbb111111..
        ..1111bbee44444444444444444444eebb1111..
        ..1111bbee44444444444444444444eebb1111..
        ..11bbee444444444444444444444444eebb11..
        ..11bbee444444444444444444444444eebb11..
        ..11bbee444444444444444444444444eebb11..
        ..11bbee444444444444444444444444eebb11..
        ..11bbee444444444444444444444444eebb11..
        ..11bbee444444444444444444444444eebb11..
        ..11bbeeee44444444444444444444eeeebb11..
        ..11bbeeee44444444444444444444eeeebb11..
        ..11bbeeeeeeeeeeeeeeeeeeeeeeeeeeeebb11..
        ..11bbeeeeeeeeeeeeeeeeeeeeeeeeeeeebb11..
        ..11bbeeeeeeeeeeeeeeeeeeeeeeeeeeeebb11..
        ..11bbeeeeeeeeeeeeeeeeeeeeeeeeeeeebb11..
        ..11bbbbbbbbbbbbbbddddbbbbbbbbbbbbbb11..
        ..11bbbbbbbbbbbbbbddddbbbbbbbbbbbbbb11..
        ..11ccbbbbbbbbbbbbccccbbbbbbbbbbbbcc11..
        ..11ccbbbbbbbbbbbbccccbbbbbbbbbbbbcc11..
        ..11ccccccccccccbbccccbbcccccccccccc11..
        ..11ccccccccccccbbccccbbcccccccccccc11..
        ..11bbeeeeeeeeeeccbbbbcceeeeeeeeeebb11..
        ..11bbeeeeeeeeeeccbbbbcceeeeeeeeeebb11..
        ..11bbeeeeeeeeeeeeeeeeeeeeeeeeeeeebb11..
        ..11bbeeeeeeeeeeeeeeeeeeeeeeeeeeeebb11..
        ..11bbcceeeeeeeeeeeeeeeeeeeeeeeeccbb11..
        ..11bbcceeeeeeeeeeeeeeeeeeeeeeeeccbb11..
        ..11bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb11..
        ..11bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb11..
        ..1111bbbb11111111111111111111bbbb1111..
        ..1111bbbb11111111111111111111bbbb1111..
        ..111111111111111111111111111111111111..
        ..111111111111111111111111111111111111..
        ........................................
        ........................................
        `)
    anim.addAnimationFrame(img`
        ........................................
        ........................................
        ..111111111111111111111111111111111111..
        ..111111111111111111111111111111111111..
        ..111111111111111111111111111111111111..
        ..111111111111111111111111111111111111..
        ..111111111111111111111111111111111111..
        ..111111111111111111111111111111111111..
        ..111111111111111111111111111111111111..
        ..111111111111111111111111111111111111..
        ..1111ff11111111ff1111111fffffffff1111..
        ..111f22f111111f22f11111f222222222f111..
        ..111f22f111111f22f1111f2222222222f111..
        ..111f22f111111f22f1111f2222222222f111..
        ..111f22f111111f22f1111f2222ffffff1111..
        ..1111f22f1111f22f11111f222f1111111111..
        ..11ccf22fccccf22fcccccf222fcccccccc11..
        ..11ccf22fccccf22fcccccf222fcccccccc11..
        ..11cccf22fccf22fccccccf222fcccccccc11..
        ..11cccf22fccf22fccccccf2222fffffccc11..
        ..11cccf22fccf22fccccccf222222222fcc11..
        ..11cccf22fccf22fccccccf2222222222fc11..
        ..11ccccf22ff22fccccccccf222222222fc11..
        ..111111f22ff22f111111111fffff2222f111..
        ..111111f22ff22f11111111111111f222f111..
        ..1111111f2222f111111111111111f222f111..
        ..1111111f2222f111111111ffffff2222f111..
        ..1111111f2222f11111111f2222222222f111..
        ..1111111f2222f11111111f2222222222f111..
        ..11111111f22f111111111f222222222f1111..
        ..111111111ff11111111111fffffffff11111..
        ..111111111111111111111111111111111111..
        ..111111111111111111111111111111111111..
        ..111111111111111111111111111111111111..
        ..111111111111111111111111111111111111..
        ..111111111111111111111111111111111111..
        ..111111111111111111111111111111111111..
        ..111111111111111111111111111111111111..
        ........................................
        ........................................
        `)
    if (blockSettings.readNumber("section") > 1) {
        anim.addAnimationFrame(img`
            ........................................
            ........................................
            ..111111111111111111111111111111111111..
            ..111111111111111111111111111111111111..
            ..11eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee11..
            ..11edddddddddddddddddddddddddddddde11..
            ..11edddddddddddddddddddddddddddddde11..
            ..11edddddddddddddddddddddddddddddde11..
            ..11eddddccccdddddddddddddddd1ddddde11..
            ..11edddc5555cddddddddddddddbb1dddde11..
            ..11eddc55cc55cddddddddfddddbbbdddde11..
            ..11edc555cc555cdddddddffdddbbbdddde11..
            ..11edc555cc555cdfffffffffddbbbdddde11..
            ..11edc555cc555cdfffffffffddbbbdddde11..
            ..11edc555cc555cdddddddffdddbbbdddde11..
            ..11eddc55cc55cddddddddfdddcccccddde11..
            ..11edddc5555cdddddddddddddddcddddde11..
            ..11eddddccccddddddddddddddddcddddde11..
            ..11edddddddddddddddddddddddddddddde11..
            ..11edddddddddddddddddddddddddddddde11..
            ..11edddddddddddddddddddddddddddddde11..
            ..11edddddddddddddddddddddddddddddde11..
            ..11eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee11..
            ..111111111111111eeeeee111111111111111..
            ..111111111111111eeeeee111111111111111..
            ..111111111111111eeeeee111111111111111..
            ..111111111111111eeeeee111111111111111..
            ..111111111111111eeeeee111111111111111..
            ..111111111111111eeeeee111111111111111..
            ..111111111111111eeeeee111111111111111..
            ..111111111111111eeeeee111111111111111..
            ..111111111111111eeeeee111111111111111..
            ..111111111111111eeeeee111111111111111..
            ..111111111111111eeeeee111111111111111..
            ..111111111111111eeeeee111111111111111..
            ..111111111111111eeeeee111111111111111..
            ..111111111111111111111111111111111111..
            ..111111111111111111111111111111111111..
            ........................................
            ........................................
            `)
        anim.addAnimationFrame(img`
            ........................................
            ........................................
            ..111111111111111111111111111111111111..
            ..111111111111111111111111111111111111..
            ..1111fff11111111fff111cccccc111111111..
            ..111ffcc111111fcbbc11c677776c11111111..
            ..11ffcc111111fcbbc11c77777777c1111111..
            ..11fcfc111111fbccc1c6777777776c111111..
            ..11fffcc1cc1fcbbcc1c7c6666c777c111111..
            ..11ffc3cc3ccfbcbbc1f76f66f6777f111111..
            ..11ffb3bc3bcfbccbc1f7777777777f111111..
            ..111cbbbbbbcbbccc111f77776c776f111111..
            ..111c1bbb1bbcccc11111fcccc776fccc1111..
            ..11cbbbbbbbbbcc111111c62777fcc777c111..
            ..11cbcbbbcbbbbf11111c677277cf67777c11..
            ..11fb1fff1bbbbfc1111c1111766c666ccc11..
            ..11fbbbbbbbbbbfcc111c11111666666c1111..
            ..111fbbbbbbbbcf11111c61111166666c1111..
            ..1111fbbbbbbcf1111111c611111766cc1111..
            ..11111fffffff111111111cccccccccc11111..
            ..111111fffff111111111111111bbbb111111..
            ..11111feeeeef1111111111bbbb3333b11111..
            ..1111fddddeeef111111ccbb1133333bb1111..
            ..111cdfddfdeeff1111cc33113333311b1111..
            ..111cdfddfdeeddf111cb33333333311b1111..
            ..11cdeeddddeebdc111fbbccc3333333c1111..
            ..11cddddcddeebdc1fffbcccbbbb33333c111..
            ..11cccccdddeefc1feffbccdddddbb3333c11..
            ..111fdddddeeff11fef1ccdcddddddbc33c11..
            ..1111fffffeeeef1fef1cbdcdddcddccc3f11..
            ..111111feeeeeeeffef1fdddddcdddcccbf11..
            ..11111feffefeeeeff11fdbbbdddddcccbf11..
            ..11111feffefeeeef1111cdddddddbcbbff11..
            ..11111fdbfdbffef11111ffddddccbffff111..
            ..11111fddcddbbdf1111ffbbffccbddbf1111..
            ..111111fffffffff1111fbbbff11bdddf1111..
            ..111111111111111111111111111111111111..
            ..111111111111111111111111111111111111..
            ........................................
            ........................................
            `)
    }
    if (blockSettings.readNumber("section") > 2) {
        anim.addAnimationFrame(img`
            ........................................
            ........................................
            ..111111111111111111111111111111111111..
            ..111111111111111111111111111111111111..
            ..11111111111ffffffffffffff11111111111..
            ..11111111111ffffffffffffff11111111111..
            ..11111111111ffffffffffffff11111111111..
            ..11111111111ffffffffffffff11111111111..
            ..11111111111ffffffffffffff11111111111..
            ..11111111111ffffffffffffff11111111111..
            ..11111111111ffffffffffffff11111111111..
            ..11111111111ffffffffffffff11111111111..
            ..11111111111ffffffffffffff11111111111..
            ..11111111111ffffff55ffffff11111111111..
            ..11111111111fffff5555fffff11111111111..
            ..11111111111ffff555555ffff11111111111..
            ..11111111111fff55555555fff11111111111..
            ..11111111111fffff5555fffff11111111111..
            ..11111111111fffff5555fffff11111111111..
            ..11111111111fffff5555fffff11111111111..
            ..11111111111fffff5555fffff11111111111..
            ..11111111111fffff5555fffff11111111111..
            ..11111111111ffffffffffffff11111111111..
            ..11111111111ffffffffffffff11111111111..
            ..11111111111f999999999999f11111111111..
            ..11111111111f999999999999f11111111111..
            ..11111111111f999999999999f11111111111..
            ..11111111111f999999999999f11111111111..
            ..11111111111f999999999999f11111111111..
            ..11111111111f999999999999f11111111111..
            ..11111111111f999999999999f11111111111..
            ..11111111111f999999999999f11111111111..
            ..11111111111f999999999999f11111111111..
            ..11111111111f999999999999f11111111111..
            ..11111111111f999999999999f11111111111..
            ..11111111111ffffffffffffff11111111111..
            ..111111111111111111111111111111111111..
            ..111111111111111111111111111111111111..
            ........................................
            ........................................
            `)
        anim.addAnimationFrame(img`
            ........................................
            ........................................
            ..111111111111111111111111111111111111..
            ..111111111111111111111111111111111111..
            ..11111111111ffffffffffffff11111111111..
            ..11111111111ffffffffffffff11111111111..
            ..11111111111ffffffffffffff11111111111..
            ..11111111111ffffffffffffff11111111111..
            ..11111111111ffffff44ffffff11111111111..
            ..11111111111fffff4444fffff11111111111..
            ..11111111111ffff444444ffff11111111111..
            ..11111111111fff44444444fff11111111111..
            ..11111111111fffff4444fffff11111111111..
            ..11111111111fffff4554fffff11111111111..
            ..11111111111fffff5555fffff11111111111..
            ..11111111111ffff555555ffff11111111111..
            ..11111111111fff55555555fff11111111111..
            ..11111111111fffff5555fffff11111111111..
            ..11111111111f999955559999f11111111111..
            ..11111111111f999955559999f11111111111..
            ..11111111111f999955559999f11111111111..
            ..11111111111f999955559999f11111111111..
            ..11111111111f999999999999f11111111111..
            ..11111111111f999999999999f11111111111..
            ..11111111111f999999999999f11111111111..
            ..11111111111f999999999999f11111111111..
            ..11111111111f999999999999f11111111111..
            ..11111111111f999999999999f11111111111..
            ..11111111111f999999999999f11111111111..
            ..11111111111f999999999999f11111111111..
            ..11111111111f999999999999f11111111111..
            ..11111111111f999999999999f11111111111..
            ..11111111111f999999999999f11111111111..
            ..11111111111f999999999999f11111111111..
            ..11111111111f999999999999f11111111111..
            ..11111111111ffffffffffffff11111111111..
            ..111111111111111111111111111111111111..
            ..111111111111111111111111111111111111..
            ........................................
            ........................................
            `)
    }
    animation.attachAnimation(mySprite, anim)
    animation.attachAnimation(mySprite2, anim)
    animation.attachAnimation(mySprite3, anim)
    animation.setAction(mySprite2, ActionKind.roulette_spin)
    pause(500)
    animation.setAction(mySprite, ActionKind.roulette_spin)
    pause(500)
    animation.setAction(mySprite3, ActionKind.roulette_spin)
    anim = animation.createAnimation(ActionKind.roulette_coin, 100)
    anim.addAnimationFrame(img`
        ........................................
        ........................................
        ..111111111111111111111111111111111111..
        ..111111111111111111111111111111111111..
        ..111111111111cccccccccccc111111111111..
        ..1111111111cc555555555555cc1111111111..
        ..11111111cc5555555555555555cc11111111..
        ..1111111c5555555cccccc5555555c1111111..
        ..111111c55555555c5555c55555555c111111..
        ..11111c555555555c5555c555555555c11111..
        ..1111c5555555555c5555c5555555555c1111..
        ..1111c5555555555c5555c5555555555c1111..
        ..111c55555555555c5555c55555555555c111..
        ..111c55555555555c5555c55555555555c111..
        ..11c555555555555c5555c555555555555c11..
        ..11c555555555555c5555c555555555555c11..
        ..11c555555555555c5555c555555555555c11..
        ..11c555555555555c5555c555555555555c11..
        ..11c555555555555c5555c555555555555c11..
        ..11c555555555555c5555c555555555555c11..
        ..11c555555555555c5555c555555555555c11..
        ..11c555555555555c5555c555555555555c11..
        ..11c555555555555c5555c555555555555c11..
        ..11c555555555555c5555c555555555555c11..
        ..11c555555555555c5555c555555555555c11..
        ..11c555555555555c5555c555555555555c11..
        ..111c55555555555c5555c55555555555c111..
        ..111c55555555555c5555c55555555555c111..
        ..1111c5555555555c5555c5555555555c1111..
        ..1111c5555555555c5555c5555555555c1111..
        ..11111c555555555c5555c555555555c11111..
        ..111111c55555555c5555c55555555c111111..
        ..1111111c5555555cccccc5555555c1111111..
        ..11111111cc5555555555555555cc11111111..
        ..1111111111cc555555555555cc1111111111..
        ..111111111111cccccccccccc111111111111..
        ..111111111111111111111111111111111111..
        ..111111111111111111111111111111111111..
        ........................................
        ........................................
        `)
    animation.attachAnimation(mySprite, anim)
    animation.attachAnimation(mySprite2, anim)
    animation.attachAnimation(mySprite3, anim)
    anim = animation.createAnimation(ActionKind.roulette_skull, 100)
    anim.addAnimationFrame(img`
        ........................................
        ........................................
        ..111111111111111111111111111111111111..
        ..111111111111111111111111111111111111..
        ..111111111111111111111111111111111111..
        ..111111111111111111111111111111111111..
        ..111111111111111111111111111111111111..
        ..111111111111111111111111111111111111..
        ..111111111111111111111111111111111111..
        ..11111ffffffffffffffffffffffffff11111..
        ..1111f11111111111111111111111111f1111..
        ..111f1111111111111111111111111111f111..
        ..11f111111111111111111111111111111f11..
        ..11f1111fffff111111111111fffff1111f11..
        ..11f111f11111f1111111111f11111f111f11..
        ..11f111f11111f1111111111f11111f111f11..
        ..11f111f11111f1111111111f11111f111f11..
        ..11f111f11111f1111111111f11111f111f11..
        ..11f111f11111f1111111111f11111f111f11..
        ..11f1111fffff111111111111fffff1111f11..
        ..11f111111111111111111111111111111f11..
        ..11f111111111111111111111111111111f11..
        ..11f111111111111111111111111111111f11..
        ..11f111111111111111111111111111111f11..
        ..111f1111111111111111111111111111f111..
        ..1111f111111ff1111ff1111ff111111f1111..
        ..11111ff111f11f11f11f11f11f111ff11111..
        ..1111111f11f11f11f11f11f11f11f1111111..
        ..1111111f11f11f11f11f11f11f11f1111111..
        ..1111111f11f11f11f11f11f11f11f1111111..
        ..1111111f11f11f11f11f11f11f11f1111111..
        ..1111111f11f11f11f11f11f11f11f1111111..
        ..1111111f11f11f11f11f11f11f11f1111111..
        ..1111111f11f11f11f11f11f11f11f1111111..
        ..1111111f11f11f11f11f11f11f11f1111111..
        ..11111111ff1111ff1111ff1111ff11111111..
        ..111111111111111111111111111111111111..
        ..111111111111111111111111111111111111..
        ........................................
        ........................................
        `)
    animation.attachAnimation(mySprite, anim)
    animation.attachAnimation(mySprite2, anim)
    animation.attachAnimation(mySprite3, anim)
    anim = animation.createAnimation(ActionKind.roulette_chest, 100)
    anim.addAnimationFrame(img`
        ........................................
        ........................................
        ..111111111111111111111111111111111111..
        ..111111111111111111111111111111111111..
        ..111111bbbbbbbbbbbbbbbbbbbbbbbb111111..
        ..111111bbbbbbbbbbbbbbbbbbbbbbbb111111..
        ..1111bbee44444444444444444444eebb1111..
        ..1111bbee44444444444444444444eebb1111..
        ..11bbee444444444444444444444444eebb11..
        ..11bbee444444444444444444444444eebb11..
        ..11bbee444444444444444444444444eebb11..
        ..11bbee444444444444444444444444eebb11..
        ..11bbee444444444444444444444444eebb11..
        ..11bbee444444444444444444444444eebb11..
        ..11bbeeee44444444444444444444eeeebb11..
        ..11bbeeee44444444444444444444eeeebb11..
        ..11bbeeeeeeeeeeeeeeeeeeeeeeeeeeeebb11..
        ..11bbeeeeeeeeeeeeeeeeeeeeeeeeeeeebb11..
        ..11bbeeeeeeeeeeeeeeeeeeeeeeeeeeeebb11..
        ..11bbeeeeeeeeeeeeeeeeeeeeeeeeeeeebb11..
        ..11bbbbbbbbbbbbbbddddbbbbbbbbbbbbbb11..
        ..11bbbbbbbbbbbbbbddddbbbbbbbbbbbbbb11..
        ..11ccbbbbbbbbbbbbccccbbbbbbbbbbbbcc11..
        ..11ccbbbbbbbbbbbbccccbbbbbbbbbbbbcc11..
        ..11ccccccccccccbbccccbbcccccccccccc11..
        ..11ccccccccccccbbccccbbcccccccccccc11..
        ..11bbeeeeeeeeeeccbbbbcceeeeeeeeeebb11..
        ..11bbeeeeeeeeeeccbbbbcceeeeeeeeeebb11..
        ..11bbeeeeeeeeeeeeeeeeeeeeeeeeeeeebb11..
        ..11bbeeeeeeeeeeeeeeeeeeeeeeeeeeeebb11..
        ..11bbcceeeeeeeeeeeeeeeeeeeeeeeeccbb11..
        ..11bbcceeeeeeeeeeeeeeeeeeeeeeeeccbb11..
        ..11bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb11..
        ..11bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb11..
        ..1111bbbb11111111111111111111bbbb1111..
        ..1111bbbb11111111111111111111bbbb1111..
        ..111111111111111111111111111111111111..
        ..111111111111111111111111111111111111..
        ........................................
        ........................................
        `)
    animation.attachAnimation(mySprite, anim)
    animation.attachAnimation(mySprite2, anim)
    animation.attachAnimation(mySprite3, anim)
    anim = animation.createAnimation(ActionKind.roulette_boss, 100)
    anim.addAnimationFrame(img`
        ........................................
        ........................................
        ..111111111111111111111111111111111111..
        ..111111111111111111111111111111111111..
        ..111111111111111111111111111111111111..
        ..111111111111111111111111111111111111..
        ..111111111111111111111111111111111111..
        ..111111111111111111111111111111111111..
        ..111111111111111111111111111111111111..
        ..111111111111111111111111111111111111..
        ..1111ff11111111ff1111111fffffffff1111..
        ..111f22f111111f22f11111f222222222f111..
        ..111f22f111111f22f1111f2222222222f111..
        ..111f22f111111f22f1111f2222222222f111..
        ..111f22f111111f22f1111f2222ffffff1111..
        ..1111f22f1111f22f11111f222f1111111111..
        ..11ccf22fccccf22fcccccf222fcccccccc11..
        ..11ccf22fccccf22fcccccf222fcccccccc11..
        ..11cccf22fccf22fccccccf222fcccccccc11..
        ..11cccf22fccf22fccccccf2222fffffccc11..
        ..11cccf22fccf22fccccccf222222222fcc11..
        ..11cccf22fccf22fccccccf2222222222fc11..
        ..11ccccf22ff22fccccccccf222222222fc11..
        ..111111f22ff22f111111111fffff2222f111..
        ..111111f22ff22f11111111111111f222f111..
        ..1111111f2222f111111111111111f222f111..
        ..1111111f2222f111111111ffffff2222f111..
        ..1111111f2222f11111111f2222222222f111..
        ..1111111f2222f11111111f2222222222f111..
        ..11111111f22f111111111f222222222f1111..
        ..111111111ff11111111111fffffffff11111..
        ..111111111111111111111111111111111111..
        ..111111111111111111111111111111111111..
        ..111111111111111111111111111111111111..
        ..111111111111111111111111111111111111..
        ..111111111111111111111111111111111111..
        ..111111111111111111111111111111111111..
        ..111111111111111111111111111111111111..
        ........................................
        ........................................
        `)
    animation.attachAnimation(mySprite, anim)
    animation.attachAnimation(mySprite2, anim)
    animation.attachAnimation(mySprite3, anim)
    if (blockSettings.readNumber("section") > 1) {
        anim = animation.createAnimation(ActionKind.roulette_shop, 100)
        anim.addAnimationFrame(img`
            ........................................
            ........................................
            ..111111111111111111111111111111111111..
            ..111111111111111111111111111111111111..
            ..11eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee11..
            ..11edddddddddddddddddddddddddddddde11..
            ..11edddddddddddddddddddddddddddddde11..
            ..11edddddddddddddddddddddddddddddde11..
            ..11eddddccccdddddddddddddddd1ddddde11..
            ..11edddc5555cddddddddddddddbb1dddde11..
            ..11eddc55cc55cddddddddfddddbbbdddde11..
            ..11edc555cc555cdddddddffdddbbbdddde11..
            ..11edc555cc555cdfffffffffddbbbdddde11..
            ..11edc555cc555cdfffffffffddbbbdddde11..
            ..11edc555cc555cdddddddffdddbbbdddde11..
            ..11eddc55cc55cddddddddfdddcccccddde11..
            ..11edddc5555cdddddddddddddddcddddde11..
            ..11eddddccccddddddddddddddddcddddde11..
            ..11edddddddddddddddddddddddddddddde11..
            ..11edddddddddddddddddddddddddddddde11..
            ..11edddddddddddddddddddddddddddddde11..
            ..11edddddddddddddddddddddddddddddde11..
            ..11eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee11..
            ..111111111111111eeeeee111111111111111..
            ..111111111111111eeeeee111111111111111..
            ..111111111111111eeeeee111111111111111..
            ..111111111111111eeeeee111111111111111..
            ..111111111111111eeeeee111111111111111..
            ..111111111111111eeeeee111111111111111..
            ..111111111111111eeeeee111111111111111..
            ..111111111111111eeeeee111111111111111..
            ..111111111111111eeeeee111111111111111..
            ..111111111111111eeeeee111111111111111..
            ..111111111111111eeeeee111111111111111..
            ..111111111111111eeeeee111111111111111..
            ..111111111111111eeeeee111111111111111..
            ..111111111111111111111111111111111111..
            ..111111111111111111111111111111111111..
            ........................................
            ........................................
            `)
        animation.attachAnimation(mySprite, anim)
        animation.attachAnimation(mySprite2, anim)
        animation.attachAnimation(mySprite3, anim)
        anim = animation.createAnimation(ActionKind.roulette_enemy, 100)
        anim.addAnimationFrame(img`
            ........................................
            ........................................
            ..111111111111111111111111111111111111..
            ..111111111111111111111111111111111111..
            ..1111fff11111111fff111cccccc111111111..
            ..111ffcc111111fcbbc11c677776c11111111..
            ..11ffcc111111fcbbc11c77777777c1111111..
            ..11fcfc111111fbccc1c6777777776c111111..
            ..11fffcc1cc1fcbbcc1c7c6666c777c111111..
            ..11ffc3cc3ccfbcbbc1f76f66f6777f111111..
            ..11ffb3bc3bcfbccbc1f7777777777f111111..
            ..111cbbbbbbcbbccc111f77776c776f111111..
            ..111c1bbb1bbcccc11111fcccc776fccc1111..
            ..11cbbbbbbbbbcc111111c62777fcc777c111..
            ..11cbcbbbcbbbbf11111c677277cf67777c11..
            ..11fb1fff1bbbbfc1111c1111766c666ccc11..
            ..11fbbbbbbbbbbfcc111c11111666666c1111..
            ..111fbbbbbbbbcf11111c61111166666c1111..
            ..1111fbbbbbbcf1111111c611111766cc1111..
            ..11111fffffff111111111cccccccccc11111..
            ..111111fffff111111111111111bbbb111111..
            ..11111feeeeef1111111111bbbb3333b11111..
            ..1111fddddeeef111111ccbb1133333bb1111..
            ..111cdfddfdeeff1111cc33113333311b1111..
            ..111cdfddfdeeddf111cb33333333311b1111..
            ..11cdeeddddeebdc111fbbccc3333333c1111..
            ..11cddddcddeebdc1fffbcccbbbb33333c111..
            ..11cccccdddeefc1feffbccdddddbb3333c11..
            ..111fdddddeeff11fef1ccdcddddddbc33c11..
            ..1111fffffeeeef1fef1cbdcdddcddccc3f11..
            ..111111feeeeeeeffef1fdddddcdddcccbf11..
            ..11111feffefeeeeff11fdbbbdddddcccbf11..
            ..11111feffefeeeef1111cdddddddbcbbff11..
            ..11111fdbfdbffef11111ffddddccbffff111..
            ..11111fddcddbbdf1111ffbbffccbddbf1111..
            ..111111fffffffff1111fbbbff11bdddf1111..
            ..111111111111111111111111111111111111..
            ..111111111111111111111111111111111111..
            ........................................
            ........................................
            `)
        animation.attachAnimation(mySprite, anim)
        animation.attachAnimation(mySprite2, anim)
        animation.attachAnimation(mySprite3, anim)
    }
    if (blockSettings.readNumber("section") > 2) {
        anim = animation.createAnimation(ActionKind.roulette_sp1, 100)
        anim.addAnimationFrame(img`
            ........................................
            ........................................
            ..111111111111111111111111111111111111..
            ..111111111111111111111111111111111111..
            ..11111111111ffffffffffffff11111111111..
            ..11111111111ffffffffffffff11111111111..
            ..11111111111ffffffffffffff11111111111..
            ..11111111111ffffffffffffff11111111111..
            ..11111111111ffffffffffffff11111111111..
            ..11111111111ffffffffffffff11111111111..
            ..11111111111ffffffffffffff11111111111..
            ..11111111111ffffffffffffff11111111111..
            ..11111111111ffffffffffffff11111111111..
            ..11111111111ffffff55ffffff11111111111..
            ..11111111111fffff5555fffff11111111111..
            ..11111111111ffff555555ffff11111111111..
            ..11111111111fff55555555fff11111111111..
            ..11111111111fffff5555fffff11111111111..
            ..11111111111fffff5555fffff11111111111..
            ..11111111111fffff5555fffff11111111111..
            ..11111111111fffff5555fffff11111111111..
            ..11111111111fffff5555fffff11111111111..
            ..11111111111ffffffffffffff11111111111..
            ..11111111111ffffffffffffff11111111111..
            ..11111111111f999999999999f11111111111..
            ..11111111111f999999999999f11111111111..
            ..11111111111f999999999999f11111111111..
            ..11111111111f999999999999f11111111111..
            ..11111111111f999999999999f11111111111..
            ..11111111111f999999999999f11111111111..
            ..11111111111f999999999999f11111111111..
            ..11111111111f999999999999f11111111111..
            ..11111111111f999999999999f11111111111..
            ..11111111111f999999999999f11111111111..
            ..11111111111f999999999999f11111111111..
            ..11111111111ffffffffffffff11111111111..
            ..111111111111111111111111111111111111..
            ..111111111111111111111111111111111111..
            ........................................
            ........................................
            `)
        animation.attachAnimation(mySprite, anim)
        animation.attachAnimation(mySprite2, anim)
        animation.attachAnimation(mySprite3, anim)
        anim = animation.createAnimation(ActionKind.roulette_sp2, 100)
        anim.addAnimationFrame(img`
            ........................................
            ........................................
            ..111111111111111111111111111111111111..
            ..111111111111111111111111111111111111..
            ..11111111111ffffffffffffff11111111111..
            ..11111111111ffffffffffffff11111111111..
            ..11111111111ffffffffffffff11111111111..
            ..11111111111ffffffffffffff11111111111..
            ..11111111111ffffff44ffffff11111111111..
            ..11111111111fffff4444fffff11111111111..
            ..11111111111ffff444444ffff11111111111..
            ..11111111111fff44444444fff11111111111..
            ..11111111111fffff4444fffff11111111111..
            ..11111111111fffff4554fffff11111111111..
            ..11111111111fffff5555fffff11111111111..
            ..11111111111ffff555555ffff11111111111..
            ..11111111111fff55555555fff11111111111..
            ..11111111111fffff5555fffff11111111111..
            ..11111111111f999955559999f11111111111..
            ..11111111111f999955559999f11111111111..
            ..11111111111f999955559999f11111111111..
            ..11111111111f999955559999f11111111111..
            ..11111111111f999999999999f11111111111..
            ..11111111111f999999999999f11111111111..
            ..11111111111f999999999999f11111111111..
            ..11111111111f999999999999f11111111111..
            ..11111111111f999999999999f11111111111..
            ..11111111111f999999999999f11111111111..
            ..11111111111f999999999999f11111111111..
            ..11111111111f999999999999f11111111111..
            ..11111111111f999999999999f11111111111..
            ..11111111111f999999999999f11111111111..
            ..11111111111f999999999999f11111111111..
            ..11111111111f999999999999f11111111111..
            ..11111111111f999999999999f11111111111..
            ..11111111111ffffffffffffff11111111111..
            ..111111111111111111111111111111111111..
            ..111111111111111111111111111111111111..
            ........................................
            ........................................
            `)
        animation.attachAnimation(mySprite, anim)
        animation.attachAnimation(mySprite2, anim)
        animation.attachAnimation(mySprite3, anim)
    }
}
readyforpull = true
while (!(Ingame)) {
    pause(100)
}
if (boss) {
    while (boss_bar.value > 0) {
        pause(100)
        boss_sprite.setVelocity(-100, 0)
        pause(100)
        while (!(mySprite6.tileKindAt(TileDirection.Left, assets.tile`myTile1`))) {
            pause(1)
        }
        tiles.placeOnRandomTile(boss_sprite, assets.tile`myTile1`)
        boss_sprite.setVelocity(100, 0)
        pause(100)
        while (!(mySprite6.tileKindAt(TileDirection.Right, assets.tile`myTile2`))) {
            pause(1)
        }
        tiles.placeOnRandomTile(boss_sprite, assets.tile`myTile2`)
    }
} else {
    while (!(sprites.allOfKind(SpriteKind.Enemy).length == 0)) {
        pause(100)
    }
}
pause(1000)
if (info.life() > 0) {
    if (numofchest > 0) {
        music.playTone(392, music.beat(BeatFraction.Half))
    }
    if (numofchest == 1) {
        if (game.ask("Treasure!", "10 coins")) {
            info.changeScoreBy(10)
            music.baDing.play()
        }
    }
    if (numofchest == 2) {
        if (blockSettings.readNumber("section") == 1) {
            weapontype = randint(1, 4)
        } else if (blockSettings.readNumber("section") > 1) {
            weapontype = randint(1, 6)
        }
        if (weapontype == 1) {
            if (game.ask("Treasure!", "Sword plus 15 coins")) {
                blockSettings.writeNumber("Weapon", 1)
                info.changeScoreBy(15)
                music.baDing.play()
            }
        } else if (weapontype == 2) {
            if (game.ask("Treasure!", "Blaster plus 15 coins")) {
                blockSettings.writeNumber("Weapon", 2)
                info.changeScoreBy(15)
                music.baDing.play()
            }
        } else if (weapontype == 3) {
            if (game.ask("Treasure!", "Launcher plus 15 coins")) {
                blockSettings.writeNumber("Weapon", 3)
                info.changeScoreBy(15)
                music.baDing.play()
            }
        } else if (weapontype == 4) {
            if (game.ask("Treasure!", "5 hp plus 15 coins")) {
                info.changeLifeBy(5)
                info.changeScoreBy(15)
                music.baDing.play()
            }
        } else if (weapontype == 5) {
            if (game.ask("Treasure!", "Kaboomer plus 15 coins")) {
                blockSettings.writeNumber("Weapon", 7)
                info.changeScoreBy(15)
                music.baDing.play()
            }
        } else if (weapontype == 6) {
            if (game.ask("Treasure!", "Splitshot plus 15 coins")) {
                blockSettings.writeNumber("Weapon", 8)
                info.changeScoreBy(15)
                music.baDing.play()
            }
        }
    }
    if (numofchest == 3) {
        if (blockSettings.readNumber("section") == 1) {
            weapontype = randint(1, 3)
        } else if (blockSettings.readNumber("section") == 2) {
            weapontype = randint(1, 5)
        }
        if (weapontype == 1) {
            if (game.ask("Treasure!", "Mega Sword plus 30 coins")) {
                blockSettings.writeNumber("Weapon", 4)
                info.changeScoreBy(30)
                music.magicWand.play()
            }
        } else if (weapontype == 2) {
            if (game.ask("Treasure!", "Mega Blaster plus 30 coins")) {
                blockSettings.writeNumber("Weapon", 5)
                info.changeScoreBy(30)
                music.magicWand.play()
            }
        } else if (weapontype == 3) {
            if (game.ask("Treasure!", "Mega Launcher plus 30 coins")) {
                blockSettings.writeNumber("Weapon", 6)
                info.changeScoreBy(30)
                music.magicWand.play()
            }
        } else if (weapontype == 4) {
            if (game.ask("Treasure!", "Mega Kaboomer plus 30 coins")) {
                blockSettings.writeNumber("Weapon", 9)
                info.changeScoreBy(30)
                music.magicWand.play()
            }
        } else if (weapontype == 5) {
            if (game.ask("Treasure!", "Mega Splitshot plus 30 coins")) {
                blockSettings.writeNumber("Weapon", 10)
                info.changeScoreBy(30)
                music.magicWand.play()
            }
        }
    }
    pause(500)
    if (numofshop > 0 && info.score() >= 20) {
        music.playTone(392, music.beat(BeatFraction.Half))
        if (game.ask("Shop might Appear: " + convertToText(16 * numofshop) + "%", "visit?")) {
            if (Math.percentChance(33 * numofshop)) {
                hp_item = randint(2, 10)
                hp_cost = randint(8, 15)
                weapon_item = randint(1, 5)
                weapon_cost = randint(50, 100)
                upgrade_cost = randint(100, 200)
                if (weapon_item == 1) {
                    weapon_string = "sword"
                } else if (weapon_item == 2) {
                    weapon_string = "blaster"
                } else if (weapon_item == 3) {
                    weapon_string = "launcher"
                } else if (weapon_item == 4) {
                    weapon_string = "kaboomer"
                    weapon_item = 7
                } else if (weapon_item == 5) {
                    weapon_string = "splitshot"
                    weapon_item = 8
                }
                if (blockSettings.readNumber("Weapon") == 1) {
                    upgrade_string = "mega sword"
                } else if (blockSettings.readNumber("Weapon") == 2) {
                    upgrade_string = "mega blaster"
                } else if (blockSettings.readNumber("Weapon") == 3) {
                    upgrade_string = "mega launcher"
                } else if (blockSettings.readNumber("Weapon") == 7) {
                    upgrade_string = "mega kaboomer"
                } else if (blockSettings.readNumber("Weapon") == 8) {
                    upgrade_string = "mega splitshot"
                } else {
                    upgrade_string = "(not available)"
                }
                game.splash("Found Shop!", "" + convertToText(hp_item) + "hp" + " cost: " + convertToText(hp_item * hp_cost) + ", " + ("" + weapon_string + " cost: " + convertToText(weapon_cost)) + ", " + ("upgrade to mega weapon" + " cost: " + convertToText(upgrade_cost)))
                if (game.ask("" + convertToText(hp_item) + "hp", "cost:" + convertToText(hp_item * hp_cost))) {
                    if (info.score() >= hp_item * hp_cost) {
                        info.changeScoreBy(hp_item * hp_cost * -1)
                        info.changeLifeBy(hp_item)
                    } else {
                        game.splash("NOT ENOUGH COINS!", "you can't buy this!")
                    }
                }
                pause(100)
                if (game.ask(weapon_string, "cost: " + convertToText(weapon_cost))) {
                    if (info.score() >= weapon_cost) {
                        info.changeScoreBy(weapon_cost * -1)
                        blockSettings.writeNumber("Weapon", weapon_item)
                    } else {
                        game.splash("NOT ENOUGH COINS!", "you can't buy this!")
                    }
                }
                pause(300)
                if (game.ask("upgrade to mega weapon", "cost: " + convertToText(upgrade_cost))) {
                    if (info.score() >= upgrade_cost) {
                        info.changeScoreBy(upgrade_cost * -1)
                        if (blockSettings.readNumber("Weapon") == 1) {
                            blockSettings.writeNumber("Weapon", 4)
                        } else if (blockSettings.readNumber("Weapon") == 2) {
                            blockSettings.writeNumber("Weapon", 5)
                        } else if (blockSettings.readNumber("Weapon") == 3) {
                            blockSettings.writeNumber("Weapon", 6)
                        } else if (blockSettings.readNumber("Weapon") == 7) {
                            blockSettings.writeNumber("Weapon", 9)
                        } else if (blockSettings.readNumber("Weapon") == 8) {
                            blockSettings.writeNumber("Weapon", 10)
                        } else {
                            info.changeScoreBy(upgrade_cost)
                            game.splash("YOU ALREADY HAVE A MEGA WEAPON!", "you can't upgrade it!")
                        }
                    } else {
                        game.splash("NOT ENOUGH COINS!", "you can't buy this!")
                    }
                }
            }
        }
    }
    pause(500)
    if (blockSettings.readNumber("boss next") == 1) {
        if (blockSettings.readNumber("section") == 3) {
            color.startFade(color.originalPalette, color.White, 2000)
            for (let index = 0; index < 4; index++) {
                music.zapped.playUntilDone()
                pause(100)
            }
            pause(500)
            music.bigCrash.playUntilDone()
            pause(2000)
            blockSettings.clear()
            pause(100)
            game.reset()
        } else {
            blockSettings.writeNumber("section", blockSettings.readNumber("section") + 1)
            blockSettings.writeNumber("Round", 0)
            blockSettings.writeNumber("boss next", 0)
        }
    }
    if (numofvs > 0 && info.score() >= 100) {
        music.playTone(392, music.beat(BeatFraction.Half))
        if (game.ask("Boss might Appear: " + convertToText(33 * numofvs) + "%", "fight? cost: 100")) {
            info.changeScoreBy(-100)
            if (Math.percentChance(33 * numofvs)) {
                blockSettings.writeNumber("boss next", 1)
            }
        }
    } else {
        music.playTone(392, music.beat(BeatFraction.Half))
        game.splash("Next Round!")
    }
    blockSettings.writeNumber("Round", blockSettings.readNumber("Round") + 1)
    blockSettings.writeNumber("hp", info.life())
    blockSettings.writeNumber("coins", info.score())
    pause(100)
    game.reset()
}
