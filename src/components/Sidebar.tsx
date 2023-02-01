import React, { Dispatch, SetStateAction, useState } from "react";
import { AddFolderBtn } from "./AddFolderBtn";
import { AddFolderModal } from "./AddFolderModal";
import { List, IFolder } from "./List";

interface ISidebarProps {
  foldersList: IFolder[];
  setFoldersList: Dispatch<SetStateAction<IFolder[]>>;
  selectFolder: (id: number) => void;
  selectedFolder: number;
  allFolder: boolean;
}

export const Sidebar: React.FC<ISidebarProps> = ({
  foldersList,
  setFoldersList,
  selectFolder,
  selectedFolder,
  allFolder,
}) => {
  const [addModalIsOpen, setAddModalIsOpen] = useState<boolean>(false);

  const deleteItem = (id: number) => {
    fetch(`http://localhost:3000/folders/${id}`, {
      method: "DELETE",
    }).then(() => {
      setFoldersList((prev) => prev.filter((el) => el.id != id));
    });
  };

  const addItem = (folder: IFolder) => {
    fetch("http://localhost:3000/folders", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(folder),
    }).then(() => {
      setFoldersList([...foldersList, folder]);
    });
  };

  return (
    <div
      className="todo-sidebar"
      onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key == "Escape") {
          setAddModalIsOpen(false);
        }
      }}
    >
      <List
        label="All tasks"
        allFolder={allFolder}
        folders={foldersList}
        deleteItem={deleteItem}
        selectFolder={selectFolder}
        selectedFolder={selectedFolder}
      />
      <div>
        {addModalIsOpen && (
          <AddFolderModal
            closeModal={() => setAddModalIsOpen(false)}
            updateFoldersList={addItem}
          />
        )}
        <AddFolderBtn onClick={() => setAddModalIsOpen(true)} title="Add folder"/>
      </div>
    </div>
  );
};
