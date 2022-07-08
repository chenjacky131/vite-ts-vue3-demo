/*
 * to系列全家桶
 * toRef把值转为响应式的:
 * 1如果原始对象不是响应式的，数据会变更，视图不会更新
 * 2如果原始对象是响应式的，数据会变更，视图也会更新
 * toRefs可以帮我们批量创建ref对象主要是方便我们解构使用
 * toRaw将响应式对象转化为普通对象
 */
import { reactive, toRaw } from "vue";
const obj_ = {
    foo: 1,
    bar: 1
};
// 如果原始对象是响应式的是会更新视图并且改变数据的
const obj = reactive(obj_);
// export const state = toRef(obj, 'bar')
// export let {foo, bar} = toRefs(obj)
export let { foo, bar } = toRaw(obj);
// export const change = () => {
//   state.value++
//   console.log(obj, state)
// }
export const change = () => {
    // foo.value++
    // bar.value--
    foo++;
    bar--;
};
//# sourceMappingURL=example8.js.map