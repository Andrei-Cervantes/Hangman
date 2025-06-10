import HangmanDrawing from "./HangmanDrawing";
import WordDisplay from "./WordDisplay";
import Keyboard from "./Keyboard";
import GameStatus from "./GameStatus";
import { useHangmanGame } from "../hooks/useHangmanGame";

const HangmanGame = () => {
  const { gameState, displayWord, isLoading, startNewGame, guessLetter } =
    useHangmanGame();

  const isGameOver = gameState.gameStatus !== "playing";

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        🎪 Hangman Game
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Left side - Hangman drawing */}
        <div className="flex justify-center items-center">
          <HangmanDrawing wrongGuessCount={gameState.wrongGuesses.length} />
        </div>

        {/* Right side - Game status */}
        <div className="flex flex-col justify-center">
          <GameStatus
            gameState={gameState}
            onNewGame={startNewGame}
            isLoading={isLoading}
          />
        </div>
      </div>

      {/* Word display */}
      <div className="mb-8">
        <WordDisplay displayWord={displayWord} isGameOver={isGameOver} />
      </div>

      {/* Keyboard */}
      <div className="mb-6">
        <Keyboard
          guessedLetters={gameState.guessedLetters}
          wrongGuesses={gameState.wrongGuesses}
          onGuess={guessLetter}
          disabled={isGameOver || isLoading}
        />
      </div>

      {/* Instructions */}
      <div className="text-center text-sm text-gray-600 mt-8">
        <p>Click the letters above or use your keyboard to guess!</p>
        <p className="mt-1">
          You have {gameState.maxWrongGuesses} wrong guesses before the game
          ends.
        </p>
      </div>
    </div>
  );
};

export default HangmanGame;
