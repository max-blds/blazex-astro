globalThis.process ??= {}; globalThis.process.env ??= {};
const internalTools = new Proxy({"src":"/_astro/internal-tools.CTOfJsYI.png","width":620,"height":400,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/maxdennis/Projects/blazex-astro/public/images/services/internal-tools.png";
							}
							
							return target[name];
						}
					});

export { internalTools as default };
