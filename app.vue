<template>
  <div class="page">
    <div class="content">
      <Breadcrumbs class="breadcrumbs" />
      <h1 class="title">Комплекты стеллажных систем</h1>
      {{ productStore.sort }}
      {{ productStore.filter }}
      <div class="product-list">
        <div class="product-list__actions">
          <SortByPrice />
          <FilterByMaterial />
        </div>
        <div class="product-list__grid">
          <ProductCard
            v-for="item of productStore.filteredProducts"
            :key="item.id"
            :item="(item as IItem)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IItem } from "./types/types";
import { useProductStore } from "~/stores/ProductStore";

const productStore = useProductStore();
</script>

<style lang="scss" scoped>
.page {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.content {
  max-width: 1500px;
  width: 100%;
}

.breadcrumbs,
.title,
.product-list {
  margin-top: 32px;
}

.product-list {
  &__actions {
    display: flex;
    gap: 24px;
  }

  &__grid {
    width: 100%;
    margin-top: 40px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 48px;
    row-gap: 40px;
  }
}
</style>
~/data/products
