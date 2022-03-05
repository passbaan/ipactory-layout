<template>
  <div class="area" :id="`area-${element.id}`" :style="`width:${width}%;`">
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
      startX: null,
      area: null,
      width: this.element.width,
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
  created() {
    this.area = document.getElementById("area" + this.element.id);
  },
  methods: {
    ...mapActions({
      deActivateArea: DEACTIVATE_AREA,
    }),
    downMouse(evt) {
      this.startX = evt.clientX;
      document.documentElement.addEventListener(
        "mousemove",
        this.moveMouse,
        false
      );
      document.documentElement.addEventListener("mouseup", this.upMouse, false);
    },
    moveMouse(evt) {
      console.log("moving");
      evt.clientX - this.startX;
      console.log(
        "file: Area.vue | line 62 | moveMouse | evt.clientX - this.startX",
        evt.clientX - this.startX
      );
      // .style.width = startWidth + evt.clientX - this.startX + "px";
    },
    upMouse(evt) {
      console.log("file: Area.vue | line 69 | upMouse | evt", evt);
      console.log("mouseup");
      document.documentElement.removeEventListener("mousemove", this.moveMouse);
      document.documentElement.removeEventListener("mouseup", this.upMouse);
    },
  },
};
</script>

<style lang="scss" scoped></style>
