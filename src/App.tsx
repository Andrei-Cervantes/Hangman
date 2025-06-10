import { useState } from "react";
import getRandomWord from "./services/getRandomWord";

function App() {
  const [word, setWord] = useState<string[]>([]);
  const getWord = async () => {
    const response = await getRandomWord({
      hasDictionaryDef: true,
      maxLength: 8,
      minLength: 5,
    });
    setWord(response);
  };

  return (
    <>
      <div className="flex flex-row gap-2">
        {word.map((letter, index) => (
          <div className="text-center text-4xl font-bold" key={index}>
            {letter}
          </div>
        ))}
      </div>
      <button
        className="bg-blue-500 text-white p-2 rounded-md"
        onClick={getWord}
      >
        Get Word
      </button>
    </>
  );
}

export default App;
