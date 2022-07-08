/*
 * 断言判断
 * 值 as 类型
 * <类型>值
 */
import { ref } from 'vue';
export let message = ref('我是message');
export const changeMsg = () => {
    message.value = 'changed msg';
};
//# sourceMappingURL=example1.js.map