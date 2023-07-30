<template>
  <ul>
    <li v-for="(item, index) in childrenList" :key="index">
      <div class="arrow"></div>
      <p
        :class="{
          label: true,
          active: activeArray.includes(item.id),
          hasChild: item.children,
        }"
        :style="{ paddingLeft: `${nest * 2}em` }"
        @click="
          () => {
            if (!item.children) return;
            setActiveId(item.id);
          }
        "
      >
        {{ item.label }}
      </p>

      <MenuGroup
        v-if="item.children"
        :childrenList="item.children"
        :activeArray="activeArray"
        :nest="nest + 1"
        :setActiveId="setActiveId"
      />
    </li>
  </ul>
</template>

<script setup lang="ts">
import { IOrderItem } from "../constants/orderList";

defineProps<{
  childrenList: IOrderItem[];
  activeArray: string[];
  nest: number;
  setActiveId: (value: string) => void;
}>();
</script>

<style scoped>
.label {
  display: flex;
  align-items: center;
  padding: 2px 0;
  &.hasChild {
    &:before {
      content: "";
      border-style: solid;
      border-width: 0 5px 8.7px 5px;
      border-color: transparent transparent #000 transparent;
      transform: rotate(-30deg);
      transform-origin: 5px 5px;
      transition: transform 0.3s;
    }
  }
  &:hover {
    background-color: rgba(68, 85, 102, 0.4);
  }
  &.active {
    background-color: rgba(68, 85, 102, 0.4);
    &:before {
      transform: rotate(60deg);
    }
    & + ul {
      max-height: 200px;
    }
  }
}

ul,
li {
  list-style-type: none;
  list-style-position: inside;
  margin: 0;
  padding: 0;
}
ul ul {
  max-height: 0;
  transition: max-height 0.3s;
  overflow: hidden;
}
.active {
  background: #456;
}
</style>
