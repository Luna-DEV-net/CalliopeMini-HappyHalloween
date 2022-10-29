def blinken():
    global tempo
    for index in range(5):
        basic.show_leds("""
            . . . . .
                        . . . . .
                        # . . . #
                        . # # # .
                        . . . . .
        """)
        music.play_melody("E B C5 A B G A F ", tempo)
        tempo += 50
        basic.show_leds("""
            . . . . .
                        . # # # .
                        . # # # .
                        . # # # .
                        . . . . .
        """)
        music.play_melody("E B C5 A B G A F ", tempo)
        tempo += 50
tempo = 0
tempo = 280
music.set_volume(0)

def on_forever():
    global tempo
    if input.sound_level() > 75:
        blinken()
        basic.show_string("Happy Halloween")
        tempo = 280
basic.forever(on_forever)
