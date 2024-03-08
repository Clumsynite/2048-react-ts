import { useAppSelector } from "src/hooks";

const Scores = () => {
  const { current, best } = useAppSelector((state) => state.score);

  return (
    <div className="p-4 flex flex-row justify-center items-center text-white">
      <div className="mr-2 p-2 bg-foreground/40 rounded-md min-w-24 text-center">
        <div className="text-sm pb-2">Current Score</div>
        <div className="text-center text-xl">{current}</div>
      </div>
      <div className="ml-2 p-2 bg-foreground/40 rounded-md min-w-24 text-center">
        <div className="text-sm pb-2">Best Score</div>
        <div className="text-center text-xl">{best}</div>
      </div>
    </div>
  );
};

export default Scores;
