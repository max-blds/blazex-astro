globalThis.process ??= {}; globalThis.process.env ??= {};
const developmentTools = new Proxy({"src":"/_astro/development-tools.Q8UT3dRu.png","width":1200,"height":1200,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/maxdennis/Projects/blazex-astro/public/images/services/development-tools.png";
							}
							
							return target[name];
						}
					});

export { developmentTools as default };
