globalThis.process ??= {}; globalThis.process.env ??= {};
const confluence = new Proxy({"src":"/_astro/confluence._SGxUQ5K.svg","width":70,"height":70,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/maxdennis/Projects/blazex-astro/public/images/integration/confluence.svg";
							}
							
							return target[name];
						}
					});

export { confluence as default };
