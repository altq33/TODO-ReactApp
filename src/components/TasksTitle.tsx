import React from "react";

interface ITaskTitleProps {
  title: string;
}

export const TasksTitle: React.FC<ITaskTitleProps> = ({ title }) => {
  return (
    <div className=" w-full border-b-2 pb-[20px] border-b-[#F2F2F2] flex items-center mb-[31px]">
      <h2 className="tasks-title">{title}</h2>
      <button
        className="bg-[url('./assets/icons/edit.svg')] w-[15px] ml-[15px] h-[15px] bg-no-repeat bg-cover
      transition hover:scale-110"
      ></button>
    </div>
  );
};
