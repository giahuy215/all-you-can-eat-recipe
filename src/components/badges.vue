<template>
	<div class="flex flex-row gap-x-2">
		<template v-for="tag in listTagName">
			<div class="flex bg-white items-center justify-center rounded">
				<p class="font-default text-sm uppercase font-medium px-3 py-2">
					{{ tag }}
				</p>
			</div>
		</template>
	</div>
</template>

<script setup>
	import { computed } from "vue";

	const props = defineProps(["listTagName"]);
	const listTagName = computed(() => props.listTagName);
</script>

<style scoped>
	.font-default {
		font-family: "Syne", sans-serif;
	}
</style>
