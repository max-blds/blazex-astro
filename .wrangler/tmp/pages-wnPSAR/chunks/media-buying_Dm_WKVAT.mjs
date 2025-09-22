globalThis.process ??= {}; globalThis.process.env ??= {};
const mediaBuying = new Proxy({"src":"/_astro/campaigns.CSPb6LFU.png","width":1200,"height":1200,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/maxdennis/Projects/blazex-astro/public/images/services/media-buying.png";
							}
							
							return target[name];
						}
					});

export { mediaBuying as default };
