<template>
	<div
		class="flex w-full h-12 bg-primary-color text-white justify-center items-center"
	>
		<p class="ml-2">New recipes added every week!</p>
	</div>
	<Header />
	<section class="flex flex-row w-full h-[640px]">
		<div
			class="flex flex-col w-1/2 h-[560px] bg-red-50 px-[8%] pt-40 text-primary-color gap-y-6"
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
				class="w-44 h-11 uppercase text-sm font-medium border border-primary-color rounded"
			>
				View All Recipes
			</button>
		</div>
		<div class="w-1/2">
			<Carousel />
		</div>
	</section>
	<!-- Category -->
	<section class="mt-16">
		<MainLayout>
			<div class="flex flex-row py-2 items-center justify-between">
				<div class="text-[56px] text-secondary-color font-bold">
					Recipes by category
				</div>
				<div class="flex flex-row gap-x-2">
					<div
						class="flex w-[30px] h-[30px] border border-secondary-color rounded items-center justify-center"
					>
						<img src="../assets/icons/green-arrow-left-icon.svg" />
					</div>
					<div
						class="flex w-[30px] h-[30px] border border-secondary-color rounded items-center justify-center"
					>
						<img src="../assets/icons/green-arrow-right-icon.svg" />
					</div>
				</div>
			</div>
		</MainLayout>
	</section>
</template>

<script setup>
	import Header from "../components/header.vue";
	import Carousel from "../components/carousel.vue";
	import MainLayout from "../components/layout/MainLayout.vue";
</script>

<style scoped></style>
