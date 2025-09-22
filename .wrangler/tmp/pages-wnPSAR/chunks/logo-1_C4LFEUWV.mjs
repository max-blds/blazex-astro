globalThis.process ??= {}; globalThis.process.env ??= {};
const logo1 = new Proxy({"src":"/_astro/logo-1.BqWwbRRh.png","width":202,"height":68,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/maxdennis/Projects/blazex-astro/public/images/logo-1.png";
							}
							
							return target[name];
						}
					});

export { logo1 as default };
