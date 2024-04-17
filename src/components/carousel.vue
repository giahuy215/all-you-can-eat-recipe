<template>
	<a-carousel
		arrows
		:dots="false"
		class="carousel cursor-pointer"
	>
		<template #prevArrow>
			<div class="custom-slick-arrow ml-16">
				<ArrowLeftOutlined />
			</div>
		</template>
		<template #nextArrow>
			<div class="custom-slick-arrow left-20">
				<ArrowRightOutlined />
			</div>
		</template>
		<template v-for="item in arrSlide">
			<div class="relative w-full h-full">
				<img
					class="w-full h-[640px] object-cover rounded-bl-[0.25rem]"
					:src="item.src"
				/>
				<!-- Overlay on slide -->
				<div
					class="overlay-slide-feature absolute left-0 top-0 right-0 bottom-0 opacity-50"
				></div>
				<div class="absolute flex flex-col mx-10 bottom-24 gap-y-5 z-10">
					<!-- Tag name of category -->
					<TagCategoryName :listTagName="item.tagName" />
					<!-- Title of slide -->
					<div class="text-[40px] leading-tight font-bold text-white">
						{{ item.title }}
					</div>
					<!-- Cooking Specifications -->
					<div class="flex flex-row gap-x-2">
						<template v-for="detail in item.detail">
							<TagDetailPrep
								class="text-white border-white"
								:icon="detail.icons"
								:title="detail.title"
								:content="detail.content"
							/>
						</template>
					</div>
				</div>
			</div>
		</template>
	</a-carousel>
</template>

<script setup>
	import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons-vue";
	import TagCategoryName from "./tagCategoryName.vue";
	import TagDetailPrep from "./tagDetailPrep.vue";

	const arrSlide = [
		{
			src: "/src/assets/images/slide-1.jpeg",
			tagName: ["Dinner", "Lunch"],
			title: "Cozy Weekend Chili",
			detail: [
				{
					icons: new URL("../assets/icons/user-icon.svg", import.meta.url).href,
					title: "Servings",
					content: "8 servings",
				},
				{
					icons: new URL("../assets/icons/clock-icon.svg", import.meta.url)
						.href,
					title: "Prep",
					content: "20 mins prep",
				},
				{
					icons: new URL("../assets/icons/clock-icon.svg", import.meta.url)
						.href,
					title: "Prep",
					content: "40 mins cook",
				},
			],
		},
		{
			src: "/src/assets/images/slide-2.jpeg",
			tagName: ["Breakfast", "Dessert"],
			title: "Cinnamon Rolls",
			detail: [
				{
					icons: new URL("../assets/icons/user-icon.svg", import.meta.url).href,
					title: "Servings",
					content: "8 servings",
				},
				{
					icons: new URL("../assets/icons/clock-icon.svg", import.meta.url)
						.href,
					title: "Prep",
					content: "10 mins prep",
				},
				{
					icons: new URL("../assets/icons/clock-icon.svg", import.meta.url)
						.href,
					title: "Prep",
					content: "30 mins cook",
				},
			],
		},
		{
			src: "/src/assets/images/slide-3.jpeg",
			tagName: ["Lunch", "Dinner"],
			title: "Roasted Butternut Squash Soup",
			detail: [
				{
					icons: new URL("../assets/icons/user-icon.svg", import.meta.url).href,
					title: "Servings",
					content: "6 servings",
				},
				{
					icons: new URL("../assets/icons/clock-icon.svg", import.meta.url)
						.href,
					title: "Prep",
					content: "20 mins prep",
				},
				{
					icons: new URL("../assets/icons/clock-icon.svg", import.meta.url)
						.href,
					title: "Prep",
					content: "30 mins cook",
				},
			],
		},
	];
</script>

<style lang="scss" scoped>
	.carousel {
		font-family: "Syne", sans-serif;
	}

	.overlay-slide-feature {
		z-index: 5;
		background-image: linear-gradient(
			14deg,
			#000,
			rgba(0, 0, 0, 0.46) 43%,
			rgba(0, 0, 0, 0)
		);
		border-bottom-left-radius: 0.25rem;
	}

	:deep(.slick-slide) {
		overflow: hidden;
	}

	:deep(.slick-arrow.custom-slick-arrow) {
		border-radius: 20%;
		top: 90%;
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
