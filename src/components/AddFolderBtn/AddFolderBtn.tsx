import React from "react";

export const AddFolderBtn = (props: { onClick: () => void }) => {
  return (
    <button onClick={props.onClick} className="add-folder-btn">
      Add folder
    </button>
  );
};
