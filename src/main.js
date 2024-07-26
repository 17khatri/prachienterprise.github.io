import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import "./assets/main.css";

import App from "./App.vue";
import Home from "./components/Home.vue";
import AboutUs from "./components/AboutUs.vue";
import OurProducts from "./components/OurProducts.vue";
import Certification from "./components/Certification.vue";
import Enquiry from "./components/Enquiry.vue";
import ContactUs from "./components/ContactUs.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/home", component: Home },
    { path: "/aboutus", component: AboutUs },
    { path: "/ourproducts", component: OurProducts },
    { path: "/certification", component: Certification },
    { path: "/enquiry", component: Enquiry },
    { path: "/contactus", component: ContactUs },
  ],
});

const app = createApp(App);
app.use(router);
app.mount("#app");
