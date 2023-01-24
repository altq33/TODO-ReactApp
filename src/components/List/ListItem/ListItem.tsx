import React from "react";
import { ColorTag } from "../../ColorTag/ColorTag";
import { IFolder } from "../List";

export const ListItem: React.FC<IFolder> = ({ colorId, title, selected }) => {
  return (
    <li className={selected ? "selected" : ""}>
      <div className="flex items-center">
        <ColorTag colorId={colorId} />
        <span>{title}</span>
      </div>
      <div className="close-icon"></div>
    </li>
  );
};
