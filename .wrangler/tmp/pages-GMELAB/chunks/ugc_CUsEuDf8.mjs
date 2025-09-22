globalThis.process ??= {}; globalThis.process.env ??= {};
const ugc = new Proxy({"src":"/_astro/ugc.DQFqumv1.png","width":1200,"height":1200,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/maxdennis/Projects/blazex-astro/public/images/about/ugc.png";
							}
							
							return target[name];
						}
					});

export { ugc as default };
