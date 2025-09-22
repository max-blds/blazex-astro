globalThis.process ??= {}; globalThis.process.env ??= {};
const meta = new Proxy({"src":"/_astro/meta.CurGMboA.png","width":600,"height":300,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/maxdennis/Projects/blazex-astro/public/images/integration/meta.png";
							}
							
							return target[name];
						}
					});

export { meta as default };
