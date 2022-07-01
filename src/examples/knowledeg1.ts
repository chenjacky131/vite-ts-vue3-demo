/*
 * 基础
 */

//  布尔值
export let isDone:boolean = false

//  数值
let deciLiteral:number = 6
let hexLiteral:number = 0xf00d
//  ES6中的二进制表示法
let binaryLiteral:number = 0b1010
//  ES6中的八进制表示法
let octalLiteral:number = 0o744
let notANumber:number = NaN
let infinityNumber:number = Infinity

//  字符串
let myName:string = 'Tom'

//  空值
function alertName():void {
  alert('My name is tom')
}

// Null 和 Undefined
let u:undefined = undefined
let n:null = null

//  任意值,未指定类型的变量会被识别为任意类型
let anything:any = 'hello'

//  联合类型
let myFavoriteNumber:string | number = '7'

// 接口（interface）
type Person = {
  name: string,
  age: number,
  sex?: string,  //  可选属性
  readonly id: number, //  只读属性
  [propName:string]: any  //  任意属性,确定属性和可选属性的类型必须是任意属性的子集，可以使用联合类型来包含其它属性
}
let tom:Person = {
  name: 'tom',
  age: 18,
  gender: 'male',
  id: 1
}

//  数组的类型
let fibonacci:number[] = [1,2,3,4]
fibonacci.push(8) //  数组的一些方法的参数也会根据数组在定义时约定的类型进行限制
// 数组的泛型
let fibonacci2:Array<number> = [1,2,3,4]
//  用接口表示数组
interface NumberArray {
  [index: number]: number
}
let fibonacci3:NumberArray = [1,2,3,4]
//  类数组
function sum(){
  let args: {
    [index: number]: number,
    length: number,
    callee: Function
  } = arguments
  let args2: IArguments = arguments //  IArguments是ts定义好的类型，还有NodeList,HTMLCollection等
}
//  any在数组中的应用
let list:any[] = ['abc', 24, { website: 'www'}]

//  函数的类型
//  函数声明
function sum2(x:number, y:number):number{
    return x+y
}
//  函数表达式,ts中的=>用来表示函数的定义
let sum3:(x:number, y:number) => number = function(x:number, y:number): number{
  return x + y  
}
//  用接口定义函数的形状
interface SearchFunc {
  (source:string,subString:string):boolean
}
let mySearch: SearchFunc;
mySearch = function(source:string, subString:string){
  return source.search(subString) !== -1
}
//  可选参数，用?表示可选参数，可选参数后不允许再出现必须参数
function sum4(x:number,y?:number):number{
  if(y){
    return x + y
  }else{
    return x
  }
}
//  参数默认值ts会将添加了默认值的参数识别为可选参数，此时就不受【可选参数必须在必须参数后面】的限制
function buildName(firstName:string, lastName:string = 'Tom'):string{
  return firstName + lastName
}
//  剩余参数
function push(array:any[], ...item:any[]){
  item.forEach(function(item){
    array.push(item)
  })
}
//  重载
function reverse(x:number):number;
function reverse(x:string):string;
function reverse(x:number|string):number|string|void{
  const transformedX:string = x.toString().split('').reverse().join()
  if(typeof x === 'number'){
    return Number(transformedX)
  }else{
    return transformedX
  }
}

//  类型断言： 值 as 类型 或 <类型>值，在tsx语法中，必须使用前者
//  将一个联合类型断言为其中一个类型
interface Cat {
  name:string,
  run():void
}
interface Fish {
  name: string,
  swim():void;
}
function isFish(animal: Cat | Fish){
  if(typeof (animal as Fish).swim === 'function'){
    return true
  }
  return false
}
//  将一个父类断言为更加具体的子类
interface ApiError extends Error{
  code:number
}
interface HttpError extends Error{
  statueCode:number
}
function isApiError(error:Error){
  if(typeof (error as ApiError).code === 'number'){
    return true
  }
  return false
}
//  将任何一个类型断言为any,不能滥用
(window as any).foo = 1
//  断言类型的限制
/*
 *  断言类型可以被断言为其中一个类型
 *  父类可以被断言为子类
 *  任何类型都可以被断言为any
 *  any可以被断言为任何类型
 *  要使得A能够断言为B，只需要A兼容B或B兼容A即可
 */
//  双重断言 A as any as C，除非迫不得已，千万别用双重断言
/*
 *  类型断言 vs 类型转换：类型断言只会影响ts编译时的类型，
 *  类型断言语句在编译结果中会被删除。若要进行类型转换，需要
 *  直接调用类型转换的方法
 */  
//  类型断言 vs 类型声明：最好优先使用类型声明，比类型断言 as 的语法更加优雅
//  类型断言 vs 泛型：泛型<T>
function getCacheData<T>(key: string):T{
  return (window as any).cache[key]
}
interface Cat{
  name: string,
  run(): void
}
const tom1 = getCacheData<Cat>('tom');
tom1.run();