import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/home",
    component: () => import("../views/Home.vue"),
  },

  {
    path: "/button",
    component: () => import("../views/ButtonDemo.vue"),
  },

  {
    path: "/confirm",
    component: () => import("../views/ConfirmDemo.vue"),
  },

  {
    path: "/countdown",
    component: () => import("../views/CountdownDemo.vue"),
  },

  {
    path: "/custom-button",
    component: () => import("../views/CustomButtonDemo.vue"),
  },

  {
    path: "/dialog",
    component: () => import("../views/DialogDemo.vue"),
  },

  {
    path: "/infinite",
    component: () => import("../views/InfiniteDemo.vue"),
  },

  {
    path: "/input",
    component: () => import("../views/InputDemo.vue"),
  },

  {
    path: "/message",
    component: () => import("../views/MessageDemo.vue"),
  },

  {
    path: "/navbar",
    component: () => import("../views/NavbarDemo.vue"),
  },

  {
    path: "/popover",
    component: () => import("../views/PopoverDemo.vue"),
  },

  {
    path: "/popup",
    component: () => import("../views/PopupDemo.vue"),
  },

  {
    path: "/search",
    component: () => import("../views/SearchDemo.vue"),
  },

  {
    path: "/svg-icon",
    component: () => import("../views/SvgiconDemo.vue"),
  },

  {
    path: "/waterfall",
    component: () => import("../views/WaterfallDemo.vue"),
  },

  {
    path: "/",
    redirect: "/home",
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
