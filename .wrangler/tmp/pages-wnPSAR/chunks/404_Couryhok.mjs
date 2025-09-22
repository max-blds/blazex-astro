globalThis.process ??= {}; globalThis.process.env ??= {};
const _404 = new Proxy({"src":"/_astro/404.B17AviQG.png","width":1387,"height":565,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/maxdennis/Projects/blazex-astro/public/images/404.png";
							}
							
							return target[name];
						}
					});

export { _404 as default };
