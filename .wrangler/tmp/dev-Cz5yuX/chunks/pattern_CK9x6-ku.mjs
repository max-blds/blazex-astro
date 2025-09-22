globalThis.process ??= {}; globalThis.process.env ??= {};
const pattern = new Proxy({"src":"/_astro/pattern.u7zDad4p.png","width":3200,"height":1160,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/maxdennis/Projects/blazex-astro/public/images/pattern.png";
							}
							
							return target[name];
						}
					});

export { pattern as default };
