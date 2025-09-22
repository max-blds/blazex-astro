globalThis.process ??= {}; globalThis.process.env ??= {};
const aiTools = new Proxy({"src":"/_astro/ai-tools.kQYUKl8N.png","width":1200,"height":1200,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/maxdennis/Projects/blazex-astro/public/images/services/ai-tools.png";
							}
							
							return target[name];
						}
					});

export { aiTools as default };
