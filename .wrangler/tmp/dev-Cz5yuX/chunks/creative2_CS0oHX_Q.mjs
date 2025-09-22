globalThis.process ??= {}; globalThis.process.env ??= {};
const creative2 = new Proxy({"src":"/_astro/creative2.BsY92_II.png","width":1200,"height":1200,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/maxdennis/Projects/blazex-astro/public/images/services/creative2.png";
							}
							
							return target[name];
						}
					});

export { creative2 as default };
