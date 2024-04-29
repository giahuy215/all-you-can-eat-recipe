<template>
	<div
		class="flex w-full h-12 bg-primary-color text-white justify-center items-center"
	>
		<p class="ml-2">New recipes added every week!</p>
	</div>
	<Header />
	<transition
		appear
		name="bottom-to-top"
	>
		<section class="flex flex-row w-full h-[640px]">
			<div
				class="flex flex-col w-1/2 h-[560px] bg-light-pink px-[8%] pt-40 text-primary-color gap-y-6"
			>
				<h1 class="text-7xl font-bold">
					Let's get <br />
					<div class="mt-4"></div>
					cooking!
				</h1>
				<p class="text-2xl leading-normal">
					A blog full of easy to make recipes that take the stress out of
					cooking.
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
	</transition>
	<!-- List Category -->
	<section class="comp">
		<ListCategories />
	</section>
	<!-- Newest Recipes Title -->
	<section>
		<SectionTitle class="bg-secondary-color">
			<div class="comp">
				<h2 class="text-white font-bold text-[56px]">Newest Recipes</h2>
			</div>
		</SectionTitle>
	</section>
	<!-- Newest Recipes List -->
	<section class="comp mt-20">
		<ListRecipe></ListRecipe>
	</section>
	<!-- Btn View All Recipes -->
	<section class="comp w-full my-[68px]">
		<div class="flex items-center justify-center">
			<OutlineButton
				:mainColor="constant.COLOR.SECONDARY"
				:textHoverColor="constant.COLOR.WHITE"
				:content="'View All Recipes'"
			/>
		</div>
	</section>
</template>

<script setup>
	import Header from "../components/header.vue";
	import Carousel from "../components/carouselHeros.vue";
	import constant from "../utils/constant";
	import { computed, defineAsyncComponent, onMounted, ref, watch } from "vue";

	const ListCategories = defineAsyncComponent(() =>
		import("../components/listCategories.vue"),
	);

	const SectionTitle = defineAsyncComponent(() =>
		import("../components/sectionTitle.vue"),
	);

	const ListRecipe = defineAsyncComponent(() =>
		import("../components/listRecipe.vue"),
	);

	const OutlineButton = defineAsyncComponent(() =>
		import("../components/outlineButton.vue"),
	);

	window.addEventListener("scroll", () => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("comp-animation");
				}
			});
		});

		const comp = document.querySelectorAll(".comp");

		comp.forEach((comp) => {
			observer.observe(comp);
		});
	});

	onMounted(() => {});
</script>

<style scoped>
	.font-default {
		font-family: "Syne", sans-serif;
	}

	:deep(.slick-slide) {
		overflow: hidden;
	}

	:deep(.slick-arrow.custom-slick-arrow) {
		border-radius: 20%;
		width: 32px;
		height: 32px;
		font-size: 20px;
		line-height: 24px;
		padding-left: 6px;
		color: black;
		background-color: white;
		transition: ease all 0.3s;
		z-index: 1;
	}

	:deep(.slick-arrow.custom-slick-arrow:before) {
		display: none;
	}
	.bottom-to-top-enter-active {
		transition: all 0.5s ease-in-out;
	}
	.bottom-to-top-enter-from,
	.bottom-to-top-leave-to {
		transform: translateY(50px);
		opacity: 0;
	}

	.comp {
		opacity: 0;
		transform: translateY(50px);
	}

	.comp-animation {
		transition: all 1s ease-in-out;
		opacity: 1;
		transform: translateY(0);
	}
</style>
