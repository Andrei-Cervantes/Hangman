interface HangmanDrawingProps {
  wrongGuessCount: number;
}

const HangmanDrawing = ({ wrongGuessCount }: HangmanDrawingProps) => {
  const HEAD = (
    <div
      key="head"
      className="w-12 h-12 rounded-full border-4 border-black absolute top-12 -right-6"
    />
  );

  const BODY = (
    <div key="body" className="w-2 h-20 bg-black absolute top-24 right-0" />
  );

  const RIGHT_ARM = (
    <div
      key="rightarm"
      className="w-16 h-2 bg-black absolute top-32 -right-14 rotate-[-30deg] origin-bottom-left"
    />
  );

  const LEFT_ARM = (
    <div
      key="leftarm"
      className="w-16 h-2 bg-black absolute top-32 right-2 rotate-[30deg] origin-bottom-right"
    />
  );

  const RIGHT_LEG = (
    <div
      key="rightleg"
      className="w-16 h-2 bg-black absolute top-40 -right-12 rotate-[60deg] origin-bottom-left"
    />
  );

  const LEFT_LEG = (
    <div
      key="leftleg"
      className="w-16 h-2 bg-black absolute top-40 right-0 rotate-[-60deg] origin-bottom-right"
    />
  );

  const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

  return (
    <div className="relative">
      {/* Gallows */}
      <div className="h-64 w-56 flex justify-end">
        {/* Base */}
        <div className="h-2 w-20 bg-black" />
        {/* Pole */}
        <div className="h-64 w-2 bg-black" />
        {/* Top beam */}
        <div className="h-2 w-32 bg-black absolute top-0 right-0" />
        {/* Noose */}
        <div className="h-12 w-2 bg-black absolute top-0 right-0" />

        {/* Hangman body parts */}
        {BODY_PARTS.slice(0, wrongGuessCount)}
      </div>
    </div>
  );
};

export default HangmanDrawing;
