globalThis.process ??= {}; globalThis.process.env ??= {};
const feature5 = new Proxy({"src":"/_astro/feature-5.BQsXc2Fw.png","width":836,"height":412,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/maxdennis/Projects/blazex-astro/public/images/features/feature-5.png";
							}
							
							return target[name];
						}
					});

export { feature5 as default };
