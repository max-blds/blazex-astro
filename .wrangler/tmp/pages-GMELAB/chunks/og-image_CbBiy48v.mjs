globalThis.process ??= {}; globalThis.process.env ??= {};
const ogImage = new Proxy({"src":"/_astro/og-image.CZSBAZ8f.png","width":1200,"height":900,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/maxdennis/Projects/blazex-astro/public/images/og-image.png";
							}
							
							return target[name];
						}
					});

export { ogImage as default };
