interface Tile {
  x: number;
  y: number;
  value: number | null;
  id: string;
}

type Tiles = Tile[];

type dir = "up" | "down" | "left" | "right";

export { Tile, Tiles, dir };
