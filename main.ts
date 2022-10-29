function blinken () {
    for (let index = 0; index < 5; index++) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # . . . #
            . # # # .
            . . . . .
            `)
        music.playMelody("E B C5 A B G A F ", tempo)
        tempo += 50
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        music.playMelody("E B C5 A B G A F ", tempo)
        tempo += 50
    }
}
let tempo = 0
tempo = 280
music.setVolume(0)
basic.forever(function () {
    if (input.soundLevel() > 75) {
        blinken()
        basic.showString("Happy Halloween")
        tempo = 280
    }
})
