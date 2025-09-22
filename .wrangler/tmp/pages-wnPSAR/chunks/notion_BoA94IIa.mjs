globalThis.process ??= {}; globalThis.process.env ??= {};
const notion = new Proxy({"src":"/_astro/notion.CxYuOUqU.svg","width":60,"height":60,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/maxdennis/Projects/blazex-astro/public/images/integration/notion.svg";
							}
							
							return target[name];
						}
					});

export { notion as default };
