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

//  声明文件
/*
 * 以.d.ts结尾的文件，examples/demo1.d.ts
 * declarer var jQuery:(selector: string) => any;
 * 全局变量的声明文件主要有以下几种语法：
 * declare var  //  声明全局变量
 * declare function //  声明全局方法
 * declare class  //  声明全局类
 * declare enum //  声明全局枚举类型
 * declare namespace  //  声明（含有子属性的）全局对象
 * interface和type  //  声明全局类型
 * export 导出变量
 * export 导出(含有子属性的)对象
 * export default ES6默认导出
 * export=  commonjs导出模块
 * export as namespace  UMD库声明全局变量
 * declare global 扩展全局变量
 * declare module 扩展模块
 * ///  <reference /> 三斜线指令
*/ 
 /**
  * 书写声明文件
  * 1.全局变量
  *   declare var
  *   declare function
  *   declare class
  *   declare enum
  *   declare namespace
  *   interface和type
  */
 /**
  * npm包
  * 1.看看声明文件是否存在
  *   a.与该npm包绑定在一起。package.json中有types字段或者一个index.d.ts声明文件
  *   b.发布到@types里。安装对应的@types包，安装命令是npm install @types/foo -D
  * 2.不存在时就要自己写声明文件
  *   a.创建一个node_modules/@types/foo/index.d.ts文件，存放foo模块的声明文件。
  *     这种方式一般用于零时测试，不推荐
  *   b.创建一个types目录，专门用来管理自己的声明文件，将foo的声明文件放到types/foo/index.d.ts
  *     中。这种方式需要配置下tsconfig.json中的paths和baseUrl字段。
  *   // tsconfig.json
  *   {
      "compilerOptions": {
            "module": "commonjs",
            "baseUrl": "./",
            "paths": {
                "*": ["types/*"]
            }
          }
      }
  * npm包声明文件主要有以下几种语法：
      1.export 
      2.export namespace
      3.export default
      4.export=
  */
/**
 * UMD库
 * 相比于npm包的类型声明文件，我们需要额外声明一个全局变量
 * export as namespace
 */
/**
 * 直接扩展全局变量
 * interface String {
    prependHello(): string;
  }

  'foo'.prependHello();
  通过声明合并，使用interface String即可给String添加属性或方法
 */
/**
 * 在npm包或UMD库中扩展全局变量
 * // types/foo/index.d.ts
      declare global {
          interface String {
              prependHello(): string;
          }
      }
      export {};

      // src/index.ts
      'bar'.prependHello();
 */
/**
 * 模块插件
 * 如果需要扩展模块，需要在类型声明中先引用原有模块，再使用declare module扩展原有模块
 * // types/moment-plugin/index.d.ts

  import * as moment from 'moment';

  declare module 'moment' {
      export function foo(): moment.CalendarKey;
  }
  // src/index.ts

  import * as moment from 'moment';
  import 'moment-plugin';

  moment.foo();
 */
/**
 * 声明文件中的依赖
 *  1.书写一个全局变量的声明文件，声明文件中是不允许出现import,export关键字的
 *    // types/jquery-plugin/index.d.ts

      /// <reference types="jquery" />

      declare function foo(options: JQuery.AjaxSettings): string;
      // src/index.ts

      foo({});
      //  注意，三斜线指令必须放在文件的最顶端，三斜线指令的前面只允许出现单行或多行注释。
    2.依赖一个全局变量的声明文件，由于全局变量不支持通过import导入，当然也就必须使用三斜杠线指令
      来引入
      // types/node-plugin/index.d.ts

      /// <reference types="node" />

      export function foo(p: NodeJS.Process): string;
      // src/index.ts

      import { foo } from 'node-plugin';

      foo(global.process);
    3.拆分声明文件
      // node_modules/@types/jquery/index.d.ts

      /// <reference types="sizzle" />
      /// <reference path="JQueryStatic.d.ts" />
      /// <reference path="JQuery.d.ts" />
      /// <reference path="misc.d.ts" />
      /// <reference path="legacy.d.ts" />

      export = jQuery;
      //  types用于声明对另一个库的依赖，而path用于声明对另一个文件的依赖
 */

/**
 * 自动生成声明文件
 * 如果库的源码本身就是用ts写的，就可以在配置文件中自动生成.d.ts声明文件
 * 
 * // tsconfig.json
 * {
    "compilerOptions": {
        "module": "commonjs",
        "outDir": "lib",
        "declaration": true,
        "declarationDir": '', //  设置生成 .d.ts 文件的目录
        "declarationMap": '', //  对每个 .d.ts 文件，都生成对应的 .d.ts.map（sourcemap）文件
        "emitDeclarationOnly": '', // 仅生成 .d.ts 文件，不生成 .js 文件
    }
  }
 */

/**
 * 发布声明文件
 *  1.将声明文件和源码放在一起
 *    第一种方式是给 package.json 中的 types 或 typings 字段指定一个类型声明文件地址。
 *     {
        "name": "foo",
        "version": "1.0.0",
        "main": "lib/index.js",
        "types": "foo.d.ts",
        }
        如果没有指定 types 或 typings，那么就会在根目录下寻找 index.d.ts 文件，
        将它视为此库的类型声明文件。如果没有找到 index.d.ts 文件，那么就会寻找入
        口文件（package.json 中的 main 字段指定的入口文件）是否存在对应同名不同
        后缀的 .d.ts 文件。比如 package.json 是这样时：
        {
            "name": "foo",
            "version": "1.0.0",
            "main": "lib/index.js"
        }
        就会先识别 package.json 中是否存在 types 或 typings 字段。发现不存在，
        那么就会寻找是否存在 index.d.ts 文件。如果还是不存在，那么就会寻找是否
        存在 lib/index.d.ts 文件。假如说连 lib/index.d.ts 都不存在的话，就会
        被认为是一个没有提供类型声明文件的库了。
    2.将声明发布到@types下
      如果是给别人的仓库添加类型声明文件，就需要将声明文件发布到@types下
      与普通的 npm 模块不同，@types 是统一由 DefinitelyTyped 管理的。
      要将声明文件发布到 @types 下，就需要给 DefinitelyTyped 创建一个
       pull-request，其中包含了类型声明文件，测试代码，以及 tsconfig.json 
       等。pull-request 需要符合它们的规范，并且通过测试，才能被合并，稍后
       就会被自动发布到 @types 下。
 * 
 */
/**
 * 内置对象
 * 1.ECMAScript的内置对象：Boolean、Error、Date、RegExp等
 * 2.DOM和BOM的内置对象：Document、HTMLElement、Event、NodeList等
 * 3.TypeScript核心库的定义文件
 * 4.用TypeScript写Node.js
 * Node.js 不是内置对象的一部分，如果想用 TypeScript 写 Node.js，则
   需要引入第三方声明文件：
   npm install @types/node --save-dev
 */
