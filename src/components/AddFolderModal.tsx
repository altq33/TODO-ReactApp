import React, { useEffect, useState } from "react";
import { ColorTag } from "./ColorTag";
import { IFolder } from "./List";

interface IAddFolderModalProps {
  closeModal: () => void;
  updateFoldersList: (folder: IFolder) => void;
}

interface IColor {
  id: number;
  colorHex: string;
}

export const AddFolderModal: React.FC<IAddFolderModalProps> = ({
  closeModal,
  updateFoldersList,
}) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(true);
  const [colors, setColors] = useState<IColor[]>([]);
  const [selectedColor, setSelectedColor] = useState<number>(1);

  useEffect(() => {
    fetch("http://localhost:3000/colors")
      .then((res) => res.json())
      .then((data) => setColors(data));
  }, []);

  useEffect(() => {
    if (colors.length) {
      setSelectedColor(colors[0].id);
    }
  }, [colors]);

  const updateFoldersListHandler = () => {
    if (!inputValue) {
      setIsValid(false);
      return;
    }
    setIsValid(true);
    updateFoldersList({
      id: Date.now(),
      title: inputValue.trim(),
      colorId: selectedColor,
      tasks: [],
    });
    closeModal();
  };

  return (
    <div
      tabIndex={0}
      className="add-folder-form"
      onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key == "Enter") {
          e.preventDefault();
          updateFoldersListHandler();
        }
      }}
    >
      <input
        autoFocus
        value={inputValue}
        onFocus={() => setIsValid(true)}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setInputValue(e.target.value);
        }}
        type="text"
        placeholder="Folder name"
        className={
          "bg-white text-[20px] w-full pl-[11px] py-[8px] rounded-[4px] border border-gray h-[32px]" +
          (isValid ? " " : " border-red-500  ")
        }
      />
      <div className="flex w-full justify-between">
        {colors.map((el) => {
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
        onClick={updateFoldersListHandler}
      >
        Add
      </button>
      <button className="close-modal-btn" onClick={closeModal}></button>
    </div>
  );
};
