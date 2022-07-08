/*
 * reactive
 * 绑定数组和对象
 * 响应的问题已经解决方案
 */
import { reactive } from 'vue';
export let person = reactive({
    list: []
});
setTimeout(() => {
    const arr = [1, 2, 3];
    person.list = arr;
    console.log(person);
}, 1000);
//# sourceMappingURL=example5.js.map