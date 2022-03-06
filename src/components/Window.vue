<template>
  <div class="window">
    <!-- <Multipane> -->
    <draggable
      @change="moveArea"
      handle=".area__handle"
      v-model="list"
      tag="transition-group"
      item-key="uid"
    >
      <template #item="{ element }">
        <Area :key="element.uid" :element="element" />
      </template>
    </draggable>
    <!-- </Multipane> -->
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { MOVE_AREA, UPDATE_LIST } from "@/core/store/areas.module";
import draggable from "vuedraggable";
import Area from "@/components/Areas/Area.vue";
export default {
  name: "WindowComponent",
  data: () => ({}),
  components: {
    Area,
    draggable,
  },
  computed: {
    list: {
      get() {
        return this.$store.state.areas.list.filter((x) => x.is_active);
      },
      set(value) {
        this.$store.dispatch(UPDATE_LIST, value);
      },
    },
  },
  methods: {
    ...mapActions({
      moveArea: MOVE_AREA,
    }),
  },
};
</script>

<style lang="scss" scoped></style>
