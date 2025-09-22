globalThis.process ??= {}; globalThis.process.env ??= {};
const jira = new Proxy({"src":"/_astro/jira.C8nLKFhh.svg","width":70,"height":70,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/maxdennis/Projects/blazex-astro/public/images/integration/jira.svg";
							}
							
							return target[name];
						}
					});

export { jira as default };
