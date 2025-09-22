globalThis.process ??= {}; globalThis.process.env ??= {};
const revenueTracking = new Proxy({"src":"/_astro/revenue-tracking.BiubGhYi.png","width":620,"height":400,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/maxdennis/Projects/blazex-astro/public/images/services/revenue-tracking.png";
							}
							
							return target[name];
						}
					});

export { revenueTracking as default };
