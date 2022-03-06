<template>
  <div
    class="area"
    :id="`area-${element.id}`"
    :style="`width:${element.pixel_width}px`"
  >
    <div class="area__header">
      <div class="area__handle">
        <i class="icon icon__move">&#10021;</i>
      </div>
      <div class="area__close">
        <i class="icon icon__close" @click="deActivateArea(element.id)"
          >&times;</i
        >
      </div>
    </div>
    <div class="area__content">Area {{ element.id }}</div>
    <div
      class="area__divider"
      v-if="list.findIndex((x) => x.id === element.id) + 1 !== list.length"
      @mousedown="downMouse"
    ></div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { DEACTIVATE_AREA } from "@/core/store/areas.module";

export default {
  name: "AreaComponent",
  data() {
    return {
      area: null,
      width: this.element.width,
      containerWidth: 0,
    };
  },
  props: {
    element: Object,
  },
  computed: {
    ...mapState({
      list: ({ areas }) => areas.list,
    }),
  },
  mounted() {
    this.area = document.getElementById(`area-${this.element.id}`);
    this.containerWidth = this.area.clientWidth;
  },
  methods: {
    ...mapActions({
      deActivateArea: DEACTIVATE_AREA,
    }),
    downMouse(evt) {
      const { target: resizer, pageX: initialPageX } = evt;
      let pane = resizer.parentElement;

      const { addEventListener, removeEventListener } = window;
      let initialPaneWidth = this.containerWidth;

      const resize = (initialSize, offset = 0) => {
        let paneWidth = initialSize + offset;
        return (pane.style.width = paneWidth + "px");
      };
      // Resize once to get current computed size
      let size = 0;
      const onMouseMove = function ({ pageX }) {
        size = resize(initialPaneWidth, pageX - initialPageX);
      };

      const onMouseUp = function () {
        this.width = size;
        removeEventListener("mousemove", onMouseMove);
        removeEventListener("mouseup", onMouseUp);
      };

      addEventListener("mousemove", onMouseMove);
      addEventListener("mouseup", onMouseUp);
    },
  },
};
</script>

<style lang="scss" scoped></style>
