import { createStore } from "vuex";
import base from "./base.module";
import areas from "./areas.module";
export default createStore({
  modules: {
    base,
    areas,
  },
});
