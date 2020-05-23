import { ADD_ITEM } from "./";

const addItem = (text, flag, priority) => ({
  type: ADD_ITEM,
  text,
  flag,
  priority,
});

export default addItem;
