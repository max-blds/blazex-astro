globalThis.process ??= {}; globalThis.process.env ??= {};
const campaign = new Proxy({"src":"/_astro/campaign.CYXaa5Tm.png","width":1200,"height":1200,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/maxdennis/Projects/blazex-astro/public/images/services/campaign.png";
							}
							
							return target[name];
						}
					});

export { campaign as default };
