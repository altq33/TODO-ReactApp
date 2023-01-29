import React from "react";
import { TasksList } from "./TasksList";
import { TasksTitle } from "./TasksTitle";

import { IFolder } from "./List";


interface ITasksProps {
  folder: IFolder;
}

export const Tasks: React.FC<ITasksProps> = ({ folder }) => {
  return (
    <div className="tasks-wrapper">
      <TasksTitle title={folder.title} />
      <TasksList content={folder.tasks} />
    </div>
  );
};
