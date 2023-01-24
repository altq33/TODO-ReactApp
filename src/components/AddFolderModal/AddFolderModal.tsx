import React, { useState } from "react";
import { ColorTag } from "../ColorTag/ColorTag";
import { colors } from "../../server/db.json";

interface IAddFolderModalProps {
  closeModal: () => void;
}

export const AddFolderModal: React.FC<IAddFolderModalProps> = ({
  closeModal,
}) => {
  const [selectedColor, setSelectedColor] = useState(colors[0].id);

  return (
    <div className="add-folder-form">
      <input
        type="text"
        placeholder="Folder name"
        className="bg-white text-[20px] w-full pl-[11px] py-[8px] rounded-[4px] border border-gray outline-none h-[32px]"
      />
      <div className="flex w-full justify-between">
        {colors.map((el, i) => {
          return (
            <ColorTag
              colorId={el.id}
              key={el.id}
              selected={selectedColor == el.id ? true : false}
              onClick={() => setSelectedColor(el.id)}
            />
          );
        })}
      </div>
      <button
        className="
      w-full h-[37px] bg-btn-color text-white text-[20px] flex items-center justify-center rounded-[4px] hover:bg-teal-400 transition-colors"
      >
        Add
      </button>
      <button className="close-modal-btn" onClick={closeModal}></button>
    </div>
  );
};
