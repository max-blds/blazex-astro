globalThis.process ??= {}; globalThis.process.env ??= {};
const avatar3 = new Proxy({"src":"/_astro/avatar-3.Ce2_PB2W.png","width":260,"height":253,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/maxdennis/Projects/blazex-astro/public/images/homepage/avatar/avatar-3.png";
							}
							
							return target[name];
						}
					});

export { avatar3 as default };
