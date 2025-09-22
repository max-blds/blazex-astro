globalThis.process ??= {}; globalThis.process.env ??= {};
const feature3 = new Proxy({"src":"/_astro/feature-3.HJy4vt61.png","width":924,"height":472,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/maxdennis/Projects/blazex-astro/public/images/features/feature-3.png";
							}
							
							return target[name];
						}
					});

export { feature3 as default };
