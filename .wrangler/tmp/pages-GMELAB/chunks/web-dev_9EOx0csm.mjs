globalThis.process ??= {}; globalThis.process.env ??= {};
const webDev = new Proxy({"src":"/_astro/web-dev.C7TykPy8.png","width":620,"height":400,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/maxdennis/Projects/blazex-astro/public/images/services/web-dev.png";
							}
							
							return target[name];
						}
					});

export { webDev as default };
