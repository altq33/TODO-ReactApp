import React from "react";
import { ColorTag } from "./ColorTag";
import { IFolder } from "./List";

interface IListItemProps extends  IFolder {
  deleteItem: (id: number) => void; 
} 

export const ListItem: React.FC<IListItemProps> = ({ colorId, title, id, deleteItem }) => {
  return (
    <li>
      <div className="flex items-center">
        <ColorTag colorId={colorId} />
        <span>{title}</span>
      </div>
      <div className="close-icon" onClick={() => deleteItem(id)}></div>
    </li>
  );
};
