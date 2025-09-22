globalThis.process ??= {}; globalThis.process.env ??= {};
const development_images = new Proxy({"src":"/_astro/development images.DuDmycmU.png","width":620,"height":400,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/maxdennis/Projects/blazex-astro/public/images/services/development images.png";
							}
							
							return target[name];
						}
					});

export { development_images as default };
