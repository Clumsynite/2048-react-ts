import lo from "lodash";
import { Tile, Tiles, dir } from "../@types/Tiles";

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

export const moveTiles = (dir: dir, tiles: Tiles) => {
  const clonedTiles = lo.cloneDeep(tiles);
  let cells: Tiles = [];

  if (dir === "up") {
    const ordered = lo.orderBy(clonedTiles, ["y", "x"], ["desc", "asc"]);

    const grouped = lo.groupBy(lo.cloneDeep(ordered), "x");
    for (let x = 1; x <= 4; x++) {
      let next, cell, ignore;
      const col = grouped[x] as Tiles;
      for (let i = 0; i < 4; i++) {
        cell = col[i] as Tile;
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
  }
  if (dir === "down") {
    const ordered = lo.orderBy(clonedTiles, ["y", "x"], ["asc", "asc"]);

    const grouped = lo.groupBy(lo.cloneDeep(ordered), "x");
    for (let x = 1; x <= 4; x++) {
      let next, cell, ignore;
      const col = grouped[x] as Tiles;
      for (let i = 0; i < 4; i++) {
        cell = col[i] as Tile;
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
  }
  if (dir === "left") {
    const ordered = lo.orderBy(clonedTiles, ["y", "x"], ["asc", "desc"]);

    const grouped = lo.groupBy(lo.cloneDeep(ordered), "y");
    for (let x = 1; x <= 4; x++) {
      let next, cell, ignore;
      const col = grouped[x] as Tiles;
      for (let i = 0; i < 4; i++) {
        cell = col[i] as Tile;
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
  }
  if (dir === "right") {
    const ordered = lo.orderBy(clonedTiles, ["y", "x"], ["asc", "asc"]);

    const grouped = lo.groupBy(lo.cloneDeep(ordered), "y");
    for (let x = 1; x <= 4; x++) {
      let next, cell, ignore;
      const col = grouped[x] as Tiles;
      for (let i = 0; i < 4; i++) {
        cell = col[i] as Tile;
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
  }
  cells = orderTiles(addRandomTile(cells));
  return lo.cloneDeep(cells);
};

// const getRandomCell = () => {};

export const addRandomTile = (tiles: Tiles) => {
  const mappedValues = lo.orderBy(tiles.map((x) => x.value).filter((x) => x));
  const values = lo.uniq([2, ...mappedValues.slice(0, Math.floor(mappedValues.length / 2))]);
  const emptyCells = tiles.filter((x) => !x.value);
  const randomCell = lo.sample(emptyCells);

  const randomValue = lo.sample(values) || null;

  const newTiles = tiles.map((tile) => (tile.id === randomCell?.id ? { ...tile, value: randomValue } : tile));
  return orderTiles(newTiles);
};
