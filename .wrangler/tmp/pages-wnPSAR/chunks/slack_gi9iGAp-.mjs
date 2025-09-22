globalThis.process ??= {}; globalThis.process.env ??= {};
const slack = new Proxy({"src":"/_astro/slack.BqSocULd.svg","width":50,"height":50,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/maxdennis/Projects/blazex-astro/public/images/integration/slack.svg";
							}
							
							return target[name];
						}
					});

export { slack as default };
