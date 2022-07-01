<script setup lang="ts">
import { menus, getList, Menu } from '../examples/example10';
</script>

<template>
  <div>
    <Menu ref="menus" @on-click="getList"/>
    <Global />
  </div>
</template>

<style scoped>

</style>
