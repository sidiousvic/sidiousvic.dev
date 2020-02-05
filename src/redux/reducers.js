const State = {};

export const reducer = (state = State, action) => {
  switch (action.type) {
    case "ACTION":
      return { ...state };
    default:
      return state;
  }
};
