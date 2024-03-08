import Board from "./components/Board";
import ThemeSwitcher from "./components/ThemeSwitcher";
import { useAppSelector } from "./hooks";
import { isDarkMode } from "./reducers/darkMode";

function App() {
  const darkMode = useAppSelector(isDarkMode);
  const { current, best } = useAppSelector((state) => state.score);

  return (
    <main
      className={`${darkMode ? "dark" : ""} max-w-screen min-h-screen text-foreground bg-background transition-all `}
    >
      <div className="flex flex-row items-center p-8">
        <div className="flex-[1]">
          <div className="p-4 text-center font-bold text-5xl">2048</div>
        </div>
        <ThemeSwitcher />

        <div className="w-24" />
      </div>

      <div className="p-4 flex flex-row justify-center items-center">
        <div className="mr-2 p-2 bg-foreground/40 rounded-md min-w-24 text-center">
          <div className="text-sm pb-2">Current Score</div>
          <div className="text-center text-xl">{current}</div>
        </div>
        <div className="ml-2 p-2 bg-foreground/40 rounded-md min-w-24 text-center">
          <div className="text-sm pb-2">Best Score</div>
          <div className="text-center text-xl">{best}</div>
        </div>
      </div>

      <Board />
      <div></div>
    </main>
  );
}

export default App;
