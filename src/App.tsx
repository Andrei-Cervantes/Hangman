import { useEffect } from "react";
import HangmanGame from "./components/HangmanGame";
import { scan } from "react-scan";

function App() {
  useEffect(() => {
    scan();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
      <HangmanGame />
    </div>
  );
}

export default App;
