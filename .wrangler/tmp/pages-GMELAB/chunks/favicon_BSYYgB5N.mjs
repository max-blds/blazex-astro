globalThis.process ??= {}; globalThis.process.env ??= {};
const favicon = new Proxy({"src":"/_astro/favicon.Cfr9RM6R.png","width":50,"height":50,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/maxdennis/Projects/blazex-astro/public/images/favicon.png";
							}
							
							return target[name];
						}
					});

export { favicon as default };
