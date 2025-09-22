globalThis.process ??= {}; globalThis.process.env ??= {};
const automation1 = new Proxy({"src":"/_astro/automation-1.BKL3AAY4.png","width":620,"height":400,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/maxdennis/Projects/blazex-astro/public/images/services/automation-1.png";
							}
							
							return target[name];
						}
					});

export { automation1 as default };
