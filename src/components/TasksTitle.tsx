import React, { ChangeEvent, FocusEvent, useEffect, useState } from "react";
import { getColorClassname } from "./ColorTag";

interface ITaskTitleProps {
  title: string;
  colorId?: number;
  folderId: number;
  updateFolderTitle: (folderId: number, title: string) => void;
}

export const TasksTitle: React.FC<ITaskTitleProps> = ({
  title,
  colorId,
  folderId,
  updateFolderTitle,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [titleValue, setTitleValue] = useState(title);
  const color = colorId ? getColorClassname(colorId, "text") : "";

  useEffect(() => {
    setTitleValue(title);
  }, [title]);

  const startEdit = () => setIsEditing(true);
  const endEdit = () => {
    setIsEditing(false);
    updateFolderTitle(folderId, titleValue);
  };

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTitleValue(e.target.value);
  };

  return (
    <div className=" w-full border-b-2 pb-[20px] border-b-[#F2F2F2] flex items-center mb-[31px]">
      {isEditing ? (
        <input
          autoFocus
          type="text"
          value={titleValue}
          onBlur={endEdit}
          onChange={changeHandler}
          className={"tasks-title focus:outline-none  " + color}
        />
      ) : (
        <h2 className={"tasks-title " + color}>{title}</h2>
      )}

      <button
        className="bg-[url('./assets/icons/edit.svg')] w-[15px] ml-[15px] h-[15px] bg-no-repeat bg-cover
      transition hover:scale-110"
        onClick={startEdit}
      ></button>
    </div>
  );
};
