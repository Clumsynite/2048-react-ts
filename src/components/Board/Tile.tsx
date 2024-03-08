import type { Tile } from "../../@types/Tiles";

const Tile = ({ x, y, value }: Tile) => {
  return (
    <div
      title={`Position: ${x}, ${y}`}
      className="h-24 w-24 border-gray-300 border flex flex-row items-center justify-center overflow-hidden"
    >
      {value}
    </div>
  );
};

export default Tile;
