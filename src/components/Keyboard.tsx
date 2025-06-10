import { ALPHABET } from "../utils/gameLogic";

interface KeyboardProps {
  guessedLetters: Set<string>;
  wrongGuesses: string[];
  onGuess: (letter: string) => void;
  disabled: boolean;
}

const Keyboard = ({
  guessedLetters,
  wrongGuesses,
  onGuess,
  disabled,
}: KeyboardProps) => {
  const getButtonClass = (letter: string) => {
    const baseClass = `
      w-12 h-12 m-1 rounded-lg font-bold text-lg transition-all duration-200
      border-2 focus:outline-none focus:ring-2 focus:ring-blue-500
    `;

    if (guessedLetters.has(letter)) {
      if (wrongGuesses.includes(letter)) {
        return `${baseClass} bg-red-500 text-white border-red-600 cursor-not-allowed`;
      } else {
        return `${baseClass} bg-green-500 text-white border-green-600 cursor-not-allowed`;
      }
    }

    if (disabled) {
      return `${baseClass} bg-gray-300 text-gray-500 border-gray-400 cursor-not-allowed`;
    }

    return `${baseClass} bg-blue-500 text-white border-blue-600 hover:bg-blue-600 hover:transform hover:scale-105 cursor-pointer`;
  };

  return (
    <div className="flex flex-wrap justify-center max-w-2xl mx-auto gap-1">
      {ALPHABET.map((letter) => (
        <button
          key={letter}
          className={getButtonClass(letter)}
          onClick={() => onGuess(letter)}
          disabled={disabled || guessedLetters.has(letter)}
          aria-label={`Guess letter ${letter}`}
        >
          {letter}
        </button>
      ))}
    </div>
  );
};

export default Keyboard;
