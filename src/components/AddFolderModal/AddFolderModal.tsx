import React from "react";
import { ColorTag } from "../ColorTag/ColorTag";

export const AddFolderModal = () => {
  const colors: number[] = Array.from(Array(8).keys());
  return (
    <div className="add-folder-form">
      <input
        type="text"
        placeholder="Folder name"
        className="bg-white text-[20px] w-full pl-[11px] py-[8px] rounded-[4px] border border-grey outline-none h-[32px]"
      />
      <div className="flex w-full justify-between">
        {colors.map((el) => {
          return <ColorTag colorId={el} key={el} />;
        })}
      </div>
      <button
        className="
      w-full h-[37px] bg-btn-color text-white text-[20px] flex items-center justify-center rounded-[4px] hover:bg-teal-400 transition-colors"
      >
        Add
      </button>
    </div>
  );
};
