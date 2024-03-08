interface Tile {
  x: number;
  y: number;
  value: number | null;
  id: string;
}

type Tiles = Tile[];

export { Tile, Tiles };
