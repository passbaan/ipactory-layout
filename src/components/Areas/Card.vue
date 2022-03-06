<template>
  <div class="card">
    <div class="card__header">
      <span class="card__draggable">&#9776; {{ card.title }}</span>
      <span class="card__fold" @click="collapse">&darr;</span>
    </div>
    <div
      class="card__content"
      :class="card.fold_status ? 'card__content--hide' : ''"
    >
      {{ card.content }}
    </div>
  </div>
</template>

<script>
export default {
  name: "AreaCard",
  props: {
    card: Object,
  },
  data() {
    return {
      collapsed: false,
    };
  },
  methods: {
    collapse() {
      this.$emit("fold", { id: this.card.id, status: !this.card.fold_status });
    },
  },
};
</script>

<style lang="scss" scoped></style>
