import {createMemoryHistory, createRouter, createWebHistory} from "vue-router";
import Home from "@/components/page/Home.vue";
import ProductDetail from "@/components/page/ProductDetail.vue";
import Cart from "@/components/page/Cart.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/myCart',
            name: 'cart',
            component: Cart
        },
        {
            path: '/products/:id',
            name: 'productDetail',
            component: ProductDetail
        },
    ],
    scrollBehavior(to, from, savedPosition) {
        // always scroll to top
        return { top: 0 }
    },
})

export default router