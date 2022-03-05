<template>
  <main>
    <Window />
    <Footer />
  </main>
</template>

<script>
import Window from "@/components/Window.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "MainComponent",
  components: {
    Window,
    Footer,
  },
};
</script>

<style lang="scss" scoped></style>
