<template>
	<div class="w-full h-[396px] bg-primary-color">
		<MainLayout>
			<div class="flex flex-col">
				<img
					class="w-[480px] h-[113px] mx-auto mt-20"
					src="../assets/images/footer-logo.svg"
					loading="lazy"
				/>
				<div class="flex flex-row mt-10 justify-between">
					<div class="flex flex-col">
						<div class="flex gap-x-4 text-white text-xl font-bold leading-6">
							<p>About</p>
							<p>Blog</p>
							<p>Contact</p>
						</div>
						<div class="flex mt-10 gap-x-2 text-white">
							<p>Style Guide.</p>
							<p>Changelog.</p>
							<p>Licenses.</p>
						</div>
					</div>
					<div class="flex flex-col items-end">
						<div class="flex flex-row gap-x-4">
							<template
								v-for="(logo, index) in socialLogo"
								:key="index"
							>
								<a
									:href="logo.link"
									target="_blank"
									rel="noopener noreferrer"
								>
									<img
										class="w-6 h-6"
										:src="logo.image"
									/>
								</a>
							</template>
						</div>
						<div class="flex mt-10 text-white">
							<p>
								Website template by Callisto Digital Studio. Powered by Webflow.
							</p>
						</div>
					</div>
				</div>
			</div>
		</MainLayout>
	</div>
</template>

<script setup>
	import { reactive } from "vue";
	import MainLayout from "./layout/MainLayout.vue";

	const socialLogo = reactive({
		tiktok: {
			image: new URL("../assets/logo/tiktok-logo.svg", import.meta.url).href,
			link: "https://www.tiktok.com/",
		},
		instagram: {
			image: new URL("../assets/logo/instagram-logo.svg", import.meta.url).href,
			link: "https://www.instagram.com/",
		},
		pinterest: {
			image: new URL("../assets/logo/pinterest-logo.svg", import.meta.url).href,
			link: "https://www.pinterest.com/",
		},
		facebook: {
			image: new URL("../assets/logo/facebook-logo.svg", import.meta.url).href,
			link: "https://www.facebook.com/",
		},
		x: {
			image: new URL("../assets/logo/x-logo.svg", import.meta.url).href,
			link: "https://www.x.com/",
		},
	});
</script>

<style lang="scss" scoped></style>
