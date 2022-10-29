def blinken():
    global tempo
    for index in range(5):
        basic.set_led_color(0xff0000)
        basic.show_leds("""
            . . . . .
                        . . . . .
                        # . . . #
                        . # # # .
                        . . . . .
        """)
        basic.set_led_color(0x00ff00)
        music.play_melody("E B C5 A B G A F ", tempo)
        basic.set_led_color(0xff0000)
        tempo += 50
        basic.show_leds("""
            . . . . .
                        . # # # .
                        . # # # .
                        . # # # .
                        . . . . .
        """)
        basic.set_led_color(0x00ff00)
        music.play_melody("E B C5 A B G A F ", tempo)
        tempo += 50
tempo = 0
tempo = 280
music.set_volume(0)
basic.set_led_color(0x00ff00)

def on_forever():
    global tempo
    if input.sound_level() > 75:
        blinken()
        basic.set_led_color(0xff0000)
        basic.show_string("Happy Halloween")
        basic.set_led_color(0x00ff00)
        tempo = 280
basic.forever(on_forever)
