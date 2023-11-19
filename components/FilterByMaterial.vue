<template>
  <div class="filter">
    <label class="filter__label">Материал:</label>
    <select class="filter__select">
      <option hidden></option>
      <option value="1">Дерево</option>
      <option value="2">Металл</option>
    </select>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from "vue";

interface Option {
  label: string;
  value: any;
}

const props = defineProps({
  initialOption: {
    type: Object as PropType<Option>,
    default: () => ({ label: "Select", value: null }),
  },
  selectorOptions: {
    type: Array,
    default: () => [],
  },
});
</script>

<style lang="scss" scoped>
.filter {
  display: flex;
  flex-direction: column;
  max-width: 288px;
  width: 100%;

  &__label {
    margin-left: 16px;
    color: $grey2;
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0.03em;
    text-align: left;
  }

  &__select {
    margin-top: 6px;
    padding-left: 16px;
    height: 40px;
    background-color: $secondary;
    border: none;
    appearance: none;
    background-image: url("~/assets/svg/arrow.svg");
    background-repeat: no-repeat;
    background-position: right 1rem top 50%;
    background-size: 1rem auto;
    font-family: $font-secondary;
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0.03em;
    text-align: left;
  }
}
</style>
