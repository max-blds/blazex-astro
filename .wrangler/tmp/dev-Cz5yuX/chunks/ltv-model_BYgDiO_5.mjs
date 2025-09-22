globalThis.process ??= {}; globalThis.process.env ??= {};
const ltvModel = new Proxy({"src":"/_astro/ltv-model.Cv0xq9FM.png","width":620,"height":400,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/maxdennis/Projects/blazex-astro/public/images/services/ltv-model.png";
							}
							
							return target[name];
						}
					});

export { ltvModel as default };
