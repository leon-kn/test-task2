<template>
  <div class="card">
    <div
      v-if="isDiscount"
      class="card__plate"
    >
      <p class="card__plate-text">Скидка</p>
    </div>
    <div class="card__image-container">
      <img
        class="card__image"
        :src="item?.image?.url"
        alt="product photo"
      />
    </div>
    <p
      v-if="item.code"
      class="card__article"
    >
      {{ item?.code }}
    </p>
    <p class="card__title">{{ item?.name }}</p>
    <div class="card__price">
      <p
        v-if="isDiscount"
        class="card__price-old"
      >
        {{ formattedOldPrice }}₽
      </p>
      <p class="card__price-new">{{ formattedCurrentPrice }}₽</p>
    </div>
    <ClientOnly>
      <div
        class="card__btn-cart"
        @click="addProductInCart"
      >
        <img
          v-if="isProductInCart"
          src="~/assets/svg/success.svg"
        />
        <img
          v-else
          src="~/assets/svg/cart.svg"
        />
      </div>
      <div
        class="card__btn-favor"
        @click="addToFavorite"
      >
        <img
          v-if="isFavorite"
          src="~/assets/svg/favorite-active.svg"
        />
        <img
          v-else
          src="~/assets/svg/favorite.svg"
        />
      </div>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import type { IProduct } from "~/types/types";
import { useLocalStorageStore } from "~/stores/LocalStorageStore";
import { storeToRefs } from "pinia";

const localStorageStore = useLocalStorageStore();
const { cart, favorite } = storeToRefs(localStorageStore);

const props = defineProps<{
  item: IProduct;
}>();

const isDiscount = computed<boolean>(() => {
  return !!props.item?.price.old_price;
});

const formattedOldPrice = computed<number | undefined>(() => {
  if (isDiscount) {
    return Number(props.item?.price.old_price?.toFixed(0));
  }
});

const formattedCurrentPrice = computed<number>(() => {
  return Number(props.item?.price.current_price.toFixed(0));
});

const isProductInCart = computed(() => {
  return !!cart.value.find((product) => product.id === props.item.id);
});

const addProductInCart = () => {
  if (!isProductInCart.value) {
    localStorageStore.addToCart(props.item);
  }
};

const isFavorite = computed(() => {
  return !!favorite.value.find((product) => product.id === props.item.id);
});

const addToFavorite = () => {
  if (!isFavorite.value) {
    localStorageStore.addToFavorite(props.item);
  }
};
</script>

<style lang="scss" scoped>
.card {
  max-width: 336px;
  width: 100%;
  padding: 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 1px solid $greyBorders;

  &__plate {
    width: 81px;
    height: 24px;
    position: absolute;
    left: 0;
    background-color: $attention;
    display: flex;
    justify-content: center;
    align-items: center;

    &-text {
      font-family: $font-secondary;
      color: $white;
      font-size: 14px;
      line-height: 18px;
      letter-spacing: 0.01em;
    }
  }

  &__image-container {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  &__image {
    width: 100%;
  }

  &__article {
    margin-top: 23px;
    color: $grey1;
    font-size: 10px;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: 0.02em;
    text-align: left;
  }

  &__title {
    margin-top: 6px;
    font-size: 16px;
    font-weight: 500;
    line-height: 22px;
    letter-spacing: 0.02em;
    text-align: left;
  }

  &__price {
    margin-top: 10px;
    display: flex;
    gap: 10px;

    &-old {
      color: $grey1;
      font-size: 16px;
      font-weight: 400;
      line-height: 22px;
      letter-spacing: 0.02em;
      text-align: left;
      text-decoration: line-through;
    }

    &-new {
      font-size: 16px;
      font-weight: 400;
      line-height: 22px;
      letter-spacing: 0.02em;
      text-align: left;
    }
  }

  &__btn-cart {
    position: absolute;
    right: 50px;
    bottom: 10px;
    cursor: pointer;
  }

  &__btn-favor {
    position: absolute;
    right: 14px;
    bottom: 9px;
    cursor: pointer;
  }
}
</style>
~/stores/LocalStorageStore
