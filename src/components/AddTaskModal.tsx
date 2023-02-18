import React, { ChangeEvent, KeyboardEvent } from "react";
import { useState } from "react";
import { ITask } from "./TasksItem";

interface IAddTaskModalProps {
  close: () => void;
  isOpen: boolean;
  folderId: number;
  addTask: (folderId: number, task: ITask) => void;
}

export const AddTaskModal: React.FC<IAddTaskModalProps> = ({
  close,
  isOpen,
  folderId,
  addTask,
}) => {
  if (!isOpen) return null;

  const [inputValue, setInputValue] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const clearInputValue = () => {
    setInputValue("");
  };

  const onAdd = (folderId: number) => {
    addTask(folderId, {
      id: Date.now(),
      title: inputValue,
      isCompleted: false,
      folderId,
    });
    clearInputValue();
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key == "Escape") {
      close();
    }
    if (e.key == "Enter") {
      onAdd(folderId);
    }
  };

  return (
    <div className="flex w-full flex-col" onKeyDown={handleKeyDown}>
      <input
        autoFocus
        value={inputValue}
        onChange={handleChange}
        type="text"
        className="w-1/2 my-[18px] focus:outline-none h-[38px] shadow-sm py-[5px] pl-[10px] text-gray text-[14px] rounded-[4px] border border-l-neutral-400"
        placeholder="Task name"
      />
      <div className="flex">
        <button
          onClick={() => onAdd(folderId)}
          className="w-[145px] h-[34px] flex justify-center items-center text-white bg-green-point rounded-[4px]  text-[14px]"
        >
          Add
        </button>
        <button
          onClick={close}
          className="ml-[9px] w-[90px] h-[34px] flex justify-center items-center text-gray bg-[#F4F6F8] rounded-[4px] text-[14px]"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};
