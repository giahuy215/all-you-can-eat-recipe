import { createRouter, createWebHistory } from "vue-router";

export default createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: "/",
			name: "LandingPage",
			component: () => import("../views/LandingPage.vue"),
		},
		{
			path: "/recipe/:name",
			name: "DetailPage",
			component: () => import("../views/DetailPage.vue"),
		},
	],
});
