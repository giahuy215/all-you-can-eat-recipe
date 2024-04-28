<template>
	<div class="font-default flex flex-col w-full max-w-[400px] h-[585px]">
		<div class="items relative w-full">
			<img
				class="w-full max-h-[500px] object-cover object-center rounded"
				:src="listItems.image"
			/>
			<div class="absolute top-3 right-3">
				<Badges :listBadges="listItems.badges" />
			</div>
			<div class="items-modal w-full h-10 bottom-3">
				<div
					class="flex flex-row mx-3 px-3 py-2 bg-white justify-between rounded"
				>
					<p class="text-sm font-medium leading-6 uppercase">
						<slot name="modal-content">View Recipe</slot>
					</p>
					<img
						class="w-6 h-6"
						src="../assets/icons/arrow-up-right-icon.svg"
						loading="lazy"
					/>
				</div>
			</div>
		</div>
		<div class="flex flex-col w-full h-1/3">
			<div class="flex flex-row gap-x-2 my-3">
				<template v-for="detail in listItems.detailPrep">
					<TagDetailPrep
						class="py-1 text-secondary-color border-secondary-color"
					>
						<template #icon>
							<img
								class="w-4 h-4 my-auto"
								:src="detail.icons"
							/>
						</template>
						<p class="text-sm">{{ detail.content }}</p>
					</TagDetailPrep>
				</template>
			</div>
			<div>
				<span class="text-2xl font-bold">{{ listItems.name }}</span>
			</div>
		</div>
	</div>
</template>

<script setup>
	import Badges from "./badges.vue";
	import TagDetailPrep from "./tagDetailPrep.vue";
	import { computed } from "vue";

	const props = defineProps(["listItems"]);
	const listItems = computed(() => props.listItems);
</script>

<style scoped>
	.font-default {
		font-family: "Syne", sans-serif;
	}

	.items-modal {
		position: absolute;
		opacity: 0;
		transform: translateY(10px);
	}

	.items:hover .items-modal {
		display: block;
		transition: all 0.5s ease;
		opacity: 1;
		transform: translateY(0);
	}
</style>
