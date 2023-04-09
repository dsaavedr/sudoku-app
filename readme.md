# Sudoku app without adds

The name summs it up well. The point of this project is to create a completely open source and add free sudoku app for the web, IOS and Android using React Native.

## Contribute

All contributions are welcome! Feel free to create a Pull Request or submit an issue.

## Run the project

1. `npm install`
1. `npm start`

This project uses Expo for simplicity. For viewing the app in mobile phones, you can use the Expo Go app. Check out their [docs](https://docs.expo.dev/) for more information.

## TODOs

-   Finish implementing the game's data logic
    -   Redux ✅
    -   Decide data structure: one-dimensional array of Points (see [Point class](src/utils/index.ts)) ✅
    -   Session or more permanent user-side storage?
-   Source games

    -   Can they be randomly generated? ✅ Implemented a recursive algorithm for generating valid boards.
    -   Difficulty categorizations? ⚠ For now, I think we'll have the difficulty category be the number of values removed, going back from a solvable board.
    -   Research algorithm for determining if a board state has a unique solution

        The minimun required number of clues for a board to have a unique solution is 17, but this is not a guarantee. See [this SO answer](https://stackoverflow.com/a/7280517/13530472) for a potential algorithm that can be implemented to guarantee uniqueness.

    -   Research algorithm for generating solvable boards with various difficulty levels: ✅

-   Implement TypeScript

## Mid-term pipeline

-   User authentication
-   Completion time
-   Fastest time per difficulty
