# GDSC Snake

![Code Security Status](https://github.com/gdscports/react-snake/actions/workflows/code-security.yml/badge.svg)

## Project Mission Statement

The purpose of this project is for the GDSC society to develop
skills in collaborative open source style systems development.

This project has a primary focus on React & the Web Stack.

## How to get involved?

All contributions are valued and helpful!

If there's a bug or a feature you'd like to see add an issue.

If there's an issue you'd like to fix, assign yourself to the issue, clone the repo
and make a new branch, when the code is ready open a pull request.

If any of that sounds daunting or confusing, jump into the GDSC discord and we'll
be happy to help you through the process, the first time is the hardest then it's
(mostly) smooth sailing from there.

## Specification

1. Line (snake) displayed on grid that moves in a direction that can be controlled by a
user with the wasd keys
2. Food items randomly appear on the map, there will always be one food item on the map
at any time
3. Upon colliding with a food item the line will get longer and the food item will
be removed
4. The line colliding with food increases a score by +1
5. If line moves off the map it will wrap around to the other side
6. If line collides with self the game ends
7. Selectable difficulty mode (increased difficulty could include removing wrapping &
increasing snake speed)
8. A splash screen introducing the user to the game
9. A highscore bored (with scores stored in a database?)
10. User can submit score and name upon dying
11. online multiplayer mode
12. User can restart upon dying

## Roadmap

### V0

- Create github repo
- Render a React page / component
- Add JavaScript linting
- Add test framework (jest?)

### V1

- Snake can move on board (1)
- Food appears on board (2)
- Snake can eat food (3)
- Score kept track of and displayed (4)

### V2

- Snake gets longer upon eating food (3)
- Snake dies if collides with self (6)
- Snake can wrap around board (4)
- Game over message displayed upon game over condition
- User can restart game upon dying (12)

### V3

- Save score in database (10)
- Display highscores from database (9)
- Difficulty selection (7)

## Credits

- Aydin Orhan 