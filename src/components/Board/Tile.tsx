import type { Tile } from "../../@types/Tiles";

const Tile = ({ x, y, value }: Tile) => {
  return (
    <div
      title={`Position: ${x}, ${y} | Value: ${value}`}
      className="h-24 w-24 border-gray-300 border flex flex-col items-center justify-center"
    >
      <div className="text-red-500">{value}</div>
      <div className="text-gray-300">
        {x}, {y}
      </div>
    </div>
  );
};

export default Tile;
