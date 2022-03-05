<template>
  <div class="window">
    <draggable
      @change="moved"
      handle=".area__handle"
      v-model="list"
      tag="transition-group"
      item-key="current_position"
      :component-data="{ name: 'fade' }"
    >
      <template #item="{ element }">
        <Area
          :id="element.id"
          :key="element.id"
          :element="element"
          v-show="element.is_active"
        />
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
        return this.$store.state.areas.list;
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
    moved(evt) {
      const { moved } = evt;
      const { oldIndex, newIndex } = moved;
      this.moveArea({ oldIndex, newIndex });
    },
  },
};
</script>

<style lang="scss" scoped></style>
