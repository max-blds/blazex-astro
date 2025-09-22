globalThis.process ??= {}; globalThis.process.env ??= {};
const automation2 = new Proxy({"src":"/_astro/automation-2.DrTcV0Hf.png","width":250,"height":400,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/maxdennis/Projects/blazex-astro/public/images/services/automation-2.png";
							}
							
							return target[name];
						}
					});

export { automation2 as default };
