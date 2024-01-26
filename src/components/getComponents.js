import React from "react";
import Move from "./motion/Move";
import TurnClockWise from "./motion/TurnClockwise";
import TurnAntiClockwise from "./motion/TurnAntiClockwise";
import GoToXY from "./motion/GotoXY";
import MoveY from "./motion/MoveY";

// fetch components based on different keys
export const getComponent = (key, id) => {
  switch (key) {
    case "MOVE":
      return <Move comp_id={id} />;
    case "TURN_CLOCKWISE":
      return <TurnClockWise comp_id={id} />;
    case "TURN_ANTI_CLOCKWISE":
      return <TurnAntiClockwise comp_id={id} />;
    case "GOTO":
      return <GoToXY comp_id={id} />;
    case "MOVE_Y":
      return <MoveY comp_id={id} />;
    default:
      return React.null;
  }
};
