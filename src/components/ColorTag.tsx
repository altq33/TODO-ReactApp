import React from "react";

interface IColorTagProps {
  colorId: number;
  selected?: boolean;
  onClick?: () => void;
}

export const getColorClassname = (colorId: number, target: string): string => {
  switch (colorId) {
    case 1: {
      return target == "bg" ? "bg-gray-point" : "text-gray-point";
    }
    case 2: {
      return target == "bg" ? "bg-green-point" : "text-green-point";
    }
    case 3: {
      return target == "bg" ? "bg-blue-point" : "text-blue-point";
    }
    case 4: {
      return target == "bg" ? "bg-pink-point" : "text-pink-point";
    }
    case 5: {
      return target == "bg" ? "bg-light-green-point" : "text-light-green-point";
    }
    case 6: {
      return target == "bg" ? "bg-purple-point" : "text-purple-point";
    }
    case 7: {
      return target == "bg" ? "bg-black" : "text-black";
    }
  }
  return target == "bg" ? "bg-salmon-point" : "text-salmon-point";
};

export const ColorTag: React.FC<IColorTagProps> = ({
  colorId,
  selected,
  onClick,
}) => {
  let color = getColorClassname(colorId, "bg");

  if (selected) color += " selected";

  return <div onClick={onClick} className={`color-tag ${color}`}></div>;
};
