/*
 * 断言判断
 * 值 as 类型
 * <类型>值
 */

import { ref, Ref } from 'vue'
export let message:Ref<string> = ref('我是message');
export const changeMsg = () => {
  message.value = 'changed msg'
}