import React from "react";
import { Cell } from "../../components/Cell/Cell";
import { staticModel } from "./constants";

import "./Field.scss";

const Field = () => {
  const [fieldsModel, updateModel] = React.useState(staticModel);
  const [turn, changeTurn] = React.useState();
  const onCellClick = (id) => {
    // console.log(fieldsModel.map((x) => x.map((y) => y.id === id)));
    if (turn) {
      updateModel(
        fieldsModel.map((x) =>
          x.map((y) => (y.id === id ? { ...y, fig: "cross" } : y))
        )
      );
      changeTurn(!turn);
    } else {
      updateModel(
        fieldsModel.map((x) =>
          x.map((y) => (y.id === id ? { ...y, fig: "circle" } : y))
        )
      );
      changeTurn(!turn);
    }
  };

  return (
    <div className="field">
      {fieldsModel.map((columnModel, columnIndex) => (
        <div className="field__column" key={columnIndex}>
          {columnModel.map((figObj, figIndex) => (
            <div
              className="field__cell"
              key={figIndex}
              onClick={() => onCellClick(figObj.id)}
            >
              <Cell figType={figObj.fig} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Field;
