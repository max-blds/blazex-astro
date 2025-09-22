globalThis.process ??= {}; globalThis.process.env ??= {};
const offer3 = new Proxy({"src":"/_astro/offer-3.60bz3rEO.png","width":1616,"height":1098,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/maxdennis/Projects/blazex-astro/public/images/about/offer-3.png";
							}
							
							return target[name];
						}
					});

export { offer3 as default };
