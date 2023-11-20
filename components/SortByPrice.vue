<template>
  <Selector
    :label="FILTER_LABEL"
    :options="OPTIONS"
    @change="(e) => setSort(e.target.value)"
  />
</template>

<script setup lang="ts">
import { useProductStore } from "~/stores/ProductStore";
import Selector from "~/components/Selector.vue";

const FILTER_LABEL = "Сортировать по";
const OPTIONS = [
  { id: "asc", name: "Цена по возрастанию" },
  { id: "desc", name: "Цена по убыванию" },
];

const { setSort } = useProductStore();
</script>

<style lang="scss" scoped></style>
