globalThis.process ??= {}; globalThis.process.env ??= {};
const bar = new Proxy({"src":"/_astro/bar.CqJEvaz0.png","width":51,"height":60,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/maxdennis/Projects/blazex-astro/public/images/about/bar.png";
							}
							
							return target[name];
						}
					});

export { bar as default };
