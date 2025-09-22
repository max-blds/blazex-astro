globalThis.process ??= {}; globalThis.process.env ??= {};
const combo = new Proxy({"src":"/_astro/combo.CeteyeKc.png","width":1200,"height":780,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/maxdennis/Projects/blazex-astro/public/images/services/combo.png";
							}
							
							return target[name];
						}
					});

export { combo as default };
