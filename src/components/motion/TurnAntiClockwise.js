import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { midActions } from "../../store/mid-slice";
import { GiAnticlockwiseRotation } from "react-icons/gi";

const TurnAntiClockWise = ({ comp_id }) => {
  const [angle, setAngle] = useState(0);
  const dispatch = useDispatch();

  const characters = useSelector((state) => state.mid.character);
  const activeChar = useSelector((state) => state.mid.activeChar);
  // handle anti-clockwise rotation
  const handleClick = () => {
    let anti_angle = -1 * angle;
    const el = document.getElementById(activeChar);
    let currAngle = characters.find((x) => x.id === activeChar).angle;
    el.style.transform = `rotate(${currAngle + anti_angle}deg)`;
    dispatch(midActions.changeAngle(currAngle + anti_angle));
  };

  return (
    <div className="text-center rounded bg-blue-500 p-2 my-3">
      <div className="grid grid-cols-2">
        <div className="text-white">Rotate By:</div>
        <input
          className="mx-2 p-1 py-0 text-center"
          type="number"
          value={angle}
          onChange={(e) => {
            setAngle(parseInt(e.target.value));
          }}
        />
      </div>
      <div
        id={comp_id}
        className={`flex bg-blue-700 text-white px-2 py-1 mt-3 mb-1 text-sm cursor-pointer`}
        onClick={() => handleClick()}
      >
        <div className="flex items-center justify-center mx-auto">
          Turn &nbsp; <GiAnticlockwiseRotation />
          &nbsp;
          {angle}&nbsp; degrees
        </div>
      </div>
    </div>
  );
};

// mapping state to component

export default TurnAntiClockWise;
