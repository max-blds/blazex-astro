globalThis.process ??= {}; globalThis.process.env ??= {};
const offer1 = new Proxy({"src":"/_astro/offer-1.HIqPO1vF.png","width":912,"height":1148,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/maxdennis/Projects/blazex-astro/public/images/about/offer-1.png";
							}
							
							return target[name];
						}
					});

export { offer1 as default };
