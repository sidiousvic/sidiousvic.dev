import React from "react";
import { Provider } from "react-redux";

import spawnStore from "./src/redux/spawnStore";

export default ({ element }) => {
  const store = spawnStore();
  return <Provider store={store}>{element}</Provider>;
};
