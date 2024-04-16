<template>
	<div
		class="flex w-full h-12 bg-primary-color text-white justify-center items-center"
	>
		<p class="ml-2">New recipes added every week!</p>
	</div>
	<Header />
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
	<!-- List Category -->
	<section class="mt-16">
		<MainLayout>
			<div class="flex flex-col py-2 justify-between">
				<div class="text-[56px] text-secondary-color font-bold">
					Recipes by category
				</div>
				<div class="relative w-full h-[300px] my-8">
					<a-carousel
						arrows
						:dots="false"
						:slidesToShow="numberSlide"
						class="font-default"
					>
						<template #prevArrow>
							<div
								class="absolute flex w-[30px] h-[30px] border border-secondary-color rounded items-center justify-center"
							>
								<img src="../assets/icons/green-arrow-left-icon.svg" />
							</div>
						</template>
						<template #nextArrow>
							<div
								class="absolute flex w-[30px] h-[30px] border border-secondary-color rounded items-center justify-center"
							>
								<img src="../assets/icons/green-arrow-right-icon.svg" />
							</div>
						</template>
						<template v-for="item in listCategory">
							<div class="!flex items-center justify-center">
								<MiniCard
									:content="item.content"
									:image="item.img"
								/>
							</div>
						</template>
					</a-carousel>
				</div>
			</div>
		</MainLayout>
	</section>
</template>

<script setup>
	import Header from "../components/header.vue";
	import Carousel from "../components/carousel.vue";
	import MainLayout from "../components/layout/MainLayout.vue";
	import MiniCard from "../components/mini-card.vue";
	import constant from "../utils/constant";
	import { computed, onMounted, ref, watch } from "vue";

	const numberSlide = ref(5);
	const width = ref(window.innerWidth);

	watch(width, () => {
		console.log(width.value);
		if (width.value < 1280 && width.value >= 1000) {
			numberSlide.value = 3;
		} else if (width.value < 1000 && width.value >= 540) {
			numberSlide.value = 2;
		} else if (width.value < 540) {
			numberSlide.value = 1;
		} else numberSlide.value = 5;
	});

	var listCategory = [
		{
			content: constant.CATEGORY_TYPE.BREAKFAST,
			img: new URL(
				`../assets/images/category/${constant.CATEGORY_TYPE.BREAKFAST}.jpeg`,
				import.meta.url,
			).href,
		},
		{
			content: constant.CATEGORY_TYPE.DESSERT,
			img: new URL(
				`../assets/images/category/${constant.CATEGORY_TYPE.DESSERT}.jpeg`,
				import.meta.url,
			).href,
		},
		{
			content: constant.CATEGORY_TYPE.DINNER,
			img: new URL(
				`../assets/images/category/${constant.CATEGORY_TYPE.DINNER}.jpeg`,
				import.meta.url,
			).href,
		},
		{
			content: constant.CATEGORY_TYPE.LUNCH,
			img: new URL(
				`../assets/images/category/${constant.CATEGORY_TYPE.LUNCH}.jpeg`,
				import.meta.url,
			).href,
		},
		{
			content: constant.CATEGORY_TYPE.SNACK,
			img: new URL(
				`../assets/images/category/${constant.CATEGORY_TYPE.SNACK}.jpeg`,
				import.meta.url,
			).href,
		},
		{
			content: constant.CATEGORY_TYPE.VEGAN,
			img: new URL(
				`../assets/images/category/${constant.CATEGORY_TYPE.VEGAN}.jpeg`,
				import.meta.url,
			).href,
		},
	];

	onMounted(() => {
		window.onresize = () => {
			width.value = window.innerWidth;
		};
	});
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
</style>
