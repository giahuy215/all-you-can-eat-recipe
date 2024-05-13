<template>
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
				<OutlineButton
					:mainColor="constant.COLOR.PRIMARY"
					:textHoverColor="constant.COLOR.WHITE"
					:content="'View All Recipes'"
				/>
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
	<section class="comp w-full mt-[68px]">
		<div class="flex items-center justify-center">
			<OutlineButton
				:mainColor="constant.COLOR.SECONDARY"
				:textHoverColor="constant.COLOR.WHITE"
				:content="'View All Recipes'"
			/>
		</div>
	</section>
	<!-- Meet the cook -->
	<section class="mt-40">
		<div class="w-full h-[472px] bg-primary-color">
			<MainLayout>
				<div class="relative w-3/5">
					<img
						class="comp absolute h-[592px] object-cover object-center -mt-20 rounded"
						src="../assets/images/cooking-image.jpg"
					/>
				</div>
				<div class="w-2/5 float-right">
					<div class="mt-16 pl-11 text-white">
						<h2 class="comp text-[56px] font-bold">Meet the cook</h2>
						<p class="comp mt-2 text-2xl">Sharon Daniels</p>
						<p class="comp mt-5">
							Sharon is a passionate home chef with a focus on simplicity. She
							crafts easy-to-follow recipes that transform everyday ingredients
							into delicious creations.
						</p>
						<div class="comp mt-8">
							<OutlineButton
								:mainColor="constant.COLOR.WHITE"
								:textHoverColor="constant.COLOR.PRIMARY"
								:content="'About me'"
							/>
						</div>
					</div>
				</div>
			</MainLayout>
		</div>
	</section>
	<!-- Mood today -->
	<section>
		<div class="w-full h-[500px] bg-secondary-color">
			<MainLayout class="flex flex-row">
				<div class="w-1/2 pt-[162px]">
					<div class="comp text-7xl leading-[86px] font-bold text-white">
						What are you in the mood for today?
					</div>
				</div>
				<div class="relative w-1/2">
					<img
						class="comp absolute w-[496px] h-[480px] mt-[196px] right-0 object-cover object-center rounded-t-full rounded-b-md"
						src="../assets/images/category/lunch.jpeg"
					/>
				</div>
			</MainLayout>
		</div>
		<div class="w-full h-64">
			<main-layout>
				<div class="comp flex flex-row pt-8 gap-x-6">
					<div
						class="text-[40px] leading-[48px] text-secondary-color font-bold cursor-pointer hover:underline"
					>
						Breakfast
					</div>
					<div
						class="text-[40px] leading-[48px] text-secondary-color font-bold cursor-pointer hover:underline"
					>
						Dessert
					</div>
					<div
						class="text-[40px] leading-[48px] text-secondary-color font-bold cursor-pointer hover:underline"
					>
						Dinner
					</div>
				</div>
				<div class="comp flex flex-row pt-6 gap-x-6">
					<div
						class="text-[40px] leading-[48px] text-secondary-color font-bold cursor-pointer hover:underline"
					>
						Lunch
					</div>
					<div
						class="text-[40px] leading-[48px] text-secondary-color font-bold cursor-pointer hover:underline"
					>
						Snack
					</div>
					<div
						class="text-[40px] leading-[48px] text-secondary-color font-bold cursor-pointer hover:underline"
					>
						Vegan
					</div>
				</div>
			</main-layout>
		</div>
	</section>
	<!-- Blog title -->
	<section>
		<SectionTitle class="bg-primary-color">
			<div class="comp">
				<h2 class="text-white font-bold text-[56px]">From the blog</h2>
			</div>
		</SectionTitle>
	</section>
	<!-- Blog list -->
	<section class="comp mt-20">
		<ListBlog />
	</section>
	<!-- Btn View all posts -->
	<section class="comp w-full mt-[68px]">
		<div class="flex items-center justify-center">
			<OutlineButton
				:mainColor="constant.COLOR.PRIMARY"
				:textHoverColor="constant.COLOR.WHITE"
				:content="'View All Posts'"
			/>
		</div>
	</section>
	<!-- Sign up for the newsletter -->
	<section
		class="flex w-full h-[361px] mt-20 bg-light-yellow items-center text-primary-color"
	>
		<main-layout class="flex flex-row">
			<div class="comp flex w-1/2">
				<p class="text-[56px] leading-[67px] font-bold">
					Want more recipes straight to your inbox?
				</p>
			</div>
			<div class="comp flex flex-col w-1/2 mt-5 ml-9">
				<p class="text-2xl leading-[38px]">Sign up for the newsletter.</p>
				<input
					class="w-full h-12 mt-4 p-4 border-b border-b-primary-color rounded text-sm"
					type="text"
					placeholder="Enter your email"
				/>
				<div class="mt-4">
					<outline-button
						:mainColor="constant.COLOR.PRIMARY"
						:textHoverColor="constant.COLOR.WHITE"
						:content="'Submit'"
					/>
				</div>
			</div>
		</main-layout>
	</section>
</template>

<script setup>
	import Carousel from "../components/carouselHeros.vue";
	import MainLayout from "../layout/MainLayout.vue";
	import constant from "../utils/constant";
	import { defineAsyncComponent, onMounted } from "vue";

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

	const ListBlog = defineAsyncComponent(() =>
		import("../components/listBlog.vue"),
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
	* {
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

	textarea:focus,
	input:focus {
		outline: none;
	}

	input {
		outline: none;
	}

	/* Change color placeholder */
	::-webkit-input-placeholder {
		/* WebKit, Blink, Edge */
		color: #2f5fc7;
	}
	:-moz-placeholder {
		/* Mozilla Firefox 4 to 18 */
		color: #2f5fc7;
		opacity: 1;
	}
	::-moz-placeholder {
		/* Mozilla Firefox 19+ */
		color: #2f5fc7;
		opacity: 1;
	}
	:-ms-input-placeholder {
		/* Internet Explorer 10-11 */
		color: #2f5fc7;
	}
	::-ms-input-placeholder {
		/* Microsoft Edge */
		color: #2f5fc7;
	}

	::placeholder {
		/* Most modern browsers support this now. */
		color: #2f5fc7;
	}
</style>
