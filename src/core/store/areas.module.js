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
  list: [],
  originalList: [
    {
      name: "Area 1",
      original_position: 1,
      current_position: 1,
      id: 1,
      is_active: false,
      width: 100,
    },
    {
      name: "Area 2",
      original_position: 2,
      current_position: 3,
      id: 2,
      is_active: false,
      width: 100,
    },
    {
      name: "Area 3",
      original_position: 3,
      current_position: 3,
      id: 3,
      is_active: false,
      width: 100,
    },
    {
      name: "Area 4",
      original_position: 4,
      current_position: 4,
      id: 4,
      is_active: false,
      width: 100,
    },
    {
      name: "Area 5",
      original_position: 5,
      current_position: 5,
      id: 5,
      is_active: false,
      width: 100,
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
    const { originalList, list } = state;
    let newList = list;
    if (show === true) {
      const item = originalList.find((i) => i.id === areaId);
      item.is_active = true;
      const { length } = list;
      if (item.original_position < length) {
        list.splice(item.original_position - 1, 0, item);
      } else {
        let idx = -1;
        for (let i = 0; i < length; i += 1) {
          if (
            list[i].original_position > item.original_position &&
            i > 0 &&
            list[i].original_position < list[i - 1].original_position
          ) {
            idx = i;
          }
        }
        if (idx !== -1) {
          list.splice(idx, 0, item);
        } else {
          list.push(item);
        }
      }
      newList = list;
    } else {
      state.originalList = originalList.map((item) => ({
        ...item,
        is_active: item.id === areaId ? false : item.is_active,
      }));
      newList = list.filter((x) => x.id !== areaId);
    }

    state.list = newList.map((item, idx) => ({
      ...item,
      current_position: idx + 1,
    }));
  },
  [REARRANGE_AREA](state) {
    const { list } = state;
    state.list = list.map((item, idx) => ({
      ...item,
      current_position: idx + 1,
    }));
  },
  [SET_LIST](state, list) {
    state.list = list.map((item, idx) => ({
      ...item,
      current_position: idx + 1,
    }));
  },
};

export default {
  state,
  actions,
  getters,
  mutations,
};
