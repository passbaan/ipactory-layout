<template>
  <div>
    <Main />
  </div>
</template>

<script>
import { mapState } from "vuex";
import Main from "@/components/Main.vue";
export default {
  name: "App",
  components: {
    Main,
  },
  computed: {
    ...mapState({
      test: ({ base }) => base.started,
    }),
  },
};
</script>

<style lang="scss">
@import "assets/styles/app.vue";
</style>
