import { useState } from "react";
import getRandomWord from "./services/getRandomWord";

function App() {
  const [word, setWord] = useState("");
  const getWord = async () => {
    const response = await getRandomWord({
      hasDictionaryDef: true,
      maxLength: 8,
      minLength: 5,
    });
    setWord(response.word);
  };

  return (
    <>
      <h1 className="text-3xl font-bold underline text-red-500">{word}</h1>
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
