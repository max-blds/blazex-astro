globalThis.process ??= {}; globalThis.process.env ??= {};
const reporting = new Proxy({"src":"/_astro/reporting.DxyNWauF.png","width":1024,"height":768,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/maxdennis/Projects/blazex-astro/public/images/homepage/feature/reporting.png";
							}
							
							return target[name];
						}
					});

export { reporting as default };
