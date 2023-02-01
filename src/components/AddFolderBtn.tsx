import React from "react";

interface IAddBtn {
  onClick: () => void; 
  title: string; 
}

export const AddFolderBtn: React.FC<IAddBtn> = ({onClick, title}) => {
  return (
    <button onClick={onClick} className="add-folder-btn">
      {title}
    </button>
  );
};
