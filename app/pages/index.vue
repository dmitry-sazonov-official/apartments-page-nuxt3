<template lang="pug">
.index-page
  .container-1440
    Apartments
</template>

<script setup lang='ts'>
import Apartments from "~/components/Apartments.vue"
</script>

<style lang="scss" scoped>
.index-page {
  $root: &;

  padding-block: 96px;
}
</style>
