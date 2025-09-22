globalThis.process ??= {}; globalThis.process.env ??= {};
const offer2 = new Proxy({"src":"/_astro/offer-2.GFR2_kUt.png","width":708,"height":804,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/maxdennis/Projects/blazex-astro/public/images/about/offer-2.png";
							}
							
							return target[name];
						}
					});

export { offer2 as default };
