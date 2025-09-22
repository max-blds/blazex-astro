globalThis.process ??= {}; globalThis.process.env ??= {};
const stats = new Proxy({"src":"/_astro/stats.BG5nByjK.png","width":1200,"height":1200,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/maxdennis/Projects/blazex-astro/public/images/about/stats.png";
							}
							
							return target[name];
						}
					});

export { stats as default };
