import { Button } from "@nextui-org/react";
import { useAppDispatch } from "src/hooks";
import { resetCurrentScore } from "src/reducers/score";
import { resetTiles } from "src/reducers/tiles";

const NewGame = () => {
  const dispatch = useAppDispatch();

  const newGame = () => {
    dispatch(resetTiles());
    dispatch(resetCurrentScore());
  };
  return (
    <Button onClick={newGame} color="default" variant="solid" type="button">
      New Game
    </Button>
  );
};

export default NewGame;
