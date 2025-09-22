globalThis.process ??= {}; globalThis.process.env ??= {};
const creative1 = new Proxy({"src":"/_astro/creative1.BUWd5jRc.png","width":1080,"height":1350,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/maxdennis/Projects/blazex-astro/public/images/services/creative1.png";
							}
							
							return target[name];
						}
					});

export { creative1 as default };
