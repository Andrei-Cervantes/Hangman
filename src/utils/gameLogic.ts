import type { GameState } from "../types/game";

export const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export const MAX_WRONG_GUESSES = 6;

export const createInitialGameState = (word: string[] = []): GameState => ({
  word,
  guessedLetters: new Set(),
  wrongGuesses: [],
  gameStatus: word.length > 0 ? "playing" : "playing",
  maxWrongGuesses: MAX_WRONG_GUESSES,
});

export const isGameWon = (
  word: string[],
  guessedLetters: Set<string>
): boolean => {
  return word.every((letter) => guessedLetters.has(letter.toUpperCase()));
};

export const isGameLost = (wrongGuesses: string[]): boolean => {
  return wrongGuesses.length >= MAX_WRONG_GUESSES;
};

export const makeGuess = (
  currentState: GameState,
  letter: string
): GameState => {
  const upperLetter = letter.toUpperCase();

  // Don't allow duplicate guesses
  if (currentState.guessedLetters.has(upperLetter)) {
    return currentState;
  }

  // Don't allow guesses if game is over
  if (currentState.gameStatus !== "playing") {
    return currentState;
  }

  const newGuessedLetters = new Set(currentState.guessedLetters);
  newGuessedLetters.add(upperLetter);

  const isCorrectGuess = currentState.word.some(
    (wordLetter) => wordLetter.toUpperCase() === upperLetter
  );

  const newWrongGuesses = isCorrectGuess
    ? currentState.wrongGuesses
    : [...currentState.wrongGuesses, upperLetter];

  const gameWon = isGameWon(currentState.word, newGuessedLetters);
  const gameLost = isGameLost(newWrongGuesses);

  const gameStatus = gameWon ? "won" : gameLost ? "lost" : "playing";

  return {
    ...currentState,
    guessedLetters: newGuessedLetters,
    wrongGuesses: newWrongGuesses,
    gameStatus: gameStatus as "playing" | "won" | "lost",
  };
};

export const getDisplayWord = (
  word: string[],
  guessedLetters: Set<string>
): string[] => {
  return word.map((letter) =>
    guessedLetters.has(letter.toUpperCase()) ? letter : "_"
  );
};
