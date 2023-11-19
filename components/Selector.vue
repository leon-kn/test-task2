<template>
  <div class="select">
    <label class="select__label">{{ label }}:</label>
    <select class="select__select">
      <option hidden></option>
      <option
        v-for="option of options"
        :key="option.id"
        :value="option.id"
      >
        {{ option.name }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
import type { IMaterial } from "~/types/types";

const props = defineProps({
  options: {
    type: Array as PropType<IMaterial[]>,
  },
  label: String,
});
</script>

<style lang="scss" scoped>
.select {
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
