globalThis.process ??= {}; globalThis.process.env ??= {};
const banner = new Proxy({"src":"/_astro/banner.CkZi0cZp.png","width":1940,"height":1308,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/maxdennis/Projects/blazex-astro/public/images/homepage/banner.png";
							}
							
							return target[name];
						}
					});

export { banner as default };
