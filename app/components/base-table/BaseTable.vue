<template lang="pug">
table.base-table
  thead.base-table__header
    th.base-table__row
      td.base-table__header-cell(
        v-for="column in columns"
        :key="column.columnId"
      )
        slot(:name="`header-cell-${String(column.columnId)}`" v-bind="column")
          p {{ column.label }}

  tbody.base-table__body
    tr.base-table__row(
      v-for="(row, index) in rows"
      :key="index"
    )
      td.base-table__cell(
        v-for="column in columns"
        :key="column.columnId"
      )
        slot(:name="`cell-${String(column.columnId)}`" v-bind="row")
          p {{ row[column.columnId] }}
</template>

<script setup lang='ts' generic="TableObject">
import { computed, type CSSProperties } from "vue";

export interface Column<T> {
  readonly columnId: keyof T;
  readonly label: string;
  readonly width?: `${number}px` | `${number}fr` | "auto";
}

export type Row<T> = {
  readonly [key in keyof T]: T[key];
};

type SlotCells<T> = {
  [key in keyof T & string as `header-cell-${key}`]: (props: T) => void;
} & {
  [key in keyof T & string as `cell-${key}`]: (props: T) => void;
};

const {
  columns,
  rows,
} = defineProps<{
  columns: Column<TableObject>[];
  rows: Row<TableObject>[];
}>();

defineSlots<SlotCells<TableObject>>();

const rowGridAutoColumns = computed((): CSSProperties["grid-auto-columns"] => {
  const columnsValues: Column<TableObject>["width"][] = columns.map((column) => {
    return column.width || "auto";
  });

  return columnsValues.join(" ");
});
</script>

<style lang="scss" scoped>
.base-table {
  $root: &;

  display: grid;
  grid-template-columns: 1fr;
  border-bottom: 1px solid rgba($colorBlack, 0.1);

  &__header {
    text-align: left;
    #{$root}__row {
      padding-bottom: 16px;
    }
  }

  &__body {
    #{$root}__row {
      padding-block: 16px;
      border-top: 1px solid rgba($colorBlack, 0.1);
    }
  }

  &__row {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: v-bind('rowGridAutoColumns');
    gap: 0 20px;
  }
}
</style>
