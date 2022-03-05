<template>
  <div class="area">
    <div class="area__header">
      <div class="area__handle">
        <i class="icon icon__move">&#10021;</i>
      </div>
      <div class="area__close">
        <i class="icon icon__close" @click="hide">&times;</i>
      </div>
    </div>
    <div class="area__content">Area {{ id }}</div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { DEACTIVATE_AREA } from "@/core/store/areas.module";

export default {
  name: "AreaComponent",
  props: {
    id: Number,
  },
  methods: {
    ...mapActions({
      deActivateArea: DEACTIVATE_AREA,
    }),
    hide() {
      console.log("here");
      this.deActivateArea(this.id);
    },
  },
};
</script>

<style lang="scss" scoped></style>
