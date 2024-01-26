import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getComponent } from "./getComponents";
import { midActions } from "../store/mid-slice";

import { Draggable, Droppable } from "react-beautiful-dnd";

export default function MidArea() {
  const data = useSelector((state) => state.mid.midList);
  const dispatch = useDispatch();
  const eventFire = (el, etype) => {
    if (el && el.fireEvent) {
      el.fireEvent("on" + etype);
    } else if (el) {
      var evObj = document.createEvent("Events");
      evObj.initEvent(etype, true, false);
      el.dispatchEvent(evObj);
    }
  };
  const onRunButtonClick = () => {
    let string = "";
    data.forEach((x) => {
      let str = x.split("-")[0];
      let id = x.split("-")[1];
      let el = document.getElementById(`${str}+${id}`);
      eventFire(el, "click");
      string = string + " -> " + str;
    });
    dispatch(midActions.addInHistory(string));
  };
  const onEmptyList = () => {
    dispatch(midActions.emptyEventList());
  };
  return (
    <div className="flex-1 h-full overflow-auto py-2 px-2">
      <div className="flex items-center justify-between">
        <div className="bg-yellow-500 text-white font-bold py-2 px-4 rounded">
          {"mid area"}
        </div>
        <div className="flex space-x-4">
          <button
            onClick={onEmptyList}
            className="bg-red-500 text-white font-bold py-2 px-4 rounded"
          >
            Empty list
          </button>
          <button
            onClick={onRunButtonClick}
            className="bg-green-500 text-white font-bold py-2 px-4 rounded"
          >
            Run
          </button>
        </div>
      </div>
      <Droppable
        droppableId="mid"
        type="COMPONENT"
        isDropDisabled={false}
        isCombineEnabled={true}
      >
        {(provided) => {
          return (
            <ul
              className={`w-full h-full`}
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {data.length > 0 ? (
                data.map((x, i) => {
                  let str = x.split("-")[0];
                  return (
                    <Draggable
                      key={`${x}+${i}`}
                      draggableId={`${x}+${i}`}
                      index={i}
                      type="COMPONENT"
                    >
                      {(provided) => (
                        <li
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          {getComponent(str, `${str}+${i}`)}
                          {provided.placeholder}
                        </li>
                      )}
                    </Draggable>
                  );
                })
              ) : (
                <div class="relative h-80">
                  <p class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-600 text-4xl opacity-90">
                    Drag and Drop here
                  </p>
                </div>
              )}

              {provided.placeholder}
            </ul>
          );
        }}
      </Droppable>
    </div>
  );
}
