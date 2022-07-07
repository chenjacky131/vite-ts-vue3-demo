/**
 * 进阶
 */

/**
 * 类型别名：类型别名用来给一个类型起个新名字
 *  type Name = string;
    type NameResolver = () => string;
    type NameOrResolver = Name | NameResolver;
    function getName(n: NameOrResolver): Name {
        if (typeof n === 'string') {
            return n;
        } else {
            return n();
        }
    }
 */

/**
 * 字符串字面量类型：字符串字面量类型用来约束取值只能是某几个字符串中的一个
 *  type EventNames = 'click' | 'scroll' | 'mousemove';
    function handleEvent(ele: Element, event: EventNames) {
        // do something
    }

    handleEvent(document.getElementById('hello'), 'scroll');  // 没问题
    handleEvent(document.getElementById('world'), 'dblclick'); // 报错，event 不能为 'dblclick'
 */

/**
 * 元组：数组合并了相同类型的变量而元组合并了不同类型的变量
 *  1.当直接对元组类型的变量进行初始化或者赋值的时候，需要提供所有元组类型中指定的项。
 *  2.当添加越界元素时，它的类型会被限制为元组中每个类型的联合类型
 */

/**
 * 枚举：枚举（Enum）类型用于取值被限定在一定范围内的场景，比如一周只能由七天，颜色限定为红绿蓝等
 * enum Days {Sun, Mon, Tue, Wed, Thu, Fri, Sat}
 * 枚举成员会被赋值为从 0 开始递增的数字，同时也会对枚举值到枚举名进行反向映射：
 * 手动赋值
 *  a.没有被赋值的项会接着上一个枚举项递增
 *  b.不要出现覆盖的情况
 *  c.手动赋值的枚举项可以不是数字，此时需要使用类型断言来无视tsc的类型检查
 *  d.手动赋值的枚举项也可以为小数或者负数，此时后续未赋值的项递增步长为1
 * 常数项和计算所得项
 *  a.如果紧接在计算所得项后面的是未手动赋值的项，那么它就会因为无法获得初始值而报错
 * 常数枚举
 *  a.使用const enum定义的枚举类型
 *  b.不能包含计算成员
 * 外部枚举
 *  a.使用declare enum定义的枚举类型
 *  b.用于编译时的检查，编译结果中会被删除
 *  c.同时使用declare和const也是可以的
 */

/**
 * 类
 * 类的概念
 *  a.类(Class):定义了一件事物的抽象特点，包含它的属性和方法
 *  b.对象(Object):类的实例，通过new生成
 *  c.面向对象(OOP)的三大特性：封装、继承、多态
 *  d.封装(Encapsulation):将对数据的操作细节隐藏起来，只暴露对外的接口.外界调用段不需要
 *    知道细节，就能通过对外提供的接口来访问该对象，同时也保证了外界无法任意更改对象内部
 *    的数据。
 *  e.继承(inheritance):字类继承父类，字类除了拥有父类的所有特性外，还有一些更具体的特性
 *  f.多态(Polymorphism):由继承而产生了相关的不同的类，对同一个方法可以有不同的响应。比如
 *    Cat和Dog都继承自Animal，但是分别实现了自己的eat方法。此时针对某一个实例，我们无需了解
 *    它事Cat还是Dog，就可以调用eat方法，程序会自动判断出来应该如何执行eat
 *  g.存取器(getter&setter):用以改变属性的读取和赋值行为
 *  h.修饰符(Modifiers):修饰符是一些关键字，用于限定成员或类型的性质。比如public标识公有属性
 *    和方法
 *  i.抽象类(Abstract Class):抽象类是供其他类继承的基类，抽象类不允许被实例化。抽象类中的抽象
 *    抽象方法必须在字类中被实现
 *  j.接口(interface):不同类之间公有的属性或方法，可以抽象成一个接口。接口可以被类实现(implements)。
 *    一个类只能继承自另一个类，但是可以实现多个接口
 */
/**
 * ES6中类的用法
    a.属性和方法
       class Animal{
           public name;
           constructor(name){
               this.name = name
           }
           sayHi(){
               return `My name is ${this.name}`;
           }
       }
       let a = new Animal('tom');
       console.log(a.sayHi()); //  My name is tom
    b.类的继承
       class Cat extends Animal{
           constructor(name){
               super(name);    //  调用父类的constructor(name)
               console.log(this.name)
           }
           sayHi(){
               return 'Meow, ' + super.sayHi();    //  调用父类方法
           }
       }
       let c = new Cat('harry');
       console.log(c.sayHi()); //  Meow, My name is harry
    c.存取器
      class Animal{
        constructor(name){
            this.name = name
        }
        get name(){
            return 'Jack'
        }
        set name(value){
            console.log('setter: '+ value)
        }
      }
      let a = new Animal('Kitty')
      a.name = 'tom';   //  setter: tom
      console.log(a.name);  //  Jack
    d.静态方法
      class Animal{
        static isAnimal(a){
            return a instanceof Animal
        }        
      }
      let a = new Animal('tom')
      Animal.isAnimal(a);   //  true
      a.isAnimal(a);    //  TypeError: a.isAnimal is not a function
 */
/**
 * ES7中类的方法
      a.实例属性
      class Animal{
        name = 'Jack';
        constructor(){}
      }
      let a = new Animal()
      console.log(a.name);  //  Jack
      b.静态属性
      class Animal{
        static num = 42
        constructor(){}
      }
      console.log(Animal.num);  //  42
 */
/**
 * TypeScript中类的方法
      1.public private 和 protected
        a.public修饰的属性或方法是公有的，可以在任何地方访问到，默认所有属性和方法都是public的
        b.private修饰的属性或方法是私有的，不能在声明它的类的外部访问
        c.protected修饰的属性或方法是手保护的，它和private类似，区别是它在子类中也是允许被访问的
        class Animal{
            public name;
            public constructor(name){
                this.name = name
            }
        }
        let a = new Animal('tom')
        console.log(a.name);    //  tom
        a.name = 'harry'
        console.log(a.name);    //  harry
      2.参数属性
        修饰符和readonly还可以使用在构造函数参数中，等同于类中定义该属性同时给该属性赋值，是代码
        更简洁
      3.readonly
        只读属性关键字，只允许出现在属性声明或索引签名或构造函数中。注意如果readonly和其他访问修饰符
        同时存在的话，需要写在其后面。
      4.抽象类
        a.abstract用于定义抽象类和其中的抽象方法。
        b.抽象类不允许被实例化。
        c.抽象类中的抽象方法必须被子类实现。
 */
/**
 * 类的类型
 * 给类加上TypeScript的类型很简单，与接口类似
 */
