import React, { useState } from "react";
import { AddFolderBtn } from "../AddFolderBtn/AddFolderBtn";
import { AddFolderModal } from "../AddFolderModal/AddFolderModal";
import { List } from "../List/List";

export const App: React.FC = () => {
  const [addModalIsOpen, setAddModalIsOpen] = useState(false);

  const [folders, setFolders] = useState([
    { id: 0, title: "Keks1", colorId: 6, selected: false },
    { id: 1, title: "Keks2", colorId: 1, selected: false },
    { id: 2, title: "Keks3", colorId: 2, selected: false },
  ]);

  return (
    <div className="todo">
      <div className="todo-sidebar">
        <List label="All tasks" folders={folders} />
        <div>
          {addModalIsOpen && (
            <AddFolderModal closeModal={() => setAddModalIsOpen(false)} />
          )}
          <AddFolderBtn onClick={() => setAddModalIsOpen(true)} />
        </div>
      </div>
      <div className="todo-tasks"></div>
    </div>
  );
};
