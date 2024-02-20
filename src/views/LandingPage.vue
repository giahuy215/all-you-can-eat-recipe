<template>
	<div
		class="flex w-full h-12 bg-blue-600 text-white justify-center items-center"
	>
		<p class="ml-2">New recipes added every week!</p>
	</div>
	<Header />
	<section class="flex flex-row w-full h-[640px]">
		<div
			class="flex flex-col w-1/2 h-[560px] bg-red-50 px-[8%] pt-40 text-blue-600 gap-y-6"
		>
			<h1 class="text-7xl font-bold">
				Let's get <br />
				<div class="mt-4"></div>
				cooking!
			</h1>
			<p class="text-2xl leading-normal">
				A blog full of easy to make recipes that take the stress out of cooking.
			</p>
			<button
				class="w-44 h-11 uppercase text-sm font-medium border border-blue-600 rounded"
			>
				View All Recipes
			</button>
		</div>
		<div class="w-1/2">
			<Carousel />
		</div>
	</section>
</template>

<script setup>
	import Header from "../components/header.vue";
	import Carousel from "../components/carousel.vue";
</script>

<style scoped></style>
