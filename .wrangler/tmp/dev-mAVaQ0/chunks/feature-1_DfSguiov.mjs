globalThis.process ??= {}; globalThis.process.env ??= {};
const feature1 = new Proxy({"src":"/_astro/feature-1.54WV8AEI.png","width":1230,"height":1284,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/maxdennis/Projects/blazex-astro/public/images/features/feature-1.png";
							}
							
							return target[name];
						}
					});

export { feature1 as default };
