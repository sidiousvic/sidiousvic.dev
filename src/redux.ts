import { createStore } from "redux";

const data = {
  pizza: ["🍕", "🍕", "🍕", "🍕", "🍕", "🍕"],
  desertXicuahua: "DESERT"
};

function reducer(state = data, action: { type: string; data?: any }) {
  switch (action.type) {
    case "JUST_DO_SHIT":
      // const title =
      //   state.title === "VIC SIDIOUS" ? "JUST DO SHIT" : "VIC SIDIOUS";
      console.log(state.pizza);
      return { ...state, pizza: state.pizza.slice(0, -1) };
    case "DESERT_XICUAHUA":
      const desertXicuahua =
        state.desertXicuahua === "DESERT" ? "XICUAHUA" : "DESERT";
      return { ...state, desertXicuahua };
    default:
      return state;
  }
}

const store = createStore(reducer);
export default store;
