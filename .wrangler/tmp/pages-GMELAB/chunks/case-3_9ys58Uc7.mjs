globalThis.process ??= {}; globalThis.process.env ??= {};
const case3 = new Proxy({"src":"/_astro/blog-3.DHOoNryC.png","width":1160,"height":1452,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/maxdennis/Projects/blazex-astro/public/images/case/case-3.png";
							}
							
							return target[name];
						}
					});

export { case3 as default };
