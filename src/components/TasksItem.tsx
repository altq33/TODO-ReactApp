import React, { useState } from "react";

export interface ITask {
  id?: number;
  title: string;
  isCompleted: boolean;
}

export const TasksItem: React.FC<ITask> = ({ title, isCompleted }) => {
  const [completed, setCompleted] = useState<boolean>(isCompleted);

  return (
    <div className="tasks-item">
      <button
        className={completed ? "task-btn-complete" : "task-btn"}
        onClick={() => setCompleted((prev) => !prev)}
      ></button>
      <input className="text-black text-[26px] block" value={title} readOnly />
    </div>
  );
};
