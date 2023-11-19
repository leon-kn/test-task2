<template>
  <div class="sort">
    <label class="sort__label">Сортировать по:</label>
    <select class="sort__select">
      <option hidden></option>
      <option value="asc">Цена по возрастанию</option>
      <option value="desc">Цена по убыванию</option>
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

const isDropdownOpen = ref(false);
const selectedOption = reactive<Option>(props.initialOption);

</script>

<style lang="scss" scoped>
.sort {
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
