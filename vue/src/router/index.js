import { createRouter, createWebHistory } from "vue-router";
// VIEWS
import Dashboard from '../views/Dashboard.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Reviews from '../views/Reviews.vue'
import ReviewView from '../views/ReviewView.vue'
// COMPONENTS
import DefaultLayout from '../components/DefaultLayout.vue'
import AuthLayout from '../components/AuthLayout.vue'
// STORE
import Store from '../store'

const routes = [
    {
        path: '/',
        redirect: '/dashboard',
        name: 'Dashboard',
        component: DefaultLayout,
        meta: { requiresAuth: true },
        children: [
            {
                path: '/dashboard',
                name: 'Dashboard',
                component: Dashboard
            },
            {
                path: '/reviews',
                name: 'Reviews',
                component: Reviews
            },
            {
                path: '/reviews/create',
                name: 'ReviewCreate',
                component: ReviewView
            },
            {
                path: '/reviews/:id',
                name: 'ReviewView',
                component: ReviewView
            },
        ]
    },
    {
        path: '/auth',
        redirect: '/login',
        name: 'Auth',
        component: AuthLayout,
        meta: { isGuest: true },
        children: [
            {
                path: '/login',
                name: 'Login',
                component: Login
            },
            {
                path: '/register',
                name: 'Register',
                component: Register
            },
        ]
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes
})

// router.beforeEach((to, from, next) => {
//     if (to.meta.requiresAuth && !Store.state.user.tokens){
//         next({name: 'Login'})
//     } 
//     else if (Store.state.user.token && (to.meta.isGuest)) {
//         next({name: 'Dashboard'});
//     } 
//     else {
//         next();
//     }
// })
router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth && !Store.state.user.token) {
        next({ name: "Login" });
    } else if (Store.state.user.token && to.meta.isGuest) {
        next({ name: "Dashboard" });
    } else {
        next();
    }
});

export default router;