<template>
  <div
    class="area"
    :id="`area-${element.id}`"
    :style="`width:${element.pixel_width}px`"
  >
    <div
      class="area__header"
      :class="resizing ? 'area__header--no-events' : ''"
    >
      <div class="area__handle">
        <i class="icon icon__move">&#10021;</i>
      </div>
      <div class="area__close">
        <i class="icon icon__close" @click="deActivateArea(element.id)"
          >&times;</i
        >
      </div>
    </div>
    <div
      class="area__content"
      :class="resizing ? 'area__content--no-events' : ''"
    >
      Area {{ element.id }}

      <template v-if="element.hasEditor">
        <hr />
        <Editor />
      </template>
      <template v-if="element.image">
        <hr />
        <img class="area__image" :src="element.image" alt="Image" />
      </template>
      <template v-if="element.cards && element.cards.length > 0">
        <draggable
          @change="cardsMoved"
          v-model="cards"
          tag="transition-group"
          item-key="id"
          handle=".card__draggable"
        >
          <template #item="{ element }">
            <Card @fold="cardFold" :card="element" :key="element.id" />
          </template>
        </draggable>
      </template>
    </div>
    <div
      class="area__divider"
      v-if="list.findIndex((x) => x.id === element.id) + 1 !== list.length"
      @mousedown="downMouse"
    ></div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import draggable from "vuedraggable";
import {
  DEACTIVATE_AREA,
  RESIZING_AREA,
  FOLD_CARD,
  UPDATE_CARDS,
  RESIZING_TOGGLE,
} from "@/core/store/areas.module";
import Editor from "@/components/Areas/Editor.vue";
import Card from "@/components/Areas/Card.vue";
export default {
  name: "AreaComponent",
  data() {
    return {
      area: null,
      containerWidth: 0,
      cards: [],
    };
  },
  components: {
    Editor,
    Card,
    draggable,
  },
  props: {
    element: Object,
  },
  computed: {
    ...mapState({
      list: ({ areas }) => areas.list,
      resizing: ({ areas }) => areas.resizing,
    }),
  },
  mounted() {
    this.area = document.getElementById(`area-${this.element.id}`);
    this.cards = this.element.cards;
  },
  methods: {
    ...mapActions({
      deActivateArea: DEACTIVATE_AREA,
      resizeArea: RESIZING_AREA,
      foldCard: FOLD_CARD,
      updateCards: UPDATE_CARDS,
      isResizing: RESIZING_TOGGLE,
    }),
    downMouse(evt) {
      const { target: resizer, pageX: initialPageX } = evt;
      this.isResizing(true);
      let pane = resizer.parentElement;
      const { addEventListener, removeEventListener } = window;
      let { offsetWidth: initialPaneWidth } = pane;
      const nextPaneId =
        this.list[this.list.findIndex((x) => x.id === this.element.id) + 1];
      const nextPane = document.getElementById(`area-${nextPaneId.id}`);
      const nextPaneSize = nextPane.offsetWidth;
      let size = 0;
      const resize = (initialSize, offset = 0) => {
        let paneWidth = initialSize + offset;
        const nextPaneWidth = nextPaneSize - offset;
        if (nextPaneWidth > 100 && paneWidth >= 100) {
          nextPane.style.width = nextPaneWidth + "px";
          size = pane.style.width = paneWidth + "px";
        }
      };

      const onMouseMove = ({ pageX }) => {
        resize(initialPaneWidth, pageX - initialPageX);
      };

      const onMouseUp = () => {
        this.isResizing(false);
        const width = parseFloat(size.replace("px", ""));
        this.resizeArea({
          id: this.element.id,
          sizeDiff: width - initialPaneWidth,
        });
        removeEventListener("mousemove", onMouseMove);
        removeEventListener("mouseup", onMouseUp);
      };

      addEventListener("mousemove", onMouseMove);
      addEventListener("mouseup", onMouseUp);
    },
    cardsMoved() {
      this.updateCards({ areaId: this.element.id, cards: this.cards });
    },
    cardFold({ id, status }) {
      this.foldCard({ areaId: this.element.id, id, status });
    },
  },
};
</script>

<style lang="scss" scoped></style>
