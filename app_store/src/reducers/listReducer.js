import {
  ADD_ARCHIVE_LIST,
  ADD_LIST,
  DELETE_LIST,
  EDIT_LIST,
  GENERAL_EDIT_LIST,
  GET_ARCHIVE_ELEMENTS,
} from "./actions/types";

const defaultState = {
  lists: [
    {
      id: "1",
      created: "April 20, 2021",
      name: "Shopping list",
      category: "Task",
      content: "Tomatoes, bread",
      archive: false,
    },
    {
      id: "2",
      created: "April 27, 2021",
      name: "The theory of evolution",
      category: "Random Thought",
      content:
        "The evolutionary pressures that determine whether a characteristic should be common or rare",
      archive: false,
    },
    {
      id: "3",
      created: "May 05, 2021",
      name: "New feature",
      category: "Idea",
      content: "implement new atomic collider not 3/5/2021, - 5/5/2021",
      archive: false,
    },
    {
      id: "4",
      created: "May 15, 2021",
      name: "Books",
      category: "Task",
      content: "The Lean Startup",
      archive: false,
    },
    {
      id: "5",
      created: "April 20, 2021",
      name: "Printer",
      category: "Idea",
      content: "Tools for printer",
      archive: true,
    },
    {
      id: "6",
      created: "April 28, 2021",
      name: "Biologic weapon",
      category: "Random Thought",
      content: "my wife began Biologic weapon",
      archive: true,
    },
    {
      id: "7",
      created: "May 07, 2021",
      name: "Toilet Paper",
      category: "Task",
      content: "I need more toilet paper",
      archive: true,
    },
    {
      id: "8",
      created: "May 17, 2021",
      name: "Bike",
      category: "Idea",
      content: "Create new bike",
      archive: true,
    },
  ],
};

export const listReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_ARCHIVE_LIST:
      return {
        ...state,
        lists: [
          ...state.lists.map((note) =>
            note.id === action.payload
              ? { ...note, archive: !note.archive }
              : note
          ),
        ],
      };

    case DELETE_LIST:
      return {
        ...state,
        lists: [...state.lists.filter((note) => note.id !== action.payload)],
      };
    case ADD_LIST:
      return { ...state, lists: [...state.lists, { ...action.payload }] };
    case EDIT_LIST:
      return {
        ...state,
        lists: [
          ...state.lists.map((note) =>
            note.id === action.payload.id
              ? { ...note, ...action.payload }
              : note
          ),
        ],
      };

    default:
      return state;
  }
};
