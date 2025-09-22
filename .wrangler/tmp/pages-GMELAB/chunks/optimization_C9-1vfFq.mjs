globalThis.process ??= {}; globalThis.process.env ??= {};
const optimization = new Proxy({"src":"/_astro/analytics.CrcrS_8p.png","width":1024,"height":768,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/maxdennis/Projects/blazex-astro/public/images/homepage/feature/optimization.png";
							}
							
							return target[name];
						}
					});

export { optimization as default };
