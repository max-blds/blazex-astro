globalThis.process ??= {}; globalThis.process.env ??= {};
const feature6 = new Proxy({"src":"/_astro/feature-6.D0wjUqwI.png","width":436,"height":412,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/maxdennis/Projects/blazex-astro/public/images/features/feature-6.png";
							}
							
							return target[name];
						}
					});

export { feature6 as default };
