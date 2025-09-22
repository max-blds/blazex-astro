globalThis.process ??= {}; globalThis.process.env ??= {};
const blog4 = new Proxy({"src":"/_astro/blog-4.DHxsPbT8.png","width":1248,"height":1156,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/maxdennis/Projects/blazex-astro/public/images/blog/blog-4.png";
							}
							
							return target[name];
						}
					});

export { blog4 as default };
