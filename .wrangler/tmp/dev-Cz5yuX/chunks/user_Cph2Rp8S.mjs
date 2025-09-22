globalThis.process ??= {}; globalThis.process.env ??= {};
const user = new Proxy({"src":"/_astro/user.BBTDvFS8.png","width":100,"height":100,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/maxdennis/Projects/blazex-astro/public/images/about/user.png";
							}
							
							return target[name];
						}
					});

export { user as default };
