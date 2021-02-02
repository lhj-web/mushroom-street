import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const Home = () => import('views/home/Home.vue');
const Category = () => import('views/category/Category.vue');
const ShoppingCart = () => import('views/shoppingCart/ShoppingCart.vue');
const Profile = () => import('views/profile/Profile.vue');
const Detail = () => import('views/detail/Detail.vue');

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/category',
    name: 'Category',
    component: Category,
  },
  {
    path: '/cart',
    name: 'Cart',
    component: ShoppingCart,
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
  },
  {
    path: '/detail/:iid',
    name: 'Detail',
    component: Detail,
  },

];

const router = new VueRouter({
  routes,
  mode: 'history',
});

export default router;
