import React from "react";

export interface ITask {
  id?: number;
  title: string;
  isCompleted: boolean;
}

export const TasksItem: React.FC<ITask> = ({ title, isCompleted }) => {
  return (
    <div className="tasks-item">
      <button
        className={isCompleted ? "task-btn" : "task-btn-complete"}
      ></button>
      <input className="text-black text-[26px] block" value={title} readOnly/>
    </div>
  );
};



