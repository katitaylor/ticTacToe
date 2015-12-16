title: tice tac toe game
time to mvp: 20 hours

goal:

Build a tic-tac-toe game board with two sets of game pieces in different designs, two player interaction.

mvp requirements:

* User will open page to see a play board - grid divided into nine sections.
User will have "player one" and "player two" pieces available.
* User will be able to select any block on the game board.
* each user will make three selections
* If three adjoining grid sections have been selected an alert "winner!" will appear.

actions:
create wireframe on gliffy
design game board with 9 divided sections
design game pieces

- board with 9 quadrants (3 x 3 grid)
- buttons:
    play game
    player 1 : on & off position
    player two : on & off position
    * grid selection : unselected, p1, p2

general logic:

variable x = 0
variable y =0
variable grid = clickableGrid(3,3 (column, row))

y clicks gridSquare; gridSquare changes
x clicks gridSquare; gridSquare changes
