import React, { useState } from "react";
import { useDispatch } from "react-redux";
import s from "./WindowAdd.module.css";
import { addItem } from "../../../lib/board";

const WindowAdd = (props) => {
  const dispatch = useDispatch();

  const [text, setText] = useState("");
  const [flag, setFlag] = useState(false);
  const [priority, setPriority] = useState(false);

  const checkText = (event) => {
    const { value } = event.target;
    setText(value);
  };

  const checkFlag = () => {
    setFlag(true);
  };

  const checkPriority = (event) => {
    setPriority(event.target.value);
  };

  const add = () => {
    dispatch(addItem(text, flag, priority));
    props.setWindow(false);
  };

  return (
    <div className={s.body}>
      <textarea className={s.text} onChange={checkText} value={text}></textarea>
      <div className={s.flag} value="critical">
        <input type="checkbox" value="flag" onClick={checkFlag}></input>
        <p>Flag</p>
      </div>
      <p>Выберите приоритет: </p>
      <div className={s.row}>
        <input type="checkbox" value="critical" onClick={checkPriority}></input>
        <p>Critical</p>
      </div>
      <div className={s.row}>
        <input type="checkbox" value="medium" onClick={checkPriority}></input>
        <p>Medium</p>
      </div>
      <div className={s.row}>
        <input type="checkbox" value="minor" onClick={checkPriority}></input>
        <p>Minor</p>
      </div>
      <div className={s.button} onClick={add}>
        Добавить
      </div>
    </div>
  );
};

export default WindowAdd;
