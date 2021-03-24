import React from "react";
import { Circle } from "../Circle/Circle";
import { Cross } from "../Cross/Cross";

export const Cell = ({ figType }) => {
  if (!figType) {
    return null;
  }
  return <>{figType === "cross" ? <Cross /> : <Circle />}</>;
};
