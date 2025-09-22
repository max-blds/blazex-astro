globalThis.process ??= {}; globalThis.process.env ??= {};
const avatar4 = new Proxy({"src":"/_astro/avatar-4.BvLdCic7.png","width":150,"height":150,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/maxdennis/Projects/blazex-astro/public/images/homepage/avatar/avatar-4.png";
							}
							
							return target[name];
						}
					});

export { avatar4 as default };
