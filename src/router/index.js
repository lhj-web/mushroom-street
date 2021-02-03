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
    meta: {
      TabbarShow: true,
    },
  },
  {
    path: '/category',
    name: 'Category',
    component: Category,
    meta: {
      TabbarShow: true,
    },
  },
  {
    path: '/cart',
    name: 'Cart',
    component: ShoppingCart,
    meta: {
      TabbarShow: true,
    },
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: {
      TabbarShow: true,
    },
  },
  {
    path: '/detail/:iid',
    name: 'Detail',
    component: Detail,
    meta: {
      TabbarShow: false,
    },
  },

];

const router = new VueRouter({
  routes,
  mode: 'history',
});

export default router;
