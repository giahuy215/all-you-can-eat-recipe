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
							<div class="flex flex-row gap-x-2">
								<template v-for="tag in item.tagName">
									<div
										class="flex bg-white items-center justify-center rounded"
									>
										<p class="text-sm uppercase font-medium px-3 py-2">
											{{ tag }}
										</p>
									</div>
								</template>
							</div>

							<div class="text-[40px] leading-tight font-bold text-white">
								{{ item.title }}
							</div>
							<!-- Cooking Specifications -->
							<div class="flex flex-row gap-x-2">
								<div
									class="flex flex-row px-2 py-2 border border-white rounded text-white"
								>
									<img src="../assets/icons/user-icon.svg" />
									<div class="flex flex-col">
										<p class="text-[8px] uppercase">Servings</p>
										<p class="text-sm">{{ item.servings }}</p>
									</div>
								</div>
								<div
									class="flex flex-row px-2 py-2 border border-white rounded text-white"
								>
									<img src="../assets/icons/clock-icon.svg" />
									<div class="flex flex-col">
										<p class="text-[8px] uppercase">Prep</p>
										<p class="text-sm">{{ item.prep }}</p>
									</div>
								</div>
								<div
									class="flex flex-row px-2 py-2 border border-white rounded text-white"
								>
									<img src="../assets/icons/clock-icon.svg" />
									<div class="flex flex-col">
										<p class="text-[8px] uppercase">Prep</p>
										<p class="text-sm">{{ item.cook }}</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</template>
			</a-carousel>
		</div>
	</section>
</template>

<script setup>
	import Header from "../components/header.vue";
	import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons-vue";

	const arrSlide = [
		{
			src: "/src/assets/images/slide-1.jpeg",
			tagName: ["Dinner", "Lunch"],
			title: "Cozy Weekend Chili",
			servings: "8 servings",
			prep: "20 mins prep",
			cook: "40 mins cook",
		},
		{
			src: "/src/assets/images/slide-2.jpeg",
			tagName: ["Breakfast", "Dessert"],
			title: "Cinnamon Rolls",
			servings: "8 servings",
			prep: "10 mins prep",
			cook: "30 mins cook",
		},
		{
			src: "/src/assets/images/slide-3.jpeg",
			tagName: ["Lunch", "Dinner"],
			title: "Roasted Butternut Squash Soup",
			servings: "6 servings",
			prep: "20 mins prep",
			cook: "30 mins cook",
		},
	];
</script>

<style scoped>
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
