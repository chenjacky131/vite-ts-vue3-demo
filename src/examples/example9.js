/*
 * watchEffect高级侦听器
 * 立即执行传入的一个函数，同时响应式追踪其依赖，并在其依赖变更时重新运行该函数。
 * 副作用刷新机制flush一般使用post
 * pre：组件更新前执行，sync：强制效果始终同步触发，post：组件更新后执行
 */
import { ref, watchEffect } from 'vue';
export let message = ref('');
export let message2 = ref('');
const stop = watchEffect((oninvalidate) => {
    console.log('message', message.value);
    console.log('message2', message2.value);
    oninvalidate(() => {
        console.log('before');
    });
}, {
    flush: 'post',
    onTrigger(e) {
        debugger;
    }
});
export const stopWatch = () => stop();
//# sourceMappingURL=example9.js.map