import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from "vue-router"

import HelloUsers from "./components/HelloUsers.vue"
import HelloWorld from "./components/HelloWorld.vue"
import AboutMe from "./components/AboutMe.vue"
import HelloHome from "./components/HelloHome.vue"
import App from "./App.vue"

const routes = [
    {
        path: "/",
        component : HelloHome
    },
    {
        path: "/users",
        component: HelloUsers
    },
    {
        path: "/helloworld",
        component: HelloWorld
    },
    {
        path: "/aboutme",
        component: AboutMe
    }

];


const router = createRouter({
    history: createWebHashHistory(),
    routes
  });

const app = createApp(App);

app.use(router);

app.mount('#app')

