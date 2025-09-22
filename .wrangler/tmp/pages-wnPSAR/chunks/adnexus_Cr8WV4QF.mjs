globalThis.process ??= {}; globalThis.process.env ??= {};
const adnexus = new Proxy({"src":"/_astro/adnexus.XQNo5ymf.png","width":1200,"height":1200,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/maxdennis/Projects/blazex-astro/public/images/services/adnexus.png";
							}
							
							return target[name];
						}
					});

export { adnexus as default };
