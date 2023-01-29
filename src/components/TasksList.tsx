import React from "react";
import { ITask, TasksItem } from "./TasksItem";

interface ITasksListProps {
  content?: ITask[];
}

export const TasksList: React.FC<ITasksListProps> = ({ content }) => {
  return (
    <div className="w-full h-full flex flex-col">
      {content?.length ? (
        content.map(({ id, title, isCompleted }: ITask) => (
          <TasksItem key={id} title={title} isCompleted={isCompleted} />
        ))
      ) : (
        <h2>Is empty</h2>
      )}
    </div>
  );
};
