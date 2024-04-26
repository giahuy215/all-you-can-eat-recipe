import { h, defineAsyncComponent, defineComponent, ref, onMounted } from "vue";

export const lazyLoadComponentIfVisible = ({
	componentLoader,
	loadingComponent,
	errorComponent,
	delay,
	timeout,
}) => {
	let resolveComponent;

	return defineAsyncComponent({
		loader: () => {
			return new Promise((resolve) => {
				resolveComponent = resolve;
			});
		},
		loadingComponent: defineComponent({
			setup() {
				const elRef = ref();

				async function loadComponent() {
					const component = await componentLoader();
					resolveComponent(component);
				}

				onMounted(async () => {
					if (!("IntersectionObserver" in window)) {
						await loadComponent();
						return;
					}

					const observer = new IntersectionObserver((entries) => {
						if (!entries[0].isIntersecting) {
							return;
						}

						observer.unobserve(elRef.value);
						loadComponent();
					});

					observer.observe(elRef.value);
				});

				return () => {
					return h("div", { ref: elRef }, loadingComponent);
				};
			},
		}),
		delay,
		errorComponent,
		timeout,
	});
};
