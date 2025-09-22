globalThis.process ??= {}; globalThis.process.env ??= {};
const figma = new Proxy({"src":"/_astro/figma.B-NUuQkP.svg","width":70,"height":70,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/maxdennis/Projects/blazex-astro/public/images/integration/figma.svg";
							}
							
							return target[name];
						}
					});

export { figma as default };
