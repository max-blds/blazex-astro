globalThis.process ??= {}; globalThis.process.env ??= {};
const analyticsDashboard = new Proxy({"src":"/_astro/analytics-dashboard.Bs0XXMnZ.png","width":1200,"height":1200,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/maxdennis/Projects/blazex-astro/public/images/services/analytics-dashboard.png";
							}
							
							return target[name];
						}
					});

export { analyticsDashboard as default };
