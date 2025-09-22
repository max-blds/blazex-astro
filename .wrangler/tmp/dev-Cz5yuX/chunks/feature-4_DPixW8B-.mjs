globalThis.process ??= {}; globalThis.process.env ??= {};
const feature4 = new Proxy({"src":"/_astro/feature-4.BtrdRQeF.png","width":876,"height":412,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/maxdennis/Projects/blazex-astro/public/images/features/feature-4.png";
							}
							
							return target[name];
						}
					});

export { feature4 as default };
