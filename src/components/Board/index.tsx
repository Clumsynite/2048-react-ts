import { useEffect, useRef } from "react";
import { dir } from "../../@types/Tiles";
import { moveTiles } from "../../helper/tiles";
import Tile from "./Tile";
import { useAppDispatch, useAppSelector } from "src/hooks";
import { setBestScore, addCurrentScore } from "src/reducers/score";
import { setTiles } from "src/reducers/tiles";

const Board = () => {
  const tiles = useAppSelector((state) => state.tiles.value);
  const tilesRef = useRef(tiles);
  useEffect(() => {
    tilesRef.current = tiles;
  }, [tiles]);

  const scores = useAppSelector((state) => state.score);
  const scoresRef = useRef(scores);
  useEffect(() => {
    scoresRef.current = scores;
  }, [scores]);

  const dispatch = useAppDispatch();

  const handleKeyDown = ({ key }: KeyboardEvent) => {
    let dir;

    if (["w", "arrowup"].includes(key.toLowerCase())) dir = "up";
    else if (["s", "arrowdown"].includes(key.toLowerCase())) dir = "down";
    else if (["a", "arrowleft"].includes(key.toLowerCase())) dir = "left";
    else if (["d", "arrowright"].includes(key.toLowerCase())) dir = "right";

    if (dir) {
      const { tiles, score } = moveTiles(dir as dir, tilesRef.current);
      dispatch(setTiles([...tiles]));
      const newScore = scoresRef.current.current + score;
      dispatch(addCurrentScore(score));
      if (scoresRef.current.best < newScore) dispatch(setBestScore(newScore));
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="flex flex-row justify-center items-center mt-6">
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
