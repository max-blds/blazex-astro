globalThis.process ??= {}; globalThis.process.env ??= {};
const noise = new Proxy({"src":"/_astro/noise.DSw0fqzN.png","width":3200,"height":1996,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/maxdennis/Projects/blazex-astro/public/images/noise.png";
							}
							
							return target[name];
						}
					});

export { noise as default };
