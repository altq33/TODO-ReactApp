import React from "react";

export const ColorTag = ({ colorId }: { colorId: number }) => {
  let color: string;

  switch (colorId) {
    case 1: {
      color = "bg-green-point";
      break;
    }
    case 2: {
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
      color = "bg-purple-point";
      break;
    }
    case 7: {
      color = "bg-salmon-point";
      break;
    }
    default:
      color = "bg-grey-point";
  }

  return <div className={`color-tag ${color}`}></div>;
};
