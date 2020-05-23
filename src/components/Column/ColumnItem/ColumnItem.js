import React, { useState } from "react";
import { useDispatch } from "react-redux";
import s from "./ColumnItem.module.css";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ReportProblemIcon from "@material-ui/icons/ReportProblem";
import Avatar from "@material-ui/core/Avatar";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { moveItem } from "../../../lib/board";

const ColumnItem = (props) => {
  const dispatch = useDispatch();

  const [window, setWindow] = useState(false);

  const itemMoweBack = () => {
    dispatch(moveItem("back", props.itemId));
  };

  const itemMoweNext = () => {
    dispatch(moveItem("next", props.itemId));
  };

  let color;
  if (props.priority) {
    if (props.priority === "medium") {
      color = "#f4ad3d";
    } else if (props.priority === "minor") {
      color = "#7cd5a7";
    } else if (props.priority === "critical") {
      color = "red";
    }
  }

  return (
    <div className={s.item} onDoubleClick={() => setWindow(!window)}>
      <div className={s.text}>{props.text}</div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "20px",
        }}
      >
        <div className={s.inform}>
          {props.priority && <ArrowUpwardIcon style={{ color: color }} />}
          {!!props.comment.length && (
            <>
              <ChatBubbleOutlineIcon style={{ marginLeft: "10px" }} />{" "}
              {props.comment.length}
            </>
          )}
          {props.flag && (
            <ReportProblemIcon
              style={{ color: "#f4ad3d", marginLeft: "10px" }}
            />
          )}
        </div>
        <Avatar />
      </div>
      {window && (
        <div className={s.window}>
          {props.first ? (
            <ArrowBackIcon style={{ opacity: "0.3" }} />
          ) : (
            <ArrowBackIcon
              onClick={itemMoweBack}
              style={{ cursor: "pointer" }}
            />
          )}
          {props.last ? (
            <ArrowForwardIcon style={{ opacity: "0.3" }} />
          ) : (
            <ArrowForwardIcon
              onClick={itemMoweNext}
              style={{ cursor: "pointer" }}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default ColumnItem;
