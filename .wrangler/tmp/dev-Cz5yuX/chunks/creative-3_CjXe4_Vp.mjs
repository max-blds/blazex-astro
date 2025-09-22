globalThis.process ??= {}; globalThis.process.env ??= {};
const creative3 = new Proxy({"src":"/_astro/creative-3.DHb105yL.png","width":1080,"height":1080,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/maxdennis/Projects/blazex-astro/public/images/services/creative-3.png";
							}
							
							return target[name];
						}
					});

export { creative3 as default };
