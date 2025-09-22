globalThis.process ??= {}; globalThis.process.env ??= {};
const intercom = new Proxy({"src":"/_astro/intercom.B34zaP2t.svg","width":70,"height":70,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/maxdennis/Projects/blazex-astro/public/images/integration/intercom.svg";
							}
							
							return target[name];
						}
					});

export { intercom as default };
