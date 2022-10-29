function blinken () {
    for (let index = 0; index < 5; index++) {
        basic.setLedColor(0xff0000)
        basic.showLeds(`
            . . . . .
            . . . . .
            # . . . #
            . # # # .
            . . . . .
            `)
        basic.setLedColor(0x00ff00)
        music.playMelody("E B C5 A B G A F ", tempo)
        basic.setLedColor(0xff0000)
        tempo += 50
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        basic.setLedColor(0x00ff00)
        music.playMelody("E B C5 A B G A F ", tempo)
        tempo += 50
    }
}
let tempo = 0
tempo = 280
music.setVolume(0)
basic.setLedColor(0x00ff00)
basic.forever(function () {
    if (input.acceleration(Dimension.X) > 25) {
        basic.showString("HALT! Pfoten weg!")
    } else if (input.soundLevel() > 75) {
        blinken()
        basic.setLedColor(0xff0000)
        basic.showString("Happy Halloween")
        basic.setLedColor(0x00ff00)
        tempo = 280
    }
})
