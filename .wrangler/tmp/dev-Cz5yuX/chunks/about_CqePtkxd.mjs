globalThis.process ??= {}; globalThis.process.env ??= {};
const about = new Proxy({"src":"/_astro/about.CF65_Auu.png","width":1058,"height":1112,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/maxdennis/Projects/blazex-astro/public/images/homepage/about.png";
							}
							
							return target[name];
						}
					});

export { about as default };
