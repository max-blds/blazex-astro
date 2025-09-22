globalThis.process ??= {}; globalThis.process.env ??= {};
const xgboost = new Proxy({"src":"/_astro/xgboost.CB53rQtN.png","width":600,"height":300,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/maxdennis/Projects/blazex-astro/public/images/integration/xgboost.png";
							}
							
							return target[name];
						}
					});

export { xgboost as default };
