globalThis.process ??= {}; globalThis.process.env ??= {};
const blog1 = new Proxy({"src":"/_astro/blog-1.CWMxvM0T.png","width":1160,"height":1452,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/maxdennis/Projects/blazex-astro/public/images/blog/blog-1.png";
							}
							
							return target[name];
						}
					});

export { blog1 as default };
