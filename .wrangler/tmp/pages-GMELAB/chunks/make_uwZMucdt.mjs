globalThis.process ??= {}; globalThis.process.env ??= {};
const make = new Proxy({"src":"/_astro/make.B8aK0ynH.png","width":600,"height":300,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/maxdennis/Projects/blazex-astro/public/images/homepage/brands/make.png";
							}
							
							return target[name];
						}
					});

export { make as default };
