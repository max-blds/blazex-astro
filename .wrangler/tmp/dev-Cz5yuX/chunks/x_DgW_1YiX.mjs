globalThis.process ??= {}; globalThis.process.env ??= {};
const x = new Proxy({"src":"/_astro/x.FnqM55Kk.png","width":600,"height":300,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/maxdennis/Projects/blazex-astro/public/images/integration/x.png";
							}
							
							return target[name];
						}
					});

export { x as default };
