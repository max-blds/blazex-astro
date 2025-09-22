globalThis.process ??= {}; globalThis.process.env ??= {};
const dropbox = new Proxy({"src":"/_astro/dropbox.DM3wylf1.svg","width":70,"height":70,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/maxdennis/Projects/blazex-astro/public/images/integration/dropbox.svg";
							}
							
							return target[name];
						}
					});

export { dropbox as default };
