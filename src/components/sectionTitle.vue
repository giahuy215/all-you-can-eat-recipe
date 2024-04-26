<template>
	<div class="flex w-full h-[242px] items-center">
		<MainLayout>
			<h2 class="text-white font-bold text-[56px]">
				<slot></slot>
			</h2>
		</MainLayout>
	</div>
</template>

<script setup>
	import MainLayout from "./layout/MainLayout.vue";
</script>

<style lang="scss" scoped></style>
