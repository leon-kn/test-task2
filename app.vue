<template>
  <div class="page">
    <div class="content">
      <Breadcrumbs class="breadcrumbs" />
      <section class="product-list">
        <h1 class="title">Комплекты стеллажных систем</h1>
        <div class="product-list__actions">
          <SortByPrice />
          <FilterByMaterial />
        </div>
        <div class="product-list__grid">
          <ProductCard
            v-for="item of filteredProducts"
            :key="item.id"
            :item="(item as IProduct)"
          />
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IProduct } from "./types/types";
import { useProductStore } from "~/stores/ProductStore";

const productStore = useProductStore();
const { filteredProducts } = storeToRefs(productStore);
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
.product-list,
.product-list__actions {
  margin-top: 32px;
}

.product-list {
  .title {
    font-family: $font-secondary;
    font-size: 36px;
    font-weight: 600;
    line-height: 48px;
    letter-spacing: 0px;
  }

  &__actions {
    display: flex;
    gap: 24px;
  }

  &__grid {
    justify-items: center; 
    width: 100%;
    margin-top: 40px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 48px;
    row-gap: 40px;
  }
}

@media (max-width: $xl) {
  .product-list__grid {
    grid-template-columns: repeat(3, 1fr);

  }
}

@media (max-width: $lg) {
  .product-list__grid {
    grid-template-columns: repeat(2, 1fr);

  }
}

@media (max-width: $sm) {
  .product-list__grid {
    grid-template-columns: 1fr;
  }
}
</style>
