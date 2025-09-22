globalThis.process ??= {}; globalThis.process.env ??= {};
const homeHero = new Proxy({"src":"/_astro/home-hero.BeRdYYGv.png","width":1000,"height":600,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/maxdennis/Projects/blazex-astro/public/images/homepage/home-hero.png";
							}
							
							return target[name];
						}
					});

export { homeHero as default };
