<template>
	<section class="w-full h-[469px] bg-light-yellow text-primary-color">
		<MainLayout>
			<div class="pt-20 text-sm font-medium uppercase">
				<p>Lunch | Snack</p>
			</div>
			<h1 class="text-7xl font-bold leading-[86px]">
				Watermelon Shrimp Summer Salad
			</h1>
			<div class="flex flex-row mt-4 gap-x-2">
				<template
					v-for="detail in detailPrep"
					:key="detail.name"
				>
					<TagDetailPrep class="py-2 text-primary-color border-primary-color">
						<template #icon>
							<img :src="detail.icons" />
						</template>
						<p class="text-[8px] uppercase">{{ detail.name }}</p>
						<p class="text-sm">{{ detail.content }}</p>
					</TagDetailPrep>
				</template>
			</div>
		</MainLayout>
	</section>
</template>

<script setup>
	import { reactive, defineAsyncComponent } from "vue";
	import MainLayout from "../layout/MainLayout.vue";

	const TagDetailPrep = defineAsyncComponent(() =>
		import("../components/tagDetailPrep.vue"),
	);

	const icons = reactive({
		userIcon: new URL("../assets/icons/blue-user-icon.svg", import.meta.url)
			.href,
		clockIcon: new URL("../assets/icons/blue-clock-icon.svg", import.meta.url)
			.href,
	});

	const detailPrep = [
		{
			icons: icons.userIcon,
			name: "Servings",
			content: "4 servings",
		},
		{
			icons: icons.clockIcon,
			name: "Prep",
			content: "10 mins prep",
		},
		{
			icons: icons.clockIcon,
			name: "Prep",
			content: "0 min cook",
		},
	];
</script>

<style lang="scss" scoped></style>
