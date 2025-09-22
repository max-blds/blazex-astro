globalThis.process ??= {}; globalThis.process.env ??= {};
const developmentProcess = new Proxy({"src":"/_astro/development-process.CEhrebvz.png","width":620,"height":400,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/maxdennis/Projects/blazex-astro/public/images/services/development-process.png";
							}
							
							return target[name];
						}
					});

export { developmentProcess as default };
