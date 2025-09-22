globalThis.process ??= {}; globalThis.process.env ??= {};
const developmentHero = new Proxy({"src":"/_astro/development-hero.WkKUGKc3.png","width":620,"height":400,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/maxdennis/Projects/blazex-astro/public/images/services/development-hero.png";
							}
							
							return target[name];
						}
					});

export { developmentHero as default };
