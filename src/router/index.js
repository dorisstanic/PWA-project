import Vue from "vue";
import VueRouter from "vue-router";
import MyBooks from "../views/MyBooks.vue";
import BuyBooks from "../views/BuyBooks.vue";
import About from "../views/About.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "MyBooks",
    component: MyBooks,
  },
  {
    path: "/buy",
    name: "BuyBooks",
    component: BuyBooks,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
