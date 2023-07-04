import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from "vue-router"

import HelloUsers from "./components/HelloUsers.vue"
import HelloWorld from "./components/HelloWorld.vue"
import App from "./App.vue"

const routes = [
    {
        path: "/",
        component : App
    },
    {
        path: "/users",
        component: HelloUsers
    },
    {
        path: "/helloworld",
        component: HelloWorld
    }

];


const router = createRouter({
    history: createWebHashHistory(),
    routes
  });

const app = createApp(App);

app.use(router);

app.mount('#app')

