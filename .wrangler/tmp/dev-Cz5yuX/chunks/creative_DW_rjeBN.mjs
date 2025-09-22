globalThis.process ??= {}; globalThis.process.env ??= {};
const creative = new Proxy({"src":"/_astro/creative.CtEjr-hV.png","width":1024,"height":768,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/maxdennis/Projects/blazex-astro/public/images/homepage/feature/creative.png";
							}
							
							return target[name];
						}
					});

export { creative as default };
