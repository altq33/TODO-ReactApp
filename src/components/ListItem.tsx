import React from "react";
import { ColorTag } from "./ColorTag";
import { IFolder } from "./List";

interface IListItemProps extends IFolder {
  deleteItem: (id: number) => void;
  selectFolder: (id: number) => void;
  selected: boolean;
}

export const ListItem: React.FC<IListItemProps> = ({
  colorId,
  title,
  id,
  deleteItem,
  tasks,
  selectFolder,
  selected,
}) => {
  return (
    <li onClick={() => selectFolder(id)} className={selected ? "selected" : ""}>
      <div className="flex items-center pr-[12px]">
        <ColorTag colorId={colorId} />
        <span className="mr-3">{title}</span>
        <div className="text-[18px] text-gray  flex items-center h-full pt-[6px]">
          {tasks ? tasks.length : 0}
        </div>
      </div>

      <div
        className="close-icon"
        onClick={(element: React.MouseEvent<HTMLDivElement>) => {
          element.stopPropagation();
          deleteItem(id);
        }}
      ></div>
    </li>
  );
};
