import React, { useEffect, useState } from "react";
import { Sidebar } from "./Sidebar";
import { Tasks } from "./Tasks";
import { IFolder } from "./List";
import { ITask } from "./TasksItem";

export const App: React.FC = () => {
  const [foldersList, setFoldersList] = useState<IFolder[]>([]);
  const [selectedFolder, setSelectedFolder] = useState<number>(0);

  const changeCompleteStatus = (
    taskId: number,
    folderId: number,
    status: boolean
  ) => {
    fetch(`http://localhost:3000/tasks/${taskId}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ isCompleted: status }),
    }).then(() => {
      setFoldersList((prev) =>
        prev.map((el) => {
          if (el.id != folderId) return el;
          el.tasks?.forEach((el) => {
            if (el.id == taskId) {
              el.isCompleted = status;
            }
          });
          return el;
        })
      );
    });
  };

  const deleteTask = (taskId: number, folderId: number) => {
    fetch(`http://localhost:3000/tasks/${taskId}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    }).then(() => {
      setFoldersList((prev) =>
        prev.map((el) => {
          if (el.id != folderId) return el;
          el.tasks?.forEach((task, i) => {
            if (task.id == taskId) {
              el.tasks?.splice(i, 1);
              return;
            }
          });
          return el;
        })
      );
    });
  };

  const updateTask = (taskId: number, folderId: number, title: string) => {
    fetch(`http://localhost:3000/tasks/${taskId}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ title }),
    }).then(() => {
      setFoldersList((prev) =>
        prev.map((el) => {
          if (el.id != folderId) return el;
          el.tasks?.forEach((el) => {
            if (el.id === taskId) {
              el.title = title;
            }
          });
          return el;
        })
      );
    });
  };

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
      {/*в Tasks надо было тоже просто прокинуть фолдер лист и сетфолдерлист, но я даун и начал прокидывать 
      отдельно каждые функции, а ваще по хорошему для такой херни юзать контекст, но я че то тупанул, 
      переделывать лень
      дико извиняюсь */}
      <Sidebar
        foldersList={foldersList}
        setFoldersList={setFoldersList}
        selectFolder={selectFolder}
        selectedFolder={selectedFolder}
        allFolder={!selectedFolder ? true : false}
      />
      {Boolean(foldersList.length) ? (
        <Tasks
          addTask={addTask}
          folder={
            selectedFolder ? findFolderForRender(selectedFolder)!! : foldersList
          }
          updateFolderTitle={updateFolderTitle}
          changeCompleteStatus={changeCompleteStatus}
          deleteTask={deleteTask}
          updateTask={updateTask}
        />
      ) : (
        <h2 className="flex w-full h-full items-center justify-center text-4xl text-gray">
          Folders and tasks are absent
        </h2>
      )}
    </div>
  );
};
