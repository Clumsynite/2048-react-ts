import lo from "lodash";
import { Tiles } from "../@types/Tiles";

export const initialiseTiles = () => {
  const xIndex = lo.random(1, 4);
  const yIndex = lo.random(1, 4);
  const randomValue = lo.sample([2, 4]);

  const tiles = [];
  for (let x = 1; x <= 4; x++) {
    for (let y = 1; y <= 4; y++) {
      let value = null;
      if (x === xIndex && y === yIndex) value = randomValue;

      const object = {
        id: crypto.randomUUID(),
        x,
        y,
        value,
      };
      tiles.push(object);
    }
  }
  console.log({ tiles });
  return tiles;
};

export const isBoardEmpty = (tiles: Tiles) => {
  if (!tiles.length) return true;

  return tiles.filter((x) => x.value).length === 0;
};

// const getNewCellValue = (max: number) => {
//   return lo.sample([2, 4]);
// };
