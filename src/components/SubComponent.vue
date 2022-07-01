<script setup lang="ts">
import { reactive } from 'vue';
const list = reactive<number[]>([6,6,6,6,6,6])
const emit = defineEmits(['on-click'])
const clickTap = () => {
  emit('on-click', list)
}
defineExpose({
  list
})
</script>
<template>
  <div>
    menu <button @click="clickTap">派发emit</button>
  </div>
</template>