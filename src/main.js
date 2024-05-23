import { createApp } from 'vue'
import './style.css'
import App from './App.vue';
import components from './components/UI'

const app = createApp(App)
components.forEach(element => {
  //  console.log(element);
    app.component(element.name, element)
});

app.mount('#app')
