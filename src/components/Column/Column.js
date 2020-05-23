import React, { useState } from "react";
import ColumnItem from "./ColumnItem/ColumnItem";
import { useSelector } from "react-redux";
import s from "./Column.module.css";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import AddIcon from "@material-ui/icons/Add";
import WindowAdd from "./WindowAdd/WindowAdd";

const Column = (props) => {
  const boardItems = useSelector((state) => state.board.message);
  const [window, setWindow] = useState(false);

  let color;
  if (props.color === "grey") {
    color = "#c2c7cf";
  } else if (props.color === "green") {
    color = "#7cd5a7";
  } else if (props.color === "orange") {
    color = "#f4ad3d";
  } else if (props.color === "blue") {
    color = "#2369f6";
  }

  const createBodyColumn = () => {
    return boardItems.map((item) => {
      if (item.id === props.id) {
        return (
          <ColumnItem
            key={item.key}
            itemId={item.key}
            text={item.text}
            comment={item.comment}
            flag={item.flag}
            priority={item.priority}
            id={item.id}
            first={props.first}
            last={props.last}
          />
        );
      }
    });
  };

  return (
    <div className={s.column}>
      <div className={s.header}>
        <div className={s.name} style={{ marginLeft: "15px" }}>
          <FiberManualRecordIcon style={{ color: color }} />
          <div>{props.name}</div>
        </div>
        {props.add && (
          <AddIcon
            style={{ marginRight: "15px", cursor: "pointer" }}
            onClick={() => setWindow(!window)}
          />
        )}
      </div>
      {window && <WindowAdd setWindow={setWindow} />}
      <div className={s.body}>{createBodyColumn()}</div>
    </div>
  );
};

export default Column;
