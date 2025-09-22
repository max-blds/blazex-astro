globalThis.process ??= {}; globalThis.process.env ??= {};
const target = new Proxy({"src":"/_astro/target.DwJ7crAX.png","width":500,"height":500,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/maxdennis/Projects/blazex-astro/public/images/about/target.png";
							}
							
							return target[name];
						}
					});

export { target as default };
