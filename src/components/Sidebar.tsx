import React, { Dispatch, SetStateAction, useState } from "react";
import { AddFolderBtn } from "./AddFolderBtn";
import { AddFolderModal } from "./AddFolderModal";
import { List, IFolder } from "./List";

interface ISidebarProps {
  foldersList: IFolder[];
  setFoldersList: Dispatch<SetStateAction<IFolder[]>>;
}

export const Sidebar: React.FC<ISidebarProps> = ({
  foldersList,
  setFoldersList,
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
      <List label="All tasks" folders={foldersList} deleteItem={deleteItem} />
      <div>
        {addModalIsOpen && (
          <AddFolderModal
            closeModal={() => setAddModalIsOpen(false)}
            updateFoldersList={addItem}
          />
        )}
        <AddFolderBtn onClick={() => setAddModalIsOpen(true)} />
      </div>
    </div>
  );
};
