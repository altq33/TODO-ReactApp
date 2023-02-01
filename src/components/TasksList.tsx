import React from "react";
import { ITask, TasksItem } from "./TasksItem";

interface ITasksListProps {
  content?: ITask[];
}

export const TasksList: React.FC<ITasksListProps> = ({ content }) => {
  return (
    <div className="">
      {content?.length ? (
        content.map(({ id, title, isCompleted }: ITask) => (
          <TasksItem key={id} title={title} isCompleted={isCompleted} />
        ))
      ) : (
        <h2 className="text-[#C9D1D3] text-[32px] self-center block">
          No tasks
        </h2>
      )}
    </div>
  );
};
