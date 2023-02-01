import React from "react";
import { TasksList } from "./TasksList";
import { TasksTitle } from "./TasksTitle";

import { IFolder } from "./List";
import { AddFolderBtn } from "./AddFolderBtn";

interface ITasksProps {
  folder: IFolder | IFolder[];
}

export const Tasks: React.FC<ITasksProps> = ({ folder }) => {
  return (
    <div className="tasks-wrapper">
      {Array.isArray(folder) ? (
        folder.map((el) => {
          return (
            <div key={el.id} className="pb-8">
              <TasksTitle title={el.title} colorId={el.colorId} />
              <TasksList content={el.tasks} />
            </div>
          );
        })
      ) : (
        <div className="w-full h-full flex flex-col">
          <TasksTitle title={folder.title} />
          <TasksList content={folder.tasks} />
          <AddFolderBtn title={"Add task"} onClick={() => {}} />
        </div>
      )}
    </div>
  );
};
