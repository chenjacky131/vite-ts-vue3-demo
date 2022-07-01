/*
 * shallowRef
 * 单独修改shallowRef里面对象的属性，不响应
 * triggerRef强制更新页面
 * customRef自定义ref
 */

import { Ref, shallowRef, triggerRef, customRef } from 'vue'
function Myref<T>(value: T){
  return customRef((track, trigger) => {
    return {
      get(){
        track()
        return value
      },
      set(newValue:T){
        console.log('set')
        value = newValue
        trigger()
      }
    }
  })
}
// type Obj = {
//   name: string
// }

// export let message:Ref<Obj> = shallowRef({
//   name: 'tom'
// });

export let message = Myref('tom')
export const changeMsg = () => {
  message.value = '66'
}