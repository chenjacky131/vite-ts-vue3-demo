/**
 * @description: h函数，用来生成一个虚拟节点 
 * @param {String|Object} type - HTML 标签名、组件、异步组件或函数式组件。使用返回 null 的函数将渲染一个注释。此参数是必需的。
 * @param {Object} props - 一个对象，与我们将在模板中使用的 attribute、prop 和事件相对应。可选。
 * @param {String|Array|Object} children - 子代 VNode，使用 h() 生成，或者使用字符串来获取“文本 VNode”，或带有插槽的对象。可选。
 * h('div', {}, [
  'Some text comes first.',
  h('h1', 'A headline'),
  h(MyComponent, {
    someProp: 'foobar'
  })
])
 * @return {VNode}
 */
import { h, reactive } from 'vue'
export default {
  setup(props, {slots, attrs, emit }) {
    const isDiv = true
    const bgColor = 'green'
    const state = reactive({
      count: 0
    })
    function increment(){
      state.count++
    }
    return () =>   h(
        'div',
        {
          class: ['my-div', {'isDiv': isDiv}],
          style: [{color: '#f00', backgroundColor: bgColor}],
          id: 'my-div',
          onClick: increment,
          key: 'my-div'
        },
        state.count
      )
  }
}