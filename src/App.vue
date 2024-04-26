<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<script setup>
	import { provide, reactive } from "vue";

	const icons = reactive({
		userIcon: new URL("/src/assets/icons/user-icon.svg", import.meta.url).href,
		clockIcon: new URL("/src/assets/icons/clock-icon.svg", import.meta.url)
			.href,
	});

	provide("icons", icons);
</script>

<style scoped>
	@import url("https://fonts.googleapis.com/css2?family=Syne:wght@400..800&display=swap");
	#app {
		font-family: "Syne", sans-serif;
	}
</style>
