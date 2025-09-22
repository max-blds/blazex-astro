globalThis.process ??= {}; globalThis.process.env ??= {};
const googleCloud = new Proxy({"src":"/_astro/google-cloud.aIF3L9yv.png","width":600,"height":300,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/maxdennis/Projects/blazex-astro/public/images/homepage/brands/google-cloud.png";
							}
							
							return target[name];
						}
					});

export { googleCloud as default };
