import React, { useEffect, useState } from "react";
import { Sidebar } from "./Sidebar";
import { Tasks } from "./Tasks";
import { IFolder } from "./List";

export const App: React.FC = () => {
  const [foldersList, setFoldersList] = useState<IFolder[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/folders?_embed=tasks")
      .then((res) => res.json())
      .then((data) => {
        setFoldersList(data);
      });
  }, []);

  return (
    <div className="todo">
      <Sidebar foldersList={foldersList} setFoldersList={setFoldersList} />
      {Boolean(foldersList.length) && <Tasks folder={foldersList[0]} />}
    </div>
  );
};
