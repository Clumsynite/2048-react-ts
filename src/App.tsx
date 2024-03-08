import Board from "./components/Board";
import HowToPlay from "./components/Board/HowToPlay";
import NewGame from "./components/Board/NewGame";
import Scores from "./components/Board/Scores";
import ThemeSwitcher from "./components/ThemeSwitcher";
import { useAppSelector } from "./hooks";
import { isDarkMode } from "./reducers/darkMode";

function App() {
  const darkMode = useAppSelector(isDarkMode);

  return (
    <main
      className={`${darkMode ? "dark" : ""} max-w-screen min-h-screen text-foreground bg-background transition-all `}
    >
      <div className="flex flex-row items-center p-4">
        <div className="flex-[1] flex flex-row justify-center">
          <div className="p-4 text-center font-bold text-5xl">2048</div>
          <Scores />
        </div>
        <ThemeSwitcher />
        <div className="w-24" />
      </div>
      <div className="flex flex-row justify-center">
        <NewGame />
      </div>
      <Board />
      <div className="pt-2">
        <HowToPlay />
      </div>
    </main>
  );
}

export default App;
