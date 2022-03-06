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

    <textarea name="config" id="config" cols="30" rows="5" v-model="jsonText">
    </textarea>
    <button class="footer__btn" @click="readjust">Adjust Structure</button>
  </footer>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { ACTIVATE_AREA, READJUST, READ_JSON } from "@/core/store/areas.module";
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
    jsonText: {
      get() {
        return this.$store.state.areas.json;
      },
      set(value) {
        console.log("file: Footer.vue | line 43 | set | value", value);
        this.$store.dispatch(READ_JSON, value);
      },
    },
    ...mapState({
      list: ({ areas }) => areas.originalList,
    }),
  },
};
</script>

<style lang="scss" scoped></style>
