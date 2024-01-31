import React from "react";
import CatSprite from "./CatSprite";
import { midActions } from "../store/mid-slice";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

export default function PreviewArea() {
  const characters = useSelector((state) => state.mid.character);
  const dispatch = useDispatch();
  const activeCharacter = useSelector((state) => state.mid.activeChar);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleCharacterClick = (character) => {
    setIsOpen(false);
    dispatch(midActions.setActiceChar(character));
  };
  const onReset = () => {
    dispatch(midActions.reset());
  };
  const history = useSelector((state) => state.mid.history);
  const onClearHistory = () => {
    dispatch(midActions.clearHistory());
  };
  const onCreate = () => {
    dispatch(midActions.addCharacter());
  };
  return (
    <div className="flex-none h-full overflow-y-auto w-full px-2">
      <div className="h-3/4">
        <div className="w-full flex items-center justify-between py-2">
          <div className="bg-yellow-500 text-white font-bold py-2 px-4 rounded">
            {"Preview area"}
          </div>
          <div className="flex space-x-4">
            <button
              onClick={onReset}
              className="bg-red-500 text-white font-bold py-2 px-4 rounded"
            >
              Reset
            </button>
            <button
              onClick={onCreate}
              className="bg-green-500 text-white font-bold py-2 px-4 rounded"
            >
              Create
            </button>

            <button
              type="button"
              className="bg-red-500 text-white font-bold py-2 px-4 rounded focus:outline-none"
              onClick={toggleDropdown}
            >
              Active - {" " + activeCharacter}
            </button>
            {isOpen && (
              <div className="origin-top-right absolute right-2 mt-10 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div className="py-1">
                  {characters.map((character, index) => (
                    <button
                      key={index}
                      className={`block px-4 py-2 text-sm ${
                        activeCharacter === character.id
                          ? "bg-gray-200 text-gray-800"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                      onClick={() => handleCharacterClick(character.id)}
                    >
                      {character.id}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        <div className={"flex justify-start"}>
          {characters.map((x, i) => {
            return (
              <div key={x.id} className={"absolute"}>
                <div id={x.id} key={x.id}>
                  <CatSprite key={x.id} />
                  <span className="flex justify-center w-full">{x.id}</span>
                </div>
              </div>
            );
          })}
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
