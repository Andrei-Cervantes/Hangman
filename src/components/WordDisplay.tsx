interface WordDisplayProps {
  displayWord: string[];
  isGameOver: boolean;
}

const WordDisplay = ({ displayWord, isGameOver }: WordDisplayProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-8">
      {displayWord.map((letter, index) => (
        <div
          key={index}
          className={`
            w-12 h-16 border-b-4 border-black flex items-center justify-center
            text-4xl font-bold uppercase
            ${isGameOver && letter === "_" ? "text-red-500" : "text-black"}
          `}
        >
          {letter}
        </div>
      ))}
    </div>
  );
};

export default WordDisplay;
