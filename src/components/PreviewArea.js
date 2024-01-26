import React from "react";
import CatSprite from "./CatSprite";
import { midActions } from "../store/mid-slice";
import { useSelector, useDispatch } from "react-redux";

export default function PreviewArea() {
  const dispatch = useDispatch();
  const onReset = () => {
    let cat = document.getElementById("cat");
    cat.style.left = "0px";
    cat.style.top = "0px";
    cat.style.transform = `rotate(${0}deg)`;
  };
  const history = useSelector((state) => state.mid.history);
  const onClearHistory = () => {
    dispatch(midActions.clearHistory());
  };
  return (
    <div className="flex-none h-full overflow-y-auto w-full px-2">
      <div className="h-3/4">
        <div className="w-full flex items-center justify-between py-2">
          <div className="bg-yellow-500 text-white font-bold py-2 px-4 rounded">
            {"Preview area"}
          </div>
          <button
            onClick={onReset}
            className="bg-red-500 text-white font-bold py-2 px-4 rounded"
          >
            Reset
          </button>
        </div>
        <div className={`absolute`}>
          <div id="cat">
            <CatSprite />
          </div>
        </div>
      </div>
      <div className="h-1/4">
        <div className="w-full flex items-center justify-between py-2">
          <div className="bg-yellow-500 text-white font-bold py-2 px-4 rounded">
            {"Preview area"}
          </div>
          <button
            onClick={onClearHistory}
            className="bg-red-500 text-white font-bold py-2 px-4 rounded"
          >
            Clear history
          </button>
        </div>
        {history.map((x) => {
          return <div>{x}</div>;
        })}
      </div>
    </div>
  );
}
