import Home from "./pages/Home.vue";
import Product from "./pages/Product.vue";
import Login from "./pages/Login.vue";
import Register from "./pages/Register.vue";
import Productslist from "./pages/Productslist.vue";


export default [
    {
        path: '/',
        component: Home,
        name: 'home'
    },
    
    {
        path: '/Productslist',
        component: Productslist,
        name: 'Productslist'
    },

    {
        path: '/product/:id',
        component: Product,
        name: 'product',
        props: true
    },

    {
        path: '/Login',
        component: Login,
        name: Login
    },
    {
        path: '/Register',
        component: Register,
        name: 'register'
    }


]