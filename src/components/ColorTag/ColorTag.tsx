import React from "react";

interface IColorTagProps {
  colorId: number;
  selected?: boolean;
  onClick?: () => void;
}

export const ColorTag: React.FC<IColorTagProps> = ({
  colorId,
  selected,
  onClick,
}) => {
  let color: string;

  switch (colorId) {
    case 1: {
      color = "bg-gray-point";
      break;
    }
    case 2: {
      color = "bg-green-point";
      break;
    }
    case 3: {
      color = "bg-blue-point";
      break;
    }
    case 4: {
      color = "bg-pink-point";
      break;
    }
    case 5: {
      color = "bg-light-green-point";
      break;
    }
    case 6: {
      color = "bg-black";
      break;
    }
    case 7: {
      color = "bg-salmon-point";
      break;
    }
    default:
      color = "bg-gray-point";
  }

  if (selected) color += " selected";

  return <div onClick={onClick} className={`color-tag ${color}`}></div>;
};
