globalThis.process ??= {}; globalThis.process.env ??= {};
const case1 = new Proxy({"src":"/_astro/blog-2.RNLZ0vE5.png","width":1158,"height":1452,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/maxdennis/Projects/blazex-astro/public/images/case/case-1.png";
							}
							
							return target[name];
						}
					});

export { case1 as default };
