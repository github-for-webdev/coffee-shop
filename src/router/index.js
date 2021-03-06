import Vue from "vue";
import VueRouter from "vue-router";

import HeroView from "@/views/HeroView.vue";
import OurCoffeeView from "@/views/OurCoffeeView.vue";
import ForYourPleasureView from "@/views/ForYourPleasureView.vue";
import ContactUsView from "@/views/ContactUsView.vue";
import ThankYouView from "@/views/ThankYouView.vue";
import GoodsItemView from "@/views/GoodsItemView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: HeroView,
  },
  {
    path: "/our-coffee",
    component: OurCoffeeView,
  },
  {
    path: "/for-your-pleasure",
    component: ForYourPleasureView,
  },
  {
    path: "/contact-us",
    component: ContactUsView,
  },
  {
    path: "/thank-you",
    component: ThankYouView,
  },
  {
    name: "coffee",
    path: "/our-coffee/:id",
    component: GoodsItemView,
  },
  {
    name: "goods",
    path: "/for-your-pleasure/:id",
    component: GoodsItemView,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
