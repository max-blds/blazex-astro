globalThis.process ??= {}; globalThis.process.env ??= {};
const bidNotification = new Proxy({"src":"/_astro/ai-tools.kQYUKl8N.png","width":1200,"height":1200,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/maxdennis/Projects/blazex-astro/public/images/about/bid-notification.png";
							}
							
							return target[name];
						}
					});

export { bidNotification as default };
