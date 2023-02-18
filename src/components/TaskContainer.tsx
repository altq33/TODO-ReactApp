import React, { useCallback, useEffect, useState } from "react";
import { TasksTitle } from "./TasksTitle";
import { TasksList } from "./TasksList";
import { AddFolderBtn } from "./AddFolderBtn";
import { IFolder } from "./List";
import { AddTaskModal } from "./AddTaskModal";
import { ITask } from "./TasksItem";

interface ITaskContainerProps {
  folder: IFolder;
  addTask: (folderId: number, task: ITask) => void; 
  updateFolderTitle: (folderId: number, title: string) => void; 
}

export const TaskContainer: React.FC<ITaskContainerProps> = ({ folder, addTask, updateFolderTitle}) => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = useCallback(() => setIsOpen(false), []);
  const openModal = useCallback(() => setIsOpen(true), []);

  useEffect(() => {
    closeModal();
  }, [folder]);

  return (
    <>
      <div className="w-full flex flex-col">
        <TasksTitle title={folder.title} colorId={folder.colorId} folderId={folder.id}  updateFolderTitle={updateFolderTitle}/>
        <TasksList content={folder.tasks} />
        {!isOpen && <AddFolderBtn title={"Add task"} onClick={openModal} />}
      </div>
      <AddTaskModal isOpen={isOpen} close={closeModal} folderId={folder.id} addTask={addTask}/>
    </>
  );
};
