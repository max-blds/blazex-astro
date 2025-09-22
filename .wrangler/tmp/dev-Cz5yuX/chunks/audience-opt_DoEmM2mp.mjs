globalThis.process ??= {}; globalThis.process.env ??= {};
const audienceOpt = new Proxy({"src":"/_astro/audience-opt.CjLBv2TR.png","width":620,"height":400,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/maxdennis/Projects/blazex-astro/public/images/services/audience-opt.png";
							}
							
							return target[name];
						}
					});

export { audienceOpt as default };
