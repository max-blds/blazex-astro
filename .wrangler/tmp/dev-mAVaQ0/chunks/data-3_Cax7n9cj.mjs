globalThis.process ??= {}; globalThis.process.env ??= {};
const data3 = new Proxy({"src":"/_astro/data-3.Bt5iJyhL.png","width":413,"height":448,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/maxdennis/Projects/blazex-astro/public/images/homepage/feature/data-3.png";
							}
							
							return target[name];
						}
					});

export { data3 as default };
