<template>
	<div>
		<MainLayout>
			<div class="flex flex-col w-full gap-y-10">
				<template
					v-for="(list, index) in listRecipes"
					:key="index"
				>
					<div class="flex flex-row gap-x-10">
						<template
							v-for="recipe in list"
							:key="recipe.id"
						>
							<div class="w-1/3">
								<CardItems :listItems="recipe"></CardItems>
							</div>
						</template>
					</div>
				</template>
			</div>
		</MainLayout>
	</div>
</template>

<script setup>
	import { reactive } from "vue";
	import MainLayout from "./layout/MainLayout.vue";
	import CardItems from "./cardItems.vue";

	const icons = reactive({
		userIcon: new URL("../assets/icons/green-user-icon.svg", import.meta.url)
			.href,
		clockIcon: new URL("../assets/icons/green-clock-icon.svg", import.meta.url)
			.href,
	});

	const listRecipes = [
		[
			{
				id: 1,
				name: "Yoghurt Stuffed Eggplant",
				image: new URL("../assets/images/category/Vegan.jpeg", import.meta.url)
					.href,
				badges: ["Vegan", "Lunch"],
				detailPrep: [
					{
						icons: icons.userIcon,
						content: "4 servings",
					},
					{
						icons: icons.clockIcon,
						content: "10 mins prep",
					},
					{
						icons: icons.clockIcon,
						content: "20 mins cook",
					},
				],
			},
			{
				id: 2,
				name: "Fluffy Pecan Waffles",
				image: new URL(
					"../assets/images/category/Breakfast.jpeg",
					import.meta.url,
				).href,
				badges: ["Breakfast", "Dessert"],
				detailPrep: [
					{
						icons: icons.userIcon,
						content: "4 servings",
					},
					{
						icons: icons.clockIcon,
						content: "15 mins prep",
					},
					{
						icons: icons.clockIcon,
						content: "20 mins cook",
					},
				],
			},
			{
				id: 3,
				name: "Cozy Weekend Chili",
				image: new URL("../assets/images/category/Dinner.jpeg", import.meta.url)
					.href,
				badges: ["Dinner", "Lunch"],
				detailPrep: [
					{
						icons: icons.userIcon,
						content: "8 servings",
					},
					{
						icons: icons.clockIcon,
						content: "20 mins prep",
					},
					{
						icons: icons.clockIcon,
						content: "40 mins cook",
					},
				],
			},
		],
		[
			{
				id: 4,
				name: "Cinnamon Rolls",
				image: new URL(
					"../assets/images/category/Dessert.jpeg",
					import.meta.url,
				).href,
				badges: ["Breakfast", "Dessert"],
				detailPrep: [
					{
						icons: icons.userIcon,
						content: "8 servings",
					},
					{
						icons: icons.clockIcon,
						content: "10 mins prep",
					},
					{
						icons: icons.clockIcon,
						content: "30 mins cook",
					},
				],
			},
			{
				id: 5,
				name: "Roasted Butternut Squash Soup",
				image: new URL("../assets/images/category/Lunch2.jpeg", import.meta.url)
					.href,
				badges: ["Lunch", "Dinner"],
				detailPrep: [
					{
						icons: icons.userIcon,
						content: "6 servings",
					},
					{
						icons: icons.clockIcon,
						content: "20 mins prep",
					},
					{
						icons: icons.clockIcon,
						content: "30 mins cook",
					},
				],
			},
			{
				id: 6,
				name: "Watermelon Shrimp Summer Salad",
				image: new URL("../assets/images/category/Snack.jpeg", import.meta.url)
					.href,
				badges: ["Lunch", "Snack"],
				detailPrep: [
					{
						icons: icons.userIcon,
						content: "4 servings",
					},
					{
						icons: icons.clockIcon,
						content: "10 mins prep",
					},
					{
						icons: icons.clockIcon,
						content: "0 mins cook",
					},
				],
			},
		],
	];
</script>

<style lang="scss" scoped></style>
