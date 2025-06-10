import { useState, useCallback, useEffect } from "react";
import type { GameState } from "../types/game";
import {
  createInitialGameState,
  makeGuess,
  getDisplayWord,
} from "../utils/gameLogic";
import getRandomWord from "../services/getRandomWord";

export const useHangmanGame = () => {
  const [gameState, setGameState] = useState<GameState>(
    createInitialGameState()
  );
  const [isLoading, setIsLoading] = useState(false);

  const startNewGame = useCallback(async () => {
    setIsLoading(true);
    try {
      const word = await getRandomWord({
        hasDictionaryDef: true,
        maxLength: 8,
        minLength: 4,
      });
      setGameState(createInitialGameState(word));
    } catch (error) {
      console.error("Failed to fetch new word:", error);
      // Fallback to a default word if API fails
      setGameState(
        createInitialGameState(["F", "A", "L", "L", "B", "A", "C", "K"])
      );
    } finally {
      setIsLoading(false);
    }
  }, []);

  const guessLetter = useCallback((letter: string) => {
    setGameState((currentState) => makeGuess(currentState, letter));
  }, []);

  const resetGame = useCallback(() => {
    setGameState(createInitialGameState());
  }, []);

  // Auto-start the first game
  useEffect(() => {
    startNewGame();
  }, [startNewGame]);

  // Add keyboard event listener for physical keyboard input
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      // Ignore modifier and special keys
      if (
        event.ctrlKey ||
        event.altKey ||
        event.metaKey ||
        event.shiftKey ||
        event.code === "Backspace"
      )
        return;

      const letter = event.key.toUpperCase();

      // Check if it's exactly one character and is a letter
      if (letter.length === 1 && letter >= "A" && letter <= "Z") {
        guessLetter(letter);
      }
    };

    if (gameState.gameStatus === "playing") {
      window.addEventListener("keydown", handleKeyPress);
      return () => window.removeEventListener("keydown", handleKeyPress);
    }
  }, [guessLetter, gameState.gameStatus]);

  const displayWord = getDisplayWord(gameState.word, gameState.guessedLetters);

  return {
    gameState,
    displayWord,
    isLoading,
    startNewGame,
    guessLetter,
    resetGame,
  };
};
