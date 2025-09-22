globalThis.process ??= {}; globalThis.process.env ??= {};
const data2 = new Proxy({"src":"/_astro/data-2.om1lXwfm.png","width":426,"height":458,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/maxdennis/Projects/blazex-astro/public/images/homepage/feature/data-2.png";
							}
							
							return target[name];
						}
					});

export { data2 as default };
