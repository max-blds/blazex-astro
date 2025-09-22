globalThis.process ??= {}; globalThis.process.env ??= {};
const analytics = new Proxy({"src":"/_astro/analytics.CrcrS_8p.png","width":1024,"height":768,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/maxdennis/Projects/blazex-astro/public/images/services/analytics.png";
							}
							
							return target[name];
						}
					});

export { analytics as default };
