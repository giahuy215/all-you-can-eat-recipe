<template>
	<div class="flex flex-row gap-x-2">
		<template v-for="badge in listBadges">
			<div class="flex bg-white items-center justify-center rounded">
				<p class="font-default text-sm uppercase font-medium px-3 py-2">
					{{ badge }}
				</p>
			</div>
		</template>
	</div>
</template>

<script setup>
	import { computed } from "vue";

	const props = defineProps(["listBadges"]);
	const listBadges = computed(() => props.listBadges);
</script>

<style scoped>
	.font-default {
		font-family: "Syne", sans-serif;
	}
</style>
