import { createApp } from 'vue';
import App from './App.vue';
import GlobalComponent from './components/GlobalComponent.vue';
//  配置全局组件.component('Global', GlobalComponent)
createApp(App).component('Global', GlobalComponent).mount('#app');
//# sourceMappingURL=main.js.map