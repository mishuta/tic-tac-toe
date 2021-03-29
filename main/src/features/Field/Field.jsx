import React from "react";
import { Cell } from "../../components/Cell/Cell";
import { cellModel, staticModel, winCombinations } from "./constants";

import "./Field.scss";

const Field = () => {
  const [fieldsModel, updateModel] = React.useState(staticModel);
  const [turn, changeTurn] = React.useState(false);
  const [isFinished, setIsFinished] = React.useState(false);

  const xoFilter = (fig) => {
    let result = "";
    for (let prop in fieldsModel) {
      if (fig === fieldsModel[prop]) {
        result = result + prop;
      }
    }
    return result;
  };

  const checkWin = () => {
    const circleResult = xoFilter("circle");
    const checkCircleResult = winCombinations.some((combination) =>
      circleResult.includes(combination)
    );
    const crossResult = xoFilter("cross");
    const checkCrossResult = winCombinations.some((combination) =>
      crossResult.includes(combination)
    );
    setIsFinished(checkCircleResult || checkCrossResult);
  };

  const onCellClick = (id) => {
    if (fieldsModel[id] || isFinished) {
      return;
    }
    fieldsModel[id] = turn ? "cross" : "circle";
    updateModel(fieldsModel);
    checkWin();
    changeTurn(!turn);
  };

  return (
    <div className="field">
      {cellModel.map((columnModel, columnIndex) => (
        <div className="field__column" key={columnIndex}>
          {columnModel.map((cellId) => (
            <div
              className="field__cell"
              key={cellId}
              onClick={() => onCellClick(cellId)}
            >
              <Cell figType={staticModel[cellId]} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Field;
