import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ChildrenView from "../views/ChildrenView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/routers",
      components: {
        default: HomeView,
        middle: ChildrenView,
        bottom: HomeView,
      },
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import("../components/NotFound.vue"),
    },
    {
      // path: "/about/:id(\\d+)",
      // path: "/about/:id/posts/:postid",
      path: "/about/:id?",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
      children: [
        {
          path: "children",
          // component: ChildrenView,
          component: HomeView,
        },
      ],
    },
  ],
});

export default router;
