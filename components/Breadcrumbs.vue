<template>
  <ul class="breadcrumbs">
    <li
      class="breadcrumbs__item"
      v-for="(crumb, index) in breadcrumbs"
      :key="index"
    >
      <a
        class="breadcrumbs__link"
        :href="crumb.url"
        >{{ crumb.label }}</a
      >
      <span
        v-if="index < breadcrumbs.length - 1"
        class="breadcrumbs__separator"
        >/</span
      >
    </li>
  </ul>
</template>

<script setup lang="ts">
import { type Crumb } from "~/types/types";

const breadcrumbs: Crumb[] = [
  { label: "Главная", url: "#" },
  { label: "Система хранения", url: "#" },
  { label: "Комплекты стеллажных систем", url: "#" },
];
</script>

<style lang="scss" scoped>
.breadcrumbs {
  padding: 0;
  margin: 0;
  display: flex;
  list-style: none;

  &__item {
    display: flex;
    align-items: center;
  }

  &__link {
    color: $grey3;
    text-decoration: none;

    &:last-child {
      color: $black;
    }

    &:hover {
      color: red;
      text-decoration: underline;
    }
  }

  &__separator {
    margin: 0 0.5rem;
    color: #999;
  }
}
</style>
