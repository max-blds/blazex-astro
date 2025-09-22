globalThis.process ??= {}; globalThis.process.env ??= {};
const analyticsHero = new Proxy({"src":"/_astro/analytics-hero.BnbPp_SU.png","width":620,"height":400,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/maxdennis/Projects/blazex-astro/public/images/services/analytics-hero.png";
							}
							
							return target[name];
						}
					});

export { analyticsHero as default };
