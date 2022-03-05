<template>
  <div class="window">
    <draggable
      @change="moveArea"
      handle=".area__handle"
      v-model="list"
      tag="transition-group"
      item-key="current_position"
      :component-data="{ name: 'fade' }"
    >
      <template #item="{ element }">
        <Area :id="element.id" :key="element.id" :element="element" />
      </template>
    </draggable>
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
