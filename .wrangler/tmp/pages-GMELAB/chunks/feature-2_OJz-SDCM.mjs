globalThis.process ??= {}; globalThis.process.env ??= {};
const feature2 = new Proxy({"src":"/_astro/feature-2.BuBkwXIF.png","width":1272,"height":1372,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/maxdennis/Projects/blazex-astro/public/images/features/feature-2.png";
							}
							
							return target[name];
						}
					});

export { feature2 as default };
