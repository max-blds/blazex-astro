globalThis.process ??= {}; globalThis.process.env ??= {};
const zapier = new Proxy({"src":"/_astro/zapier.BoMXhraq.svg","width":60,"height":60,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/maxdennis/Projects/blazex-astro/public/images/integration/zapier.svg";
							}
							
							return target[name];
						}
					});

export { zapier as default };
