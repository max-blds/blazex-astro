globalThis.process ??= {}; globalThis.process.env ??= {};
const analyticsProcess = new Proxy({"src":"/_astro/analytics-process.DiFPVq61.png","width":620,"height":400,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/maxdennis/Projects/blazex-astro/public/images/services/analytics-process.png";
							}
							
							return target[name];
						}
					});

export { analyticsProcess as default };
