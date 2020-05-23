import { MOVE_ITEM, ADD_ITEM } from "./";

const initialState = {
  board: [
    {
      id: 1,
      name: "Наряды",
      color: "grey",
      add: true,
    },
    {
      id: 2,
      name: "В работе",
      color: "green",
      add: false,
    },
    {
      id: 3,
      name: "Приемка",
      color: "orange",
      add: false,
    },
    {
      id: 4,
      name: "Завершено",
      color: "blue",
      add: false,
    },
  ],
  message: [
    {
      id: 1,
      text: "Установка плит под фундамент",
      comment: [
        {
          name: "Kirill",
          text: "Выполняю",
        },
      ],
      flag: true,
      priority: "medium",
      key: 1,
    },
    {
      id: 1,
      text:
        "Земельные работы по подготовке площадки по установке плит для несущей стены",
      comment: [],
      flag: false,
      priority: "minor",
      key: 2,
    },
    {
      id: 2,
      text: "Установка плит под фундамент",
      comment: [],
      flag: false,
      priority: "medium",
      key: 3,
    },
    {
      id: 2,
      text: "Установка плит под фундамент",
      comment: [],
      flag: false,
      priority: "minor",
      key: 4,
    },
    {
      id: 3,
      text:
        "Земельные работы по подготовке площадки по установке плит для несущей стены",
      comment: [],
      flag: false,
      priority: false,
      key: 5,
    },
    {
      id: 3,
      text: "Установка плит под фундамент",
      comment: [],
      flag: false,
      priority: false,
      key: 6,
    },
    {
      id: 4,
      text: "Установка плит под фундамент",
      comment: [],
      flag: false,
      priority: "medium",
      key: 7,
    },
    {
      id: 4,
      text: "Установка плит под фундамент",
      comment: [],
      flag: false,
      priority: false,
      key: 8,
    },
  ],
};

const boardReducer = (state = initialState, action) => {
  switch (action.type) {
    case MOVE_ITEM: {
      const newMessage = state.message.map((item) => {
        if (item.key === action.idItem) {
          if (action.impact === "next") {
            return {
              ...item,
              id: item.id + 1,
            };
          } else if (action.impact === "back") {
            return {
              ...item,
              id: item.id - 1,
            };
          }
        }
        return item;
      });

      return {
        ...state,
        message: newMessage,
      };
    }

    case ADD_ITEM: {
      let key = 0;
      state.message.forEach((item) => {
        item.key > key && (key = item.key);
      });

      const newItem = {
        id: 1,
        text: action.text,
        comment: [],
        flag: action.flag,
        priority: action.priority,
        key: key + 1,
      };

      console.log(newItem);

      return {
        ...state,
        message: [...state.message, newItem],
      };
    }

    default: {
      return state;
    }
  }
};

export default boardReducer;
