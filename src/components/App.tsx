import React, { useEffect, useState } from "react";
import { Sidebar } from "./Sidebar";
import { Tasks } from "./Tasks";
import { IFolder } from "./List";
import { ITask } from "./TasksItem";

export const App: React.FC = () => {
  const [foldersList, setFoldersList] = useState<IFolder[]>([]);
  const [selectedFolder, setSelectedFolder] = useState<number>(0);

  const addTask = (folderId: number, task: ITask) => {
    fetch(`http://localhost:3000/tasks`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    }).then(() => {
      setFoldersList((prev) =>
        prev.map((el) => {
          if (el.id != folderId) return el;
          el.tasks?.push(task);
          return el;
        })
      );
    });
  };

  const updateFolderTitle = (folderId: number, title: string) => {
    fetch(`http://localhost:3000/folders/${folderId}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ title }),
    }).then(() => {
      setFoldersList((prev) =>
        prev.map((el) => {
          if (el.id != folderId) return el;
          el.title = title; 
          return el; 
        })
      );
    });
  };

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
          addTask={addTask}
          folder={
            selectedFolder ? findFolderForRender(selectedFolder)!! : foldersList
          }
          updateFolderTitle={updateFolderTitle}
        />
      )}
    </div>
  );
};
