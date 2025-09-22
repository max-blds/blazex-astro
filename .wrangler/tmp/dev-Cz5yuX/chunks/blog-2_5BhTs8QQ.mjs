globalThis.process ??= {}; globalThis.process.env ??= {};
const blog2 = new Proxy({"src":"/_astro/blog-2.RNLZ0vE5.png","width":1158,"height":1452,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/maxdennis/Projects/blazex-astro/public/images/blog/blog-2.png";
							}
							
							return target[name];
						}
					});

export { blog2 as default };
