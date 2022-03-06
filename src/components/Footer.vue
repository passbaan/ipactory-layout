<template>
  <footer class="footer">
    <template v-for="item in list" :key="item.id">
      <button
        class="footer__btn"
        :class="item.is_active ? 'footer__btn--disabled' : ''"
        :disabled="item.is_active"
        @click="addArea"
        :data-area-id="item.id"
      >
        Add Area {{ item.id }}
      </button>
    </template>

    <textarea
      readonly
      name="config"
      id="config"
      cols="30"
      rows="5"
      v-model="jsonText"
    >
    </textarea>
    <button class="footer__btn" @click="readjust">Adjust Structure</button>
  </footer>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { ACTIVATE_AREA, READJUST } from "@/core/store/areas.module";
export default {
  name: "FooterComponent",
  methods: {
    ...mapActions({
      activateArea: ACTIVATE_AREA,
      readjust: READJUST,
    }),
    addArea(e) {
      const { target } = e;
      const id = target.getAttribute("data-area-id");
      this.activateArea(parseInt(id, 10));
    },
  },
  computed: {
    ...mapState({
      list: ({ areas }) => areas.originalList,
      jsonText: ({ areas }) => areas.json,
    }),
  },
};
</script>

<style lang="scss" scoped></style>
