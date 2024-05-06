<template>
	<div
		class="outline-button flex h-11 border rounded items-center cursor-pointer w-fit"
		:style="{ 'border-color': mainColor, color: mainColor }"
	>
		<p class="px-6 py-4 text-sm font-semibold uppercase">{{ content }}</p>
	</div>
</template>

<script setup>
	import { computed } from "vue";

	const props = defineProps(["mainColor", "textHoverColor", "content"]);
	const mainColor = computed(() => props.mainColor);
	const textHoverColor = computed(() => props.textHoverColor);
	const content = computed(() => props.content);
</script>

<style lang="scss" scoped>
	.outline-button:hover {
		background-color: v-bind(mainColor);
		color: v-bind(textHoverColor) !important;
	}
</style>
