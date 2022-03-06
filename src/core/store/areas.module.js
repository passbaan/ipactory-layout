import { v4 } from "uuid";
// Action types

export const ACTIVATE_AREA = "activate_area";
export const MOVE_AREA = "move_area";
export const DEACTIVATE_AREA = "deactivate_area";
export const RESIZING_AREA = "resizing_AREA";
export const UPDATE_LIST = "update_list";
export const WINDOW_WAS_RESIZED = "window_was_resized";
export const READJUST = "READJUST_AREAS";
// Mutation types
const AREA_TOGGLE = "area_toggle";
const REARRANGE_AREA = "rearrange_area";
const SET_LIST = "set_list";
const RESIZE_AREA = "resize_area";
const RECALIBRATE = "recalibrate_sizes";
const READUST_AREAS = "redistribute_areas";
const state = () => ({
  list: [],
  originalList: [
    {
      name: "Area 1",
      original_position: 1,
      current_position: 1,
      id: 1,
      is_active: false,
      width: 0,
      pixel_width: 0,
      uid: v4(),
    },
    {
      name: "Area 2",
      original_position: 2,
      current_position: 3,
      id: 2,
      is_active: false,
      width: 0,
      pixel_width: 0,
      uid: v4(),
    },
    {
      name: "Area 3",
      original_position: 3,
      current_position: 3,
      id: 3,
      is_active: false,
      width: 0,
      pixel_width: 0,
      uid: v4(),
    },
    {
      name: "Area 4",
      original_position: 4,
      current_position: 4,
      id: 4,
      is_active: false,
      width: 0,
      pixel_width: 0,
      uid: v4(),
    },
    {
      name: "Area 5",
      original_position: 5,
      current_position: 5,
      id: 5,
      is_active: false,
      width: 0,
      pixel_width: 0,
      uid: v4(),
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
  [RESIZING_AREA]({ commit }, { id, sizeDiff }) {
    commit(RESIZE_AREA, { id, sizeDiff });
  },
  [WINDOW_WAS_RESIZED]({ commit }) {
    commit(RECALIBRATE);
  },
  [READJUST]({ commit }) {
    commit(READUST_AREAS);
  },
};
const getPercentages = (list) => {
  return list.map((item) => {
    const totalWidth = window.innerWidth;
    if (item.pixel_width === 0) {
      item.pixel_width = 100;
    }
    item.width = (item.pixel_width / totalWidth) * 100;

    return {
      ...item,
    };
  });
};
const mutations = {
  [AREA_TOGGLE](state, { areaId, show }) {
    const { originalList, list } = state;
    let newList = list;
    if (show === true) {
      const item = originalList.find((i) => i.id === areaId);
      let remainingLength = 100;
      const lengthPart = parseFloat(
        (remainingLength / (newList.length + 1)).toFixed(2)
      );
      const remainingPart = 100 - lengthPart;

      newList = newList.map((item) => {
        const newPercent = parseFloat(
          ((remainingPart * item.width) / 100).toFixed(2)
        );
        return {
          ...item,
          width: newPercent,
        };
      });
      item.is_active = true;
      item.width = lengthPart;
      if (item.original_position < newList.length) {
        newList.splice(item.original_position - 1, 0, item);
      } else {
        let idx = -1;
        for (let i = 0; i < length; i += 1) {
          if (
            newList[i].original_position > item.original_position &&
            i > 0 &&
            newList[i].original_position < newList[i - 1].original_position
          ) {
            idx = i;
          }
        }
        if (idx !== -1) {
          newList.splice(idx, 0, item);
        } else {
          newList.push(item);
        }
      }
    } else {
      state.originalList = originalList.map((item) => ({
        ...item,
        is_active: item.id === areaId ? false : item.is_active,
        uid: v4(),
      }));
      newList = list.filter((x) => x.id !== areaId);
      const fullWidth = newList.reduce((acc, it) => acc + it.width, 0);
      newList = newList.map((item) => ({
        ...item,
        width: (item.width / fullWidth) * 100,
      }));
    }

    const totalWidth = window.innerWidth;
    state.list = newList.map((item, idx) => ({
      ...item,
      current_position: idx + 1,
      pixel_width: totalWidth / (100 / item.width),
      uid: v4(),
    }));
  },
  [RESIZE_AREA](state, { id, sizeDiff }) {
    const { list } = state;
    const indx = list.findIndex((l) => l.id === id);
    state.list[indx].pixel_width += sizeDiff;
    state.list[indx + 1].pixel_width -= sizeDiff;
    state.list = getPercentages(state.list);
  },
  [REARRANGE_AREA](state) {
    const { list } = state;
    state.list = list.map((item, idx) => ({
      ...item,
      current_position: idx + 1,
      uid: v4(),
    }));
  },
  [SET_LIST](state, list) {
    state.list = list.map((item, idx) => ({
      ...item,
      current_position: idx + 1,
      uid: v4(),
    }));
  },
  [RECALIBRATE](state) {
    const totalWidth = window.innerWidth;
    state.list = state.list.map((item, idx) => ({
      ...item,
      current_position: idx + 1,
      pixel_width: totalWidth / (100 / item.width),
      // uid: v4(),
    }));
  },
  [READUST_AREAS](state) {
    let remainingLength = 100;
    const lengthPart = parseFloat(
      (remainingLength / state.list.length).toFixed(2)
    );
    const totalWidth = window.innerWidth;
    state.list = state.list.map((item, idx) => ({
      ...item,
      current_position: idx + 1,
      width: lengthPart,
      pixel_width: totalWidth / (100 / lengthPart),
      // uid: v4(),
    }));
  },
};

export default {
  state,
  actions,
  getters,
  mutations,
};
