/*
 * shallowReactive
 * 只能对浅层的数据 如果是深层的数据只会改变值 不会改变视图
 */
import { shallowReactive } from "vue";
const obj = {
  a: 1,
  first: {
    b: 2,
    second: {
      c: 3
    }
  }
}
export const state = shallowReactive(obj);
export function change1(){
  state.a = 100
}
export function change2(){
  state.first.b = 200
  state.first.second.c = 300
  console.log(state)
}