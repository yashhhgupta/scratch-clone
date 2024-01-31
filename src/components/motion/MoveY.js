import React, { useState } from "react";
import { useSelector } from "react-redux";

// Move Component for Sidebar
const MoveY = ({ comp_id }) => {
  const [steps, setSteps] = useState(0);
  const activeChar = useSelector((state) => state.mid.activeChar);

  // Function used for moiving Sprint in Y direction
  const handleClick = () => {
    const el = document.getElementById(activeChar);
    var top = el.offsetTop;
    el.style.position = "relative";
    el.style.top = top + steps + "px";
  };

  return (
    <div
      id={comp_id}
      className={`text-center rounded bg-blue-700 text-white p-2 my-2 text-sm cursor-pointer mx-auto`}
      onClick={() => handleClick()}
    >
      Move Y{" "}
      <input
        type="number"
        className="text-black text-center w-16 mx-2"
        value={steps}
        onChange={(e) => setSteps(parseInt(e.target.value))}
      />{" "}
      steps
    </div>
  );
};

// mapping state to component

export default MoveY;
