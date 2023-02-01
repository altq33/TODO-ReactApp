import React from "react";
import listImg from "../assets/icons/Vector.svg";
import { ListItem } from "./ListItem";
import { ITask } from "./TasksItem";

export interface IFolder {
  id: number;
  title: string;
  colorId: number;
  tasks?: ITask[];
}

interface IListProps {
  label: string;
  folders: Array<IFolder>;
  deleteItem: (id: number) => void;
  selectFolder: (id: number) => void;
  selectedFolder: number;
  allFolder: boolean;
}

export const List: React.FC<IListProps> = ({
  label,
  folders,
  deleteItem,
  selectFolder,
  selectedFolder,
  allFolder,
}) => {
  return (
    <ul className="todo-list">
      <li
        className={
          "flex items-center mb-[29px] text-[24px]" +
          (allFolder ? " selected" : "")
        }
        onClick={() => selectFolder(0)}
      >
        <div className="flex items-center">
          <i>
            <img
              className="mr-[9px] cursor-pointer w-[24px]"
              src={listImg}
              alt="List Icon"
            />
          </i>
          <span className="font-bold block">{label}</span>
        </div>
      </li>
      {folders.map((el) => {
        return (
          <ListItem
            id={el.id}
            colorId={el.colorId}
            title={el.title}
            key={el.id}
            deleteItem={deleteItem}
            tasks={el.tasks}
            selectFolder={selectFolder}
            selected={el.id == selectedFolder}
          />
        );
      })}
    </ul>
  );
};
