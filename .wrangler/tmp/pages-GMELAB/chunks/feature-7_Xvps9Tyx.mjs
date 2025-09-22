globalThis.process ??= {}; globalThis.process.env ??= {};
const feature7 = new Proxy({"src":"/_astro/feature-7.ZzwVoOCD.png","width":1142,"height":736,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/maxdennis/Projects/blazex-astro/public/images/features/feature-7.png";
							}
							
							return target[name];
						}
					});

export { feature7 as default };
