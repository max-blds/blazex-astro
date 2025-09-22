globalThis.process ??= {}; globalThis.process.env ??= {};
const avatar2 = new Proxy({"src":"/_astro/avatar-2.BjqEAFSx.png","width":260,"height":249,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/maxdennis/Projects/blazex-astro/public/images/homepage/avatar/avatar-2.png";
							}
							
							return target[name];
						}
					});

export { avatar2 as default };
