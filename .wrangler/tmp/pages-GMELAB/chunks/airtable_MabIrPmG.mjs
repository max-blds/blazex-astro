globalThis.process ??= {}; globalThis.process.env ??= {};
const airtable = new Proxy({"src":"/_astro/airtable.FwR9R8Gj.png","width":600,"height":300,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/maxdennis/Projects/blazex-astro/public/images/homepage/brands/airtable.png";
							}
							
							return target[name];
						}
					});

export { airtable as default };
