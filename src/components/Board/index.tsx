import { useEffect, useRef, useState } from "react";
import lo from "lodash";
import { Tile as TileType, Tiles } from "../../@types/Tiles";
import { addRandomTile, initialiseTiles, orderTiles } from "../../helper/tiles";
import Tile from "./Tile";

const Board = () => {
  const [tiles, _setTiles] = useState<Tiles>([]);
  const tilesRef = useRef(tiles);

  const setTiles = (data: Tiles) => {
    tilesRef.current = data;
    _setTiles(data);
  };

  const moveTiles = (dir: "up" | "down" | "left" | "right", tiles: Tiles) => {
    if (dir === "up") {
      const clonedTiles = lo.cloneDeep(tiles);
      const ordered = lo.orderBy(clonedTiles, ["y", "x"], ["desc", "asc"]);

      const grouped = lo.groupBy(lo.cloneDeep(ordered), "x");
      let cells: Tiles = [];
      for (let x = 1; x <= 4; x++) {
        let next, cell, ignore;
        const col = grouped[x] as Tiles;
        for (let i = 0; i < 4; i++) {
          cell = col[i] as TileType;
          next = lo.cloneDeep(col[i + 1]);

          if (!next) continue;
          if (ignore) {
            ignore = false;
            continue;
          }

          if (next.value && cell.value === next.value) {
            col[i + 1].value = cell.value + cell.value;
            cell.value = null;
            ignore = true;
          } else if (next.value === null && cell.value) {
            col[i + 1].value = cell.value;
            cell.value = null;
            ignore = true;
          }
        }

        cells = [...cells, ...col];
      }
      cells = orderTiles(addRandomTile(cells));
      setTiles([...lo.cloneDeep(cells)]);
    }
    if (dir === "down") {
      const clonedTiles = lo.cloneDeep(tiles);
      const ordered = lo.orderBy(clonedTiles, ["y", "x"], ["asc", "asc"]);

      const grouped = lo.groupBy(lo.cloneDeep(ordered), "x");
      let cells: Tiles = [];
      for (let x = 1; x <= 4; x++) {
        let next, cell, ignore;
        const col = grouped[x] as Tiles;
        for (let i = 0; i < 4; i++) {
          cell = col[i] as TileType;
          next = lo.cloneDeep(col[i + 1]);

          if (!next) continue;
          if (ignore) {
            ignore = false;
            continue;
          }

          if (next.value && cell.value === next.value) {
            col[i + 1].value = cell.value + cell.value;
            cell.value = null;
            ignore = true;
          } else if (next.value === null && cell.value) {
            col[i + 1].value = cell.value;
            cell.value = null;
            ignore = true;
          }
        }

        cells = [...cells, ...col];
      }
      cells = orderTiles(addRandomTile(cells));
      setTiles([...lo.cloneDeep(cells)]);
    }
    if (dir === "left") {
      const clonedTiles = lo.cloneDeep(tiles);
      const ordered = lo.orderBy(clonedTiles, ["y", "x"], ["asc", "desc"]);

      const grouped = lo.groupBy(lo.cloneDeep(ordered), "y");
      let cells: Tiles = [];
      for (let x = 1; x <= 4; x++) {
        let next, cell, ignore;
        const col = grouped[x] as Tiles;
        for (let i = 0; i < 4; i++) {
          cell = col[i] as TileType;
          next = lo.cloneDeep(col[i + 1]);

          if (!next) continue;
          if (ignore) {
            ignore = false;
            continue;
          }

          if (next.value && cell.value === next.value) {
            col[i + 1].value = cell.value + cell.value;
            cell.value = null;
            ignore = true;
          } else if (next.value === null && cell.value) {
            col[i + 1].value = cell.value;
            cell.value = null;
            ignore = true;
          }
        }

        cells = [...cells, ...col];
      }
      cells = orderTiles(addRandomTile(cells));
      setTiles([...lo.cloneDeep(cells)]);
    }
    if (dir === "right") {
      const clonedTiles = lo.cloneDeep(tiles);
      const ordered = lo.orderBy(clonedTiles, ["y", "x"], ["asc", "asc"]);

      const grouped = lo.groupBy(lo.cloneDeep(ordered), "y");
      let cells: Tiles = [];
      for (let x = 1; x <= 4; x++) {
        let next, cell, ignore;
        const col = grouped[x] as Tiles;
        for (let i = 0; i < 4; i++) {
          cell = col[i] as TileType;
          next = lo.cloneDeep(col[i + 1]);

          if (!next) continue;
          if (ignore) {
            ignore = false;
            continue;
          }

          if (next.value && cell.value === next.value) {
            col[i + 1].value = cell.value + cell.value;
            cell.value = null;
            ignore = true;
          } else if (next.value === null && cell.value) {
            col[i + 1].value = cell.value;
            cell.value = null;
            ignore = true;
          }
        }

        cells = [...cells, ...col];
      }
      cells = orderTiles(addRandomTile(cells));
      setTiles([...lo.cloneDeep(cells)]);
    }
  };

  const handleKeyDown = ({ key }: KeyboardEvent) => {
    if (["w", "arrowup"].includes(key.toLowerCase())) moveTiles("up", tilesRef.current);
    if (["s", "arrowdown"].includes(key.toLowerCase())) moveTiles("down", tilesRef.current);
    if (["a", "arrowleft"].includes(key.toLowerCase())) moveTiles("left", tilesRef.current);
    if (["d", "arrowright"].includes(key.toLowerCase())) moveTiles("right", tilesRef.current);
  };

  useEffect(() => {
    if (tiles.length === 0) setTiles([...initialiseTiles()]);

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="flex flex-row justify-center items-center mt-12">
      <div className="border-2 border-gray-400 flex flex-row">
        {Array.from({ length: 4 }, (_, i) => i).map((x) => (
          <div key={x} className="flex flex-col">
            {tiles.slice(x * 4, x * 4 + 4).map((tile) => (
              <Tile {...tile} key={tile.id} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Board;
