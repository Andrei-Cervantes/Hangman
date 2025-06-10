export interface GameState {
  word: string[];
  guessedLetters: Set<string>;
  wrongGuesses: string[];
  gameStatus: "playing" | "won" | "lost";
  maxWrongGuesses: number;
}

export interface GameStats {
  gamesPlayed: number;
  gamesWon: number;
  currentStreak: number;
  bestStreak: number;
}

export type GameAction =
  | { type: "NEW_GAME"; word: string[] }
  | { type: "GUESS_LETTER"; letter: string }
  | { type: "RESET_GAME" };
