globalThis.process ??= {}; globalThis.process.env ??= {};
const notchup = new Proxy({"src":"/_astro/notchup.DB6lItT3.png","width":1545,"height":2000,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/maxdennis/Projects/blazex-astro/public/images/case/notchup.png";
							}
							
							return target[name];
						}
					});

export { notchup as default };
