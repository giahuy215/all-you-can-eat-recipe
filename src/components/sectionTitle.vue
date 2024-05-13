<template>
	<div class="flex w-full h-[242px] items-center">
		<MainLayout>
			<slot></slot>
		</MainLayout>
	</div>
</template>

<script setup>
	import MainLayout from "../layout/MainLayout.vue";
</script>

<style lang="scss" scoped></style>
