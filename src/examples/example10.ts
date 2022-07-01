/*
 * defineExpose
 * 
 */
import SubComponentVue from '../components/SubComponent.vue';
import { ref } from 'vue'
export const menus = ref(null)
export const getList = (list:number[]) => {
  console.log(JSON.parse(JSON.stringify(list)), '父组件接收子组件传过来的list') //  转换proxy对象为普通对象，也可以用toRaw
  console.log(menus.value)  //  获取不到值
}
export const Menu = SubComponentVue