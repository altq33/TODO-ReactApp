import React from "react";
import { ITask, TasksItem } from "./TasksItem";

interface ITasksListProps {
  content?: ITask[];
  changeCompleteStatus: (
    taskId: number,
    folderId: number,
    status: boolean
  ) => void;
  deleteTask: (taskId: number, folderId: number) => void;
  updateTask: (taskId: number, folderId: number, title: string) => void; 
}

export const TasksList: React.FC<ITasksListProps> = ({
  content,
  changeCompleteStatus,
  deleteTask,
  updateTask
}) => {
  return (
    <div className="flex-col flex w-full">
      {content?.length ? (
        content.map(({ id, title, isCompleted, folderId }: ITask) => (
          <TasksItem
            key={id}
            title={title}
            isCompleted={isCompleted}
            id={id}
            folderId={folderId}
            changeCompleteStatus={changeCompleteStatus}
            deleteTask={deleteTask}
            updateTask={updateTask}
          />
        ))
      ) : (
        <h2 className="text-[#C9D1D3] text-[32px] self-center block">
          No tasks
        </h2>
      )}
    </div>
  );
};
