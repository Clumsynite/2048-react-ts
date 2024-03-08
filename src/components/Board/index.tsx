import { useEffect, useRef, useState } from "react";
import { Tiles, dir } from "../../@types/Tiles";
import { initialiseTiles, moveTiles } from "../../helper/tiles";
import Tile from "./Tile";
import { useAppDispatch, useAppSelector } from "src/hooks";
import { setBestScore, addCurrentScore } from "src/reducers/score";

const Board = () => {
  const [tiles, _setTiles] = useState<Tiles>([]);
  const tilesRef = useRef(tiles);

  const setTiles = (data: Tiles) => {
    tilesRef.current = data;
    _setTiles(data);
  };

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
      setTiles([...tiles]);
      const newScore = scoresRef.current.current + score;
      dispatch(addCurrentScore(score));
      if (scoresRef.current.best < newScore) dispatch(setBestScore(newScore));
    }
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
