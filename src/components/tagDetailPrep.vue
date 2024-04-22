<template>
	<div class="flex flex-row p-2 border rounded gap-x-1">
		<slot name="icon"></slot>
		<div class="flex flex-col">
			<slot></slot>
		</div>
	</div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
