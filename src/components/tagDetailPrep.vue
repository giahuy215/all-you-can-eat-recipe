<template>
	<div class="flex flex-row p-2 border rounded gap-x-1">
		<img :src="icon" />
		<div class="flex flex-col">
			<p class="text-[8px] uppercase">{{ title }}</p>
			<p class="text-sm">{{ content }}</p>
		</div>
	</div>
</template>

<script setup>
	import { computed } from "vue";

	const props = defineProps(["icon", "title", "content"]);
	const icon = computed(() => props.icon);
	const title = computed(() => props.title);
	const content = computed(() => props.content);
</script>

<style lang="scss" scoped></style>
