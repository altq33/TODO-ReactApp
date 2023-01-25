import React, { useState } from "react";
import { AddFolderBtn } from "./AddFolderBtn";
import { AddFolderModal } from "./AddFolderModal";
import { IFolder, List } from "./List";
import { folders } from "../server/db.json";

export const App: React.FC = () => {
  const [addModalIsOpen, setAddModalIsOpen] = useState(false);
  const [foldersList, setFoldersList] = useState(folders);

  const deleteItem = (id: number) => {
    setFoldersList(foldersList.filter((el) => el.id != id));
  };

  return (
    <div
      tabIndex={0}
      className="todo"
      onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key == "Escape") {
          setAddModalIsOpen(false);
        }
      }}
    >
      <div className="todo-sidebar">
        <List label="All tasks" folders={foldersList} deleteItem={deleteItem} />
        <div>
          {addModalIsOpen && (
            <AddFolderModal
              closeModal={() => setAddModalIsOpen(false)}
              updateFoldersList={(folder: IFolder) =>
                setFoldersList([...foldersList, folder])
              }
            />
          )}
          <AddFolderBtn onClick={() => setAddModalIsOpen(true)} />
        </div>
      </div>
      <div className="todo-tasks"></div>
    </div>
  );
};

