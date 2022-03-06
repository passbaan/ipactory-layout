<template>
  <div class="card">
    <div class="card__header">
      <span class="card__draggable">&#9776; {{ card.title }}</span>
      <span class="card__fold" @click="collapse">&darr;</span>
    </div>
    <div class="card__content" :class="collapsed ? 'card__content--hide' : ''">
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
      this.collapsed = !this.collapsed;
    },
  },
};
</script>

<style lang="scss" scoped></style>
