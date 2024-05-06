<template>
	<div id="app">
		<Header />
		<router-view></router-view>
		<Footer />
	</div>
</template>

<script setup>
	import Header from "./components/header.vue";
	import Footer from "./components/footer.vue";
</script>

<style scoped>
	@import url("https://fonts.googleapis.com/css2?family=Syne:wght@400..800&display=swap");
	#app {
		font-family: "Syne", sans-serif;
	}
</style>
