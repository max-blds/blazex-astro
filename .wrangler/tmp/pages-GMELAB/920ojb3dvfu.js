// <define:__ROUTES__>
var define_ROUTES_default = {
  version: 1,
  include: [
    "/*"
  ],
  exclude: [
    "/_astro/*",
    "/.htaccess",
    "/robots.txt",
    "/images/404.png",
    "/images/error.png",
    "/images/favicon.png",
    "/images/logo-1.png",
    "/images/logo.png",
    "/images/noise.png",
    "/images/og-image.png",
    "/images/pattern.png",
    "/images/about/badge.png",
    "/images/about/bar.png",
    "/images/about/bid-notification.png",
    "/images/about/campaigns.png",
    "/images/about/growth.png",
    "/images/about/offer-1.png",
    "/images/about/offer-2.png",
    "/images/about/offer-3.png",
    "/images/about/stats.png",
    "/images/about/target.png",
    "/images/about/ugc.png",
    "/images/about/user.png",
    "/images/blog/blog-1.png",
    "/images/blog/blog-2.png",
    "/images/blog/blog-3.png",
    "/images/blog/blog-4.png",
    "/images/features/feature-1.png",
    "/images/features/feature-2.png",
    "/images/features/feature-3.png",
    "/images/features/feature-4.png",
    "/images/features/feature-5.png",
    "/images/features/feature-6.png",
    "/images/features/feature-7.png",
    "/images/homepage/about.png",
    "/images/homepage/banner.png",
    "/images/homepage/green-pattern.png",
    "/images/homepage/home-hero.png",
    "/images/homepage/integration.png",
    "/images/homepage/platforms.png",
    "/images/homepage/avatar/avatar-1.png",
    "/images/homepage/avatar/avatar-2.png",
    "/images/homepage/avatar/avatar-3.png",
    "/images/homepage/avatar/avatar-4.png",
    "/images/homepage/feature/adnexus.png",
    "/images/homepage/feature/creative.png",
    "/images/homepage/feature/data-1.png",
    "/images/homepage/feature/data-2.png",
    "/images/homepage/feature/data-3.png",
    "/images/homepage/feature/feature-1 copy.png",
    "/images/homepage/feature/feature-1.png",
    "/images/homepage/feature/optimization.png",
    "/images/homepage/feature/reporting.png",
    "/images/homepage/brands/airtable.png",
    "/images/homepage/brands/funnel.png",
    "/images/homepage/brands/google-ads.png",
    "/images/homepage/brands/google-cloud.png",
    "/images/homepage/brands/make.png",
    "/images/homepage/brands/meta.png",
    "/images/homepage/brands/retool.png",
    "/images/homepage/brands/taboola.png",
    "/images/homepage/brands/x.png",
    "/images/integration/airtable.png",
    "/images/integration/astro.png",
    "/images/integration/confluence.svg",
    "/images/integration/discord.svg",
    "/images/integration/drive.svg",
    "/images/integration/dropbox.svg",
    "/images/integration/figma.svg",
    "/images/integration/funnel.png",
    "/images/integration/google-ads.png",
    "/images/integration/google-cloud.png",
    "/images/integration/intercom.svg",
    "/images/integration/jira.svg",
    "/images/integration/mailchimp.svg",
    "/images/integration/make.png",
    "/images/integration/meta.png",
    "/images/integration/notion.svg",
    "/images/integration/retool.png",
    "/images/integration/slack.svg",
    "/images/integration/taboola.png",
    "/images/integration/tiktok-ads.png",
    "/images/integration/whatsapp.svg",
    "/images/integration/windmill.png",
    "/images/integration/x.png",
    "/images/integration/xgboost.png",
    "/images/integration/zapier.svg",
    "/images/services/adnexus.png",
    "/images/services/ai-tools.png",
    "/images/services/analytics-dashboard.png",
    "/images/services/analytics-hero.png",
    "/images/services/analytics-process.png",
    "/images/services/analytics.png",
    "/images/services/audience-opt.png",
    "/images/services/automation-1.png",
    "/images/services/automation-2.png",
    "/images/services/campaign.png",
    "/images/services/combo.png",
    "/images/services/creative-3.png"
  ]
};

// ../../../../opt/homebrew/lib/node_modules/wrangler/templates/pages-dev-pipeline.ts
import worker from "/Users/maxdennis/Projects/blazex-astro/.wrangler/tmp/pages-GMELAB/bundledWorker-0.002910025940641603.mjs";
import { isRoutingRuleMatch } from "/opt/homebrew/lib/node_modules/wrangler/templates/pages-dev-util.ts";
export * from "/Users/maxdennis/Projects/blazex-astro/.wrangler/tmp/pages-GMELAB/bundledWorker-0.002910025940641603.mjs";
var routes = define_ROUTES_default;
var pages_dev_pipeline_default = {
  fetch(request, env, context) {
    const { pathname } = new URL(request.url);
    for (const exclude of routes.exclude) {
      if (isRoutingRuleMatch(pathname, exclude)) {
        return env.ASSETS.fetch(request);
      }
    }
    for (const include of routes.include) {
      if (isRoutingRuleMatch(pathname, include)) {
        const workerAsHandler = worker;
        if (workerAsHandler.fetch === void 0) {
          throw new TypeError("Entry point missing `fetch` handler");
        }
        return workerAsHandler.fetch(request, env, context);
      }
    }
    return env.ASSETS.fetch(request);
  }
};
export {
  pages_dev_pipeline_default as default
};
//# sourceMappingURL=920ojb3dvfu.js.map
