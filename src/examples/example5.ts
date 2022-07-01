/*
 * reactive
 * 绑定数组和对象
 * 响应的问题已经解决方案
 */

import { reactive } from 'vue'
// export let person = reactive({
//   name: 'tom'
// })
// person.name = '666'
// export let person = reactive<number[]>([])
// setTimeout(() => {  //  直接给person赋值数组，不响应，能打出修改的值
//   person = [1,2,3]
//   console.log(person)
// }, 1000);

//  解决方案1
// setTimeout(() => {
//   const arr = [1,2,3]
//   person.push(...arr)
//   console.log(person)
// }, 1000);

//  解决方案2
type Person = {
  list?:Array<number>
}
export let person = reactive<Person>({
  list: []
})
setTimeout(() => {
  const arr = [1,2,3]
  person.list = arr
  console.log(person)
}, 1000)