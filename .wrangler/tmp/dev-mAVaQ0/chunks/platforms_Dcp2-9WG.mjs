globalThis.process ??= {}; globalThis.process.env ??= {};
const platforms = new Proxy({"src":"/_astro/platforms.Dji0SOHT.png","width":1000,"height":600,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/maxdennis/Projects/blazex-astro/public/images/homepage/platforms.png";
							}
							
							return target[name];
						}
					});

export { platforms as default };
