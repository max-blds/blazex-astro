globalThis.process ??= {}; globalThis.process.env ??= {};
const logo = new Proxy({"src":"/_astro/logo.bl56iEUX.png","width":500,"height":200,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/maxdennis/Projects/blazex-astro/public/images/logo.png";
							}
							
							return target[name];
						}
					});

export { logo as default };
