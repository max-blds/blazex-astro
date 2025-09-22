globalThis.process ??= {}; globalThis.process.env ??= {};
const drive = new Proxy({"src":"/_astro/drive.Cs972iX1.svg","width":70,"height":70,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/maxdennis/Projects/blazex-astro/public/images/integration/drive.svg";
							}
							
							return target[name];
						}
					});

export { drive as default };
