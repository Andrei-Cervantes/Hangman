import type { GameState } from "../types/game";

interface GameStatusProps {
  gameState: GameState;
  onNewGame: () => void;
  isLoading: boolean;
}

const GameStatus = ({ gameState, onNewGame, isLoading }: GameStatusProps) => {
  const { gameStatus, wrongGuesses, maxWrongGuesses } = gameState;

  const getStatusMessage = () => {
    switch (gameStatus) {
      case "won":
        return {
          title: "🎉 Congratulations!",
          message: "You guessed the word correctly!",
          className: "text-green-600",
        };
      case "lost":
        return {
          title: "💀 Game Over",
          message: `The word was: ${gameState.word.join("")}`,
          className: "text-red-600",
        };
      default:
        return {
          title: "🎯 Keep Guessing!",
          message: `Wrong guesses: ${wrongGuesses.length}/${maxWrongGuesses}`,
          className: "text-blue-600",
        };
    }
  };

  const status = getStatusMessage();
  const isGameOver = gameStatus !== "playing";

  return (
    <div className="text-center space-y-4">
      <div className={`text-2xl font-bold ${status.className}`}>
        {status.title}
      </div>

      <div className="text-lg text-gray-700">{status.message}</div>

      {wrongGuesses.length > 0 && (
        <div className="text-sm text-gray-600">
          <span className="font-semibold">Wrong letters: </span>
          <span className="text-red-500 font-mono">
            {wrongGuesses.join(", ")}
          </span>
        </div>
      )}

      <div className="pt-4">
        <button
          onClick={onNewGame}
          disabled={isLoading}
          className={`
            px-6 py-3 rounded-lg font-semibold text-white transition-all duration-200
            ${
              isLoading
                ? "bg-gray-400 cursor-not-allowed"
                : isGameOver
                ? "bg-green-500 hover:bg-green-600 hover:transform hover:scale-105"
                : "bg-blue-500 hover:bg-blue-600 hover:transform hover:scale-105"
            }
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
          `}
        >
          {isLoading ? "Loading..." : isGameOver ? "Play Again" : "New Game"}
        </button>
      </div>
    </div>
  );
};

export default GameStatus;
