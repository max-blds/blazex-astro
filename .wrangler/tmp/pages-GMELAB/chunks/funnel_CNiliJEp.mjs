globalThis.process ??= {}; globalThis.process.env ??= {};
const funnel = new Proxy({"src":"/_astro/funnel.CQSKlx3u.png","width":600,"height":300,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/maxdennis/Projects/blazex-astro/public/images/homepage/brands/funnel.png";
							}
							
							return target[name];
						}
					});

export { funnel as default };
