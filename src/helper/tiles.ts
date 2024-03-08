import lo from "lodash";
import { Tiles } from "../@types/Tiles";

export const orderTiles = (tiles: Tiles) => lo.orderBy(tiles, ["x", "y"], ["asc", "asc"]);

export const initialiseTiles = () => {
  const xIndex = lo.random(1, 4);
  const yIndex = lo.random(1, 4);
  // const randomValue = lo.sample([2, 4]);

  const tiles = [];
  for (let x = 1; x <= 4; x++) {
    for (let y = 1; y <= 4; y++) {
      let value = null;
      if (x === xIndex && y === yIndex) value = 2;

      const object = {
        id: crypto.randomUUID(),
        x,
        y,
        value,
      };
      tiles.push(object);
    }
  }

  return orderTiles(tiles);
};

export const isBoardEmpty = (tiles: Tiles) => {
  if (!tiles.length) return true;

  return tiles.filter((x) => x.value).length === 0;
};

export const addRandomTile = (tiles: Tiles) => {
  const mappedValues = lo.orderBy(tiles.map((x) => x.value).filter((x) => x));
  const values = lo.uniq([2, ...mappedValues.slice(0, Math.floor(mappedValues.length / 2))]);
  const emptyCells = tiles.filter((x) => !x.value);
  const randomCell = lo.sample(emptyCells);

  const randomValue = lo.sample(values) || null;

  const newTiles = tiles.map((tile) => (tile.id === randomCell?.id ? { ...tile, value: randomValue } : tile));
  return orderTiles(newTiles);
};
