globalThis.process ??= {}; globalThis.process.env ??= {};
const mailchimp = new Proxy({"src":"/_astro/mailchimp.BXfk8Kqw.svg","width":70,"height":70,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/maxdennis/Projects/blazex-astro/public/images/integration/mailchimp.svg";
							}
							
							return target[name];
						}
					});

export { mailchimp as default };
