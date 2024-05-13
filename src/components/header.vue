<template>
	<div
		class="flex w-full h-12 bg-primary-color text-white justify-center items-center"
	>
		<p class="ml-2">New recipes added every week!</p>
	</div>
	<header
		class="flex flex-row w-[84%] h-[58px] ml-[8%] justify-between items-center"
	>
		<div class="flex flex-row">
			<img
				class="w-6 h-6 mr-3"
				src="../assets/icons/menu-icon.svg"
			/>
			<p class="font-bold text-blue-600">Menu</p>
		</div>
		<div class="flex -ml-11">
			<router-link to="/">
				<img
					class="w-[171px] h-10"
					src="../assets/logo/main-logo.svg"
				/>
			</router-link>
		</div>
		<div class="flex">
			<img src="../assets/icons/search-icon.svg" />
		</div>
	</header>
</template>

<script setup></script>

<style lang="scss" scoped></style>
