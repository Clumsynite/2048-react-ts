import { useEffect, useState } from "react";
import { Tiles } from "../../@types/Tiles";
import Tile from "./Tile";
import { initialiseTiles, isBoardEmpty } from "../../helper/tiles";

const Board = () => {
  const [tiles, setTiles] = useState<Tiles>([]);

  useEffect(() => {
    if (isBoardEmpty(tiles)) setTiles(initialiseTiles());
  }, []);

  return (
    <div className="flex flex-row justify-center items-center mt-12">
      {/* <div className="border-2 border-gray-400 flex flex-row">
        {Array.from({ length: 4 }, (_, i) => i + 1).map((x) => (
          <div key={`row-${x}`}>
            {Array.from({ length: 4 }, (_, j) => j + 1).map((y) => (
              <Tile x={x} y={y} value={} key={`pos-${x},${y}`} />
            ))}
          </div>
        ))}
      </div> */}
      {/* <div className="border-2 border-gray-400 flex flex-row">
        {tiles.map((tile) => (
          <Tile {...tile} key={`pos-${JSON.stringify(tile)}`} />
        ))}
      </div> */}

      <div className="border-2 border-gray-400 flex flex-row">
        {Array.from({ length: 4 }, (_, i) => i).map((x) => (
          <div key={x}>
            {tiles.slice(x * 4, x * 4 + 4).map((tile) => (
              <Tile {...tile} key={tile.id} />
            ))}
          </div>
        ))}
        {/* {tiles.map((tile) => (
          <Tile {...tile} key={`pos-${JSON.stringify(tile)}`} />
        ))} */}
      </div>
    </div>
  );
};

export default Board;
