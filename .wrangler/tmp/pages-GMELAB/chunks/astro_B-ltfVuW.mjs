globalThis.process ??= {}; globalThis.process.env ??= {};
const astro = new Proxy({"src":"/_astro/astro.Cmo4UeQ9.png","width":920,"height":320,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/maxdennis/Projects/blazex-astro/public/images/integration/astro.png";
							}
							
							return target[name];
						}
					});

export { astro as default };
