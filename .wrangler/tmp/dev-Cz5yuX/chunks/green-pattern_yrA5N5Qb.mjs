globalThis.process ??= {}; globalThis.process.env ??= {};
const greenPattern = new Proxy({"src":"/_astro/green-pattern.1Tu98a6w.png","width":1992,"height":2448,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/maxdennis/Projects/blazex-astro/public/images/homepage/green-pattern.png";
							}
							
							return target[name];
						}
					});

export { greenPattern as default };
