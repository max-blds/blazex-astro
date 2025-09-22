globalThis.process ??= {}; globalThis.process.env ??= {};
const data1 = new Proxy({"src":"/_astro/data-1.DlpvPmxI.png","width":526,"height":610,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/maxdennis/Projects/blazex-astro/public/images/homepage/feature/data-1.png";
							}
							
							return target[name];
						}
					});

export { data1 as default };
