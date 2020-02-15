import Vue from 'vue'
import VueRouter from 'vue-router'


//Pages
import AppLayout from './pages/AppLayout.vue';
import HomePage from './pages/HomePage.vue';
import AboutPage from './pages/AboutPage.vue';

Vue.use(VueRouter)

const router = new VueRouter({
	routes          : [
        {
            path : '/',
            component : AppLayout,
            children : [
                {
                    path : '/home',
                    component : HomePage,
                },
                {
                    path : '/about',
                    component : AboutPage,
                },
                {
                    path : '*',
                    redirect: '/home'
                }
            ]
        }
    ]
});

const app = new Vue({
    router,
    el : '#app'
});
