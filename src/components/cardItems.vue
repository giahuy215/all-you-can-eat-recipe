<template>
	<div
		class="font-default flex flex-col w-full max-w-[400px] h-[585px] cursor-pointer"
	>
		<div class="items relative w-full">
			<img
				class="w-full max-h-[500px] object-cover object-center rounded"
				:src="itemData.image"
			/>
			<div class="absolute top-3 right-3">
				<Badges :listBadges="itemData.badges" />
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
		<slot name="cardFooter"></slot>
	</div>
</template>

<script setup>
	import Badges from "./badges.vue";
	import { computed } from "vue";

	const props = defineProps(["itemData"]);
	const itemData = computed(() => props.itemData);
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
