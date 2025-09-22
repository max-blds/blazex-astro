globalThis.process ??= {}; globalThis.process.env ??= {};
const googleAds = new Proxy({"src":"/_astro/google-ads.DvYZGstD.png","width":600,"height":300,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/maxdennis/Projects/blazex-astro/public/images/integration/google-ads.png";
							}
							
							return target[name];
						}
					});

export { googleAds as default };
