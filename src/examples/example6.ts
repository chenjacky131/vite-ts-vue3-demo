/*
 * readonly
 */
import { reactive, readonly } from "vue";
export const person = reactive({count: 1})
export const copy = readonly(person)
copy.count++; //  只读状态，不能修改属性值