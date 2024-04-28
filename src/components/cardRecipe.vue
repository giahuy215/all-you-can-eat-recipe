<template>
	<div class="flex flex-col w-full max-w-[400px] h-[585px]">
		<div class="relative w-full">
			<img
				class="w-full max-h-[500px] object-cover object-center rounded"
				:src="recipe.image"
			/>
			<div class="absolute top-3 right-3">
				<TagCategoryName :listTagName="recipe.tagCategory" />
			</div>
		</div>
		<div class="flex flex-col w-full h-1/3">
			<div class="flex flex-row gap-x-2 my-3">
				<template v-for="detail in recipe.detailPrep">
					<TagDetailPrep
						class="py-1 text-secondary-color border-secondary-color"
					>
						<template #icon>
							<img
								class="w-4 h-4 my-auto"
								:src="detail.icons"
							/>
						</template>
						<p class="font-default text-sm">{{ detail.content }}</p>
					</TagDetailPrep>
				</template>
			</div>
			<div>
				<span class="font-default text-2xl font-bold">{{ recipe.name }}</span>
			</div>
		</div>
	</div>
</template>

<script setup>
	import TagCategoryName from "./badges.vue";
	import TagDetailPrep from "./tagDetailPrep.vue";
	import { computed } from "vue";

	const props = defineProps(["recipe"]);
	const recipe = computed(() => props.recipe);
</script>

<style scoped>
	.font-default {
		font-family: "Syne", sans-serif;
	}
</style>
