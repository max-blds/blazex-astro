globalThis.process ??= {}; globalThis.process.env ??= {};
const integration = new Proxy({"src":"/_astro/integration.CU1mRw8n.png","width":2592,"height":1244,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/maxdennis/Projects/blazex-astro/public/images/homepage/integration.png";
							}
							
							return target[name];
						}
					});

export { integration as default };
