import React, { useEffect, useState } from "react";
import { Sidebar } from "./Sidebar";
import { Tasks } from "./Tasks";
import { IFolder } from "./List";

export const App: React.FC = () => {
  const [foldersList, setFoldersList] = useState<IFolder[]>([]);
  const [selectedFolder, setSelectedFolder] = useState<number>(0);

  const selectFolder = (id: number) => {
    setSelectedFolder(id);
  };

  const findFolderForRender = (id: number): IFolder | undefined => {
    for (let folder of foldersList) {
      if (folder.id == id) return folder;
    }
    setSelectedFolder(0);
  };

  useEffect(() => {
    fetch("http://localhost:3000/folders?_embed=tasks")
      .then((res) => res.json())
      .then((data) => {
        setFoldersList(data);
      });
  }, []);

  return (
    <div className="todo">
      <Sidebar
        foldersList={foldersList}
        setFoldersList={setFoldersList}
        selectFolder={selectFolder}
        selectedFolder={selectedFolder}
        allFolder={!selectedFolder ? true : false}
      />
      {Boolean(foldersList.length) && (
        <Tasks
          folder={
            selectedFolder ? findFolderForRender(selectedFolder)!! : foldersList
          }
        />
      )}
    </div>
  );
};
