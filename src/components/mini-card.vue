<template>
	<div class="flex flex-col w-[216px] h-[252px] bg-light-pink cursor-pointer">
		<div class="m-3 z-10">
			<img
				class="w-48 h-48 object-cover object-center"
				:src="image"
			/>
		</div>
		<div class="text-center text-xl leading-6 text-secondary-color font-bold">
			{{ content }}
		</div>
	</div>
</template>

<script setup>
	import { ref } from "vue";

	const props = defineProps(["content", "image"]);
	const content = ref(props.content);
	const image = ref(props.image);
</script>

<style scoped></style>
