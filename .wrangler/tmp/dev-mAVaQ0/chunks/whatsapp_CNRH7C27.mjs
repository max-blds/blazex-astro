globalThis.process ??= {}; globalThis.process.env ??= {};
const whatsapp = new Proxy({"src":"/_astro/whatsapp.tXubBq4q.svg","width":70,"height":70,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/maxdennis/Projects/blazex-astro/public/images/integration/whatsapp.svg";
							}
							
							return target[name];
						}
					});

export { whatsapp as default };
