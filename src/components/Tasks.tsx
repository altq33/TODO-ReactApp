import React from "react";
import { TasksList } from "./TasksList";
import { TasksTitle } from "./TasksTitle";

import { IFolder } from "./List";
import { TaskContainer } from "./TaskContainer";
import { ITask } from "./TasksItem";

interface ITasksProps {
  folder: IFolder | IFolder[];
  addTask: (folderId: number, task: ITask) => void;
  updateFolderTitle: (folderId: number, title: string) => void;
  changeCompleteStatus: (
    taskId: number,
    folderId: number,
    status: boolean
  ) => void;
  deleteTask: (taskId: number, folderId: number) => void;
  updateTask: (taskId: number, folderId: number, title: string) => void; 
}

export const Tasks: React.FC<ITasksProps> = ({
  folder,
  addTask,
  updateFolderTitle,
  changeCompleteStatus,
  deleteTask,
  updateTask
}) => {
  return (
    <div className="tasks-wrapper">
      {Array.isArray(folder) ? (
        folder.map((el) => {
          return (
            <div key={el.id} className="pb-8">
              <TasksTitle
                title={el.title}
                colorId={el.colorId}
                folderId={el.id}
                updateFolderTitle={updateFolderTitle}
              />
              <TasksList
                content={el.tasks}
                changeCompleteStatus={changeCompleteStatus}
                deleteTask={deleteTask}
                updateTask={updateTask}
              />
            </div>
          );
        })
      ) : (
        <TaskContainer
          folder={folder}
          addTask={addTask}
          updateFolderTitle={updateFolderTitle}
          changeCompleteStatus={changeCompleteStatus}
          deleteTask={deleteTask}
          updateTask={updateTask}
        />
      )}
    </div>
  );
};
