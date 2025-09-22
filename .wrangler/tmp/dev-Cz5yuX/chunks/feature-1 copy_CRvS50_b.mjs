globalThis.process ??= {}; globalThis.process.env ??= {};
const feature1_copy = new Proxy({"src":"/_astro/feature-1.C4BpGlEp.png","width":1075,"height":1003,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/maxdennis/Projects/blazex-astro/public/images/homepage/feature/feature-1 copy.png";
							}
							
							return target[name];
						}
					});

export { feature1_copy as default };
