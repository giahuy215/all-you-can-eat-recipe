<template>
	<section class="mt-16">
		<MainLayout>
			<div class="flex flex-col pt-2 justify-between">
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
						<template
							v-for="item in listCategory"
							:key="item"
						>
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
	import MiniCard from "../components/miniCard.vue";
	import MainLayout from "../components/layout/MainLayout.vue";
	import { ref, watch } from "vue";
	import constant from "../utils/constant";

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
