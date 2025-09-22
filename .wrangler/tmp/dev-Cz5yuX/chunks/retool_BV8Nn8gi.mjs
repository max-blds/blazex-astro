globalThis.process ??= {}; globalThis.process.env ??= {};
const retool = new Proxy({"src":"/_astro/retool.Cvry2fac.png","width":600,"height":300,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/maxdennis/Projects/blazex-astro/public/images/homepage/brands/retool.png";
							}
							
							return target[name];
						}
					});

export { retool as default };
