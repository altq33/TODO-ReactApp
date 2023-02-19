import React, { ChangeEvent, useState } from "react";

export interface ITask {
  id: number;
  title: string;
  isCompleted: boolean;
  folderId: number;
}

interface ITaskItemProps extends ITask {
  changeCompleteStatus: (
    taskId: number,
    folderId: number,
    status: boolean
  ) => void;
  deleteTask: (taskId: number, folderId: number) => void;
  updateTask: (taskId: number, folderId: number, title: string) => void;
}

export const TasksItem: React.FC<ITaskItemProps> = ({
  title,
  isCompleted,
  id,
  changeCompleteStatus,
  deleteTask,
  folderId,
  updateTask,
}) => {
  const [titleValue, setTitleValue] = useState(title);
  const [isEditing, setIsEditing] = useState(false);

  const onChangeStatus = () => {
    changeCompleteStatus(id, folderId, !isCompleted);
  };

  const onDelete = () => {
    deleteTask(id, folderId);
  };

  const onEditEnd = () => {
    updateTask(id, folderId, titleValue);
    setIsEditing(false);
  };

  return (
    <div className="tasks-item">
      <button
        className={isCompleted ? "task-btn-complete" : "task-btn"}
        onClick={onChangeStatus}
      ></button>
      {isEditing ? (
        <input
          autoFocus
          className="text-black text-[26px] block focus:outline-none bg-transparent"
          value={titleValue}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setTitleValue(e.target.value)
          }
          onBlur={onEditEnd}
        />
      ) : (
        <h3
          className={
            "text-black text-[26px] block " +
            (isCompleted ? "line-through" : "")
          }
        >
          {title}
        </h3>
      )}
      {!isCompleted && (
        <button
          onClick={() => setIsEditing(true)}
          className="edit-task hidden bg-[url('./assets/icons/edit.svg')] w-[15px] ml-[15px] h-[15px] bg-no-repeat bg-cover
      transition hover:scale-110 flex-shrink-0"
        ></button>
      )}

      <button
        onClick={onDelete}
        className="delete-task hidden bg-[url('./assets/icons/close.svg')] w-[15px] ml-[15px] h-[15px] bg-no-repeat bg-cover
      transition hover:scale-110 flex-shrink-0"
      ></button>
    </div>
  );
};
