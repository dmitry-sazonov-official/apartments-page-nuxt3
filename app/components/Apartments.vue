<template lang="pug">
.apartments
  h1 Квартиры

  .apartments__table
    BaseTable(
      :columns="COLUMNS"
      :rows="ROWS"
    )
      template(#cell-planImageUrl="{ planImageUrl }")
        img.apartments__image(:src='planImageUrl')
</template>

<script setup lang='ts'>
import BaseTable, { type Column, type Row } from "~/components/base-table/BaseTable.vue";

interface Flat {
  planImageUrl: string;
  name: string;
  square: number;
  floor: string;
  price: number;
}

const COLUMNS: Column<Flat>[] = [
  {
    columnId: "planImageUrl",
    label: "Планировка",
    width: "80px",
  },
  {
    columnId: "name",
    label: "Квартира",
    width: "1fr",
  },
  {
    columnId: "square",
    label: "S, м²",
    width: "120px",
  },
  {
    columnId: "floor",
    label: "Этаж",
    width: "120px",
  },
  {
    columnId: "price",
    label: "Цена, ₽",
    width: "120px",
  },
];

const ROWS: Row<Flat>[] = [
  {
    planImageUrl: "/images/flat-plan.webp",
    name: "3-комнатная №104",
    square: 63.1,
    floor: "1 из 17",
    price: 6630500,
  },
  {
    planImageUrl: "/images/flat-plan.webp",
    name: "3-комнатная №104",
    square: 63.1,
    floor: "1 из 17",
    price: 6630500,
  },
];
</script>

<style lang="scss" scoped>
.apartments {
  $root: &;

  &__table {
    margin-top: 48px;
  }
  
  &__image {
    width: 80px;
    aspect-ratio: 1;
    object-fit: contain;
    object-position: center;
  }
}
</style>
