<template>
  <Selector
    :label="FILTER_LABEL"
    :options="OPTIONS"
    @change="(e) => setFilter(e.target.value)"
  />
</template>

<script setup lang="ts">
import { useProductStore } from "~/stores/ProductStore";
import { materials } from "~/data/materials";
import Selector from "~/components/Selector.vue";

const FILTER_LABEL = "Материал";
const OPTIONS = materials;

const { setFilter } = useProductStore();
</script>

<style lang="scss" scoped></style>
