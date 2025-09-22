globalThis.process ??= {}; globalThis.process.env ??= {};
const growth = new Proxy({"src":"/_astro/growth.BluNir5c.png","width":500,"height":500,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/maxdennis/Projects/blazex-astro/public/images/about/growth.png";
							}
							
							return target[name];
						}
					});

export { growth as default };
