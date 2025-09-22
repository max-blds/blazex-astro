globalThis.process ??= {}; globalThis.process.env ??= {};
const taboola = new Proxy({"src":"/_astro/taboola.Ci7YT0uS.png","width":600,"height":300,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/maxdennis/Projects/blazex-astro/public/images/homepage/brands/taboola.png";
							}
							
							return target[name];
						}
					});

export { taboola as default };
