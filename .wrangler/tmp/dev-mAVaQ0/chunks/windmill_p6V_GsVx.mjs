globalThis.process ??= {}; globalThis.process.env ??= {};
const windmill = new Proxy({"src":"/_astro/windmill.c6-eNaOM.png","width":600,"height":300,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/maxdennis/Projects/blazex-astro/public/images/integration/windmill.png";
							}
							
							return target[name];
						}
					});

export { windmill as default };
