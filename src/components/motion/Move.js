import React, { useState } from "react";
import { useSelector } from "react-redux";

const Move = (props) => {
  const { comp_id } = props;
  const [steps, setSteps] = useState(0);
  const activeChar = useSelector((state) => state.mid.activeChar);

  const handleClick = () => {
    const el = document.getElementById(activeChar);
    var left = el.offsetLeft;
    el.style.position = "relative";
    el.style.left = left + steps + "px";
  };

  return (
    <div
      id={comp_id}
      className={`text-center rounded bg-blue-700 text-white p-2 my-2 text-sm cursor-pointer mx-auto`}
      onClick={() => handleClick()}
    >
      Move X{" "}
      <input
        type="number"
        className="text-black text-center w-16 mx-2"
        value={steps}
        onClick={(e) => {
          e.stopPropagation();
        }}
        onChange={(e) => {
          setSteps(parseInt(e.target.value));
        }}
      />{" "}
      steps
    </div>
  );
};
export default Move;
