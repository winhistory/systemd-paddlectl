systemd-paddlectl
=================

The Breakout minigame from April's Fools' Day 2015.

### Overview

- `paddlectl.html`: front page look-alike used as container for the game
- `aprilfools-2015/media`: game resources (sounds, sprites, background)
- `aprilfools-2015/scripts/crafty-min.js`: [Crafty](https://github.com/craftyjs/Crafty) JavaScript game library, minimized
- `aprilfools-2015/scripts/components`: gameplay components
- `aprilfools-2015/scripts/scenes`: gameplay scenes

### Known bugs

These are mostly 1:1 inherited from [the original implementation](http://www.jsbreakouts.org/craftyjs/index.html).

- Clearing a level after the win screen may jump back to the win screen.
- Collecting a power-up during the countdown after losing a ball causes a second ball to be spawned immediately and locks the ball to be launched in place. This makes it impossible to finish the level normally if all other balls are lost.
- Occasionally the HUD displays a later level as level 1.
- There is no actual concept of levels being won - the user may skip right to the win screen if they want.

### Acknowledgement

- Idea and implementation by [@DosAmp](https://github.com/DosAmp)
- Original Javascript Breakout implementation examples and assets by [@city41](https://github.com/city41/breakouts) and contributors
- Sound effects derived from the freedesktop.org [Sound Theme Specification](http://www.freedesktop.org/wiki/Specifications/sound-theme-spec/), as used in GNOME 3
- Photograph of Lennart Poettering [by Reddy Y. Ramakrishna](https://www.flickr.com/photos/69042390@N00/2106127348) (ramkrsna), licensed under CC BY-SA 2.0
- "Poettering 1984" artwork by a based anon on /g/
