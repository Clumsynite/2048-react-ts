import Board from "./components/Board";
import ThemeSwitcher from "./components/ThemeSwitcher";
import { useAppSelector } from "./hooks";
import { isDarkMode } from "./reducers/darkMode";

function App() {
  const darkMode = useAppSelector(isDarkMode);

  return (
    <main
      className={`${darkMode ? "dark" : ""} max-w-screen min-h-screen text-foreground bg-background transition-all `}
    >
      <div className="flex flex-row items-center p-12 justify-end">
        <ThemeSwitcher />
      </div>
      <div className="p-4 text-center font-bold text-8xl">2048</div>
      <Board />
    </main>
  );
}

export default App;
