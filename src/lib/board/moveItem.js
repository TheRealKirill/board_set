import { MOVE_ITEM } from "./";

const moveItem = (impact, idItem) => ({
  type: MOVE_ITEM,
  impact,
  idItem,
});

export default moveItem;
