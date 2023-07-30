<template>
  <nav>
    <MenuGroup
      :childrenList="orderList"
      :activeArray="activeArray"
      :nest="0"
      :setActiveId="setActiveId"
    />
  </nav>
  <select @change="handleSelectChange($event)">
    <option v-for="item of flattenOrderList" :key="item.id" :value="item.id">
      {{ item.label }}
    </option>
  </select>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import MenuGroup from "./MenuGroup.vue";
import { orderList } from "../constants/orderList";
import { getOrderListPath } from "../utils/getOrderListPath";
import { getFlattenOrderList } from "../utils/getFlattenOrderList";

defineProps();

const activeId = ref(localStorage.getItem("lastDrinks") || "");
const activeArray = computed(() => getOrderListPath(activeId.value, orderList));
const flattenOrderList = computed(() => getFlattenOrderList(orderList));
const setActiveId = (value: string) => {
  activeId.value = value;
  localStorage.setItem("lastDrinks", value);
};
const handleSelectChange = (event: any) => {
  setActiveId(event.target.value);
};
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
