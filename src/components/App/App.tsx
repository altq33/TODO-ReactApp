import React from "react";
import listImg from "../../assets/icons/Vector.svg";

export const App = () => {
  return (
    <div className="todo">
      <div className="todo-sidebar">
        <ul className="todo-list">
          <li className="flex items-center">
            <i>
              <img className="mr-[9px] cursor-pointer w-[24px]" src={listImg} alt="List Icon" />
            </i>
            <span className="font-bold">All tasks</span>
          </li>
        </ul>
      </div>
      <div className="todo-tasks"></div>
    </div>
  );
};
