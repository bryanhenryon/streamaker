import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Tracks from "../views/Tracks.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/tracks",
    name: "Tracks",
    component: Tracks
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
