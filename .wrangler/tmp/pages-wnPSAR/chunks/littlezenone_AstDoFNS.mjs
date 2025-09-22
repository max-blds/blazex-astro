globalThis.process ??= {}; globalThis.process.env ??= {};
const littlezenone = new Proxy({"src":"/_astro/littlezenone.Jsi3xUGK.png","width":1545,"height":2000,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/maxdennis/Projects/blazex-astro/public/images/case/littlezenone.png";
							}
							
							return target[name];
						}
					});

export { littlezenone as default };
