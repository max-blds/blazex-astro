globalThis.process ??= {}; globalThis.process.env ??= {};
const badge = new Proxy({"src":"/_astro/badge.CsuyShCV.png","width":60,"height":60,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/maxdennis/Projects/blazex-astro/public/images/about/badge.png";
							}
							
							return target[name];
						}
					});

export { badge as default };
