import Board from "./components/Board";

function App() {
  return (
    <div className="max-w-screen min-h-screen text-foreground bg-foreground transition-all p-12">
      <div className="p-4 text-center font-bold text-2xl">2048</div>
      <Board />
    </div>
  );
}

export default App;
