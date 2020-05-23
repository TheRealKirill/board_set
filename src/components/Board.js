import React from "react";
import { useSelector } from "react-redux";
import Column from "./Column/Column";
import s from "./Board.module.css";

const Board = () => {
  const boardItems = useSelector((state) => state.board.board);

  const createColumn = () => {
    return boardItems.map((item, index, arr) => {
      const first = index === 0 ? true : false;
      const last = index + 1 === arr.length ? true : false;

      return (
        <Column
          key={item.id}
          id={item.id}
          name={item.name}
          color={item.color}
          add={item.add}
          first={first}
          last={last}
        />
      );
    });
  };

  return <div className={s.board}>{createColumn()}</div>;
};

export default Board;
