// Action types
export const ACTIVATE_AREA = "activate_area";
export const MOVE_AREA = "move_area";
export const DEACTIVATE_AREA = "deactivate_area";
export const UPDATE_LIST = "update_list";
// Mutation types
const AREA_TOGGLE = "area_toggle";
const REARRANGE_AREA = "rearrange_area";
const SET_LIST = "set_list";

const state = () => ({
  list: [
    {
      name: "Area 1",
      original_position: 1,
      current_position: 1,
      id: 1,
      is_active: false,
    },
    {
      name: "Area 2",
      original_position: 2,
      current_position: 3,
      id: 2,
      is_active: false,
    },
    {
      name: "Area 3",
      original_position: 3,
      current_position: 3,
      id: 3,
      is_active: false,
    },
    {
      name: "Area 4",
      original_position: 4,
      current_position: 4,
      id: 4,
      is_active: false,
    },
    {
      name: "Area 5",
      original_position: 5,
      current_position: 5,
      id: 5,
      is_active: false,
    },
  ],
});
const getters = {};
const actions = {
  [ACTIVATE_AREA]({ commit }, areaId = null) {
    let error = null;
    if (typeof areaId === "number") {
      commit(AREA_TOGGLE, { areaId, show: true });
    } else {
      error = "`areaId` needs to be a number.";
    }
    return error;
  },
  [DEACTIVATE_AREA]({ commit }, areaId = null) {
    let error = null;
    if (typeof areaId === "number") {
      commit(AREA_TOGGLE, { areaId, show: false });
    } else {
      error = "`areaId` needs to be a number.";
    }
    return error;
  },
  [MOVE_AREA]({ commit }, { oldIndex, newIndex }) {
    commit(REARRANGE_AREA, { oldIndex, newIndex });
  },
  [UPDATE_LIST]({ commit }, list) {
    commit(SET_LIST, list);
  },
};
const mutations = {
  [AREA_TOGGLE](state, { areaId, show }) {
    const idx = state.list.findIndex((i) => i.id === areaId);
    state.list[idx].is_active = show;
  },
  [REARRANGE_AREA](state, { oldIndex, newIndex }) {
    const { list } = state;
    const from = list[oldIndex];
    const to = list[newIndex];
    from.current_position = newIndex + 1;
    to.current_position = oldIndex + 1;
    state[oldIndex] = to;
    state[newIndex] = from;
  },
  [SET_LIST](state, list) {
    state.list = list;
  },
};

export default {
  state,
  actions,
  getters,
  mutations,
};
