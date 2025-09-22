globalThis.process ??= {}; globalThis.process.env ??= {};
const error = new Proxy({"src":"/_astro/error.BdqQ5oeJ.png","width":468,"height":106,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/maxdennis/Projects/blazex-astro/public/images/error.png";
							}
							
							return target[name];
						}
					});

export { error as default };
