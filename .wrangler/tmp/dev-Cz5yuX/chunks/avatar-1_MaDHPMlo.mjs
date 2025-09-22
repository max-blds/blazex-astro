globalThis.process ??= {}; globalThis.process.env ??= {};
const avatar1 = new Proxy({"src":"/_astro/avatar-1.D361I8ad.png","width":260,"height":260,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/maxdennis/Projects/blazex-astro/public/images/homepage/avatar/avatar-1.png";
							}
							
							return target[name];
						}
					});

export { avatar1 as default };
