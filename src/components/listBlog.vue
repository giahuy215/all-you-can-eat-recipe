<template>
	<MainLayout>
		<div class="flex flex-row w-full gap-x-10">
			<template
				v-for="(blog, index) in listBlogs"
				:key="index"
			>
				<div class="w-1/3">
					<CardItems :itemData="blog">
						<template #cardFooter>
							<div class="flex flex-col w-full mt-3 gap-y-3">
								<p class="text-2xl font-bold">
									{{ blog.name }}
								</p>
								<p>{{ `${blog.author} | ${blog.datePost}` }}</p>
							</div>
						</template>
						<template #modal-content>
							<p>Read more</p>
						</template>
					</CardItems>
				</div>
			</template>
		</div>
	</MainLayout>
</template>

<script setup>
	import MainLayout from "./layout/MainLayout.vue";
	import CardItems from "./cardItems.vue";
	import moment from "moment";
	import constant from "../utils/constant";

	const listBlogs = [
		{
			id: 1,
			name: "Perfect picnic picks.",
			image: new URL("../assets/images/blogs/blog-1.jpeg", import.meta.url)
				.href,
			badges: ["Lifestyle"],
			author: "Sharon Daniels",
			datePost: moment("2024-02-10").format(constant.DATE_FORMAT.MMMM_DD_YYYY),
		},
		{
			id: 2,
			name: "My best advice for never skipping breakfast.",
			image: new URL("../assets/images/blogs/blog-2.jpeg", import.meta.url)
				.href,
			badges: ["Lifestyle"],
			author: "Sharon Daniels",
			datePost: moment("2024-02-10").format(constant.DATE_FORMAT.MMMM_DD_YYYY),
		},
		{
			id: 3,
			name: "A guide to hosting memorable dinners with friends.",
			image: new URL("../assets/images/blogs/blog-3.jpeg", import.meta.url)
				.href,
			badges: ["Hosting", "Lifestyle"],
			author: "Sharon Daniels",
			datePost: moment("2024-02-10").format(constant.DATE_FORMAT.MMMM_DD_YYYY),
		},
	];
</script>

<style lang="scss" scoped></style>
