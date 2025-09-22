globalThis.process ??= {}; globalThis.process.env ??= {};
const tiktokAds = new Proxy({"src":"/_astro/tiktok-ads.CsBHeTaX.png","width":600,"height":300,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/maxdennis/Projects/blazex-astro/public/images/integration/tiktok-ads.png";
							}
							
							return target[name];
						}
					});

export { tiktokAds as default };
