import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const commonFields = {
  title: z.string(),
  description: z.string(),
  meta_title: z.string().optional(),
  date: z.union([z.date(), z.string()]).optional(),
  image: z.string().optional(),
  draft: z.boolean(),
};

// Homepage collection schema
const homepageCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/homepage" }),
  schema: z.object({
    hero: z.object({
      title: z.string(),
      content: z.string(),
      image: z.string(),
      button_1: z.object({
        enable: z.boolean(),
        label: z.string(),
        link: z.string(),
      }),
      button_2: z.object({
        enable: z.boolean(),
        label: z.string(),
        link: z.string(),
      }),
      client: z.object({
        images: z.array(z.string()),
        clients: z.object({
          rating: z.string(),
          user: z.string(),
        }),
      }),
    }),
    brand: z.object({
      title: z.string(),
      logos: z.array(z.string()),
    }),
    about: z.object({
      title: z.string(),
      content_1: z.string(),
      content_2: z.string(),
      image: z.object({
        image: z.string(),
        point: z.array(z.string()),
      }),
      achievements: z.array(
        z.object({
          key: z.number(),
          suffix: z.string(),
          value: z.string(),
        })
      ),
    }),
    step: z.object({
      title: z.string(),
      steps: z.array(
        z.object({
          title: z.string(),
          description: z.string(),
        })
      ),
      start: z.string(),
      button: z.object({
        enable: z.boolean(),
        label: z.string(),
        link: z.string(),
      }),
    }),
    feature: z.object({
      title: z.string(),
      image: z.string(),
      content: z.string(),
      points: z.array(z.string()),
      action: z.object({
        title: z.string(),
        review: z.object({
          user: z.string(),
          designation: z.string(),
          comment: z.string(),
        }),
        image_1: z.string(),
        image_2: z.string(),
        image_3: z.string(),
      }),
    }),
    integration: z.object({
      title: z.string(),
      image: z.string(),
      button: z.object({
        enable: z.boolean(),
        label: z.string(),
        link: z.string(),
      }),
    }),
    review: z.object({
      title: z.string(),
      badge: z.string(),
    }),
    cta: z.object({
      title: z.string(),
      button_1: z.object({
        enable: z.boolean(),
        label: z.string(),
        link: z.string(),
      }),
      button_2: z.object({
        enable: z.boolean(),
        label: z.string(),
        link: z.string(),
      }),
    }),
  }),
});

// pricing
const pricingCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/pricing" }),
  schema: z.object({
    ...commonFields,
    hero: z.object({
      title: z.string(),
      content: z.string(),
    }),
    plans: z.object({
      label: z.string(),
      packs: z.array(
        z.object({
          name: z.string(),
          description: z.string(),
          price: z
            .object({
              monthly_price: z.number(),
              yearly_price: z.number(),
            })
            .optional(),
          duration: z.string(),
          button: z.object({
            enable: z.boolean(),
            label: z.string(),
            link: z.string(),
          }),
          recommended: z.string(),
          feature: z.object({
            title: z.string(),
            points: z.array(z.string()),
          }),
        })
      ),
    }),
    compare: z.object({
      title: z.string(),
      plans: z.array(
        z.object({
          name: z.string(),
        })
      ),
      pricing: z.array(z.string()),
      buttons: z.array(
        z.object({
          button: z.object({
            enable: z.boolean(),
            label: z.string(),
            link: z.string(),
          }),
        })
      ),
      features: z.array(
        z.object({
          name: z.string(),
          feature: z.array(
            z.object({
              details: z.tuple([
                z.string(),
                z.union([z.string(), z.number(), z.boolean()]), // Free plan value
                z.union([z.string(), z.number(), z.boolean()]), // Professional plan value
                z.union([z.string(), z.number(), z.boolean()]), // Organization plan value
              ]),
            })
          ),
        })
      ),
    }),
    review: z.object({
      title: z.string(),
      content: z.string(),
    }),
  }),
});

// case
const useCasesCollection = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "src/content/case",
  }),
  schema: z.object({
    ...commonFields,
    hero: z
      .object({
        title: z.string(),
        content: z.string(),
      })
      .optional(),
    badge: z.string().optional(),
    stats: z
      .array(
        z.object({
          key: z.string(),
          value: z.string(),
        })
      )
      .optional(),
  }),
});

// blog collection schema
const blogCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/blog" }),
  schema: z.object({
    ...commonFields,
  }),
});

// features
const featuresCollection = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "src/content/features",
  }),
  schema: z.object({
    ...commonFields,
    hero: z.object({
      title: z.string(),
      content: z.string(),
    }),
    section_1: z.object({
      title: z.string(),
      content: z.string(),
      image: z.string(),
      highlights: z.array(z.string()),
      features: z.array(z.string()),
      button: z.object({
        enable: z.boolean(),
        label: z.string(),
        link: z.string(),
      }),
    }),
    section_2: z.object({
      badge: z.string(),
      title: z.string(),
      content: z.string(),
      image_1: z.string(),
      image_2: z.string(),
      features: z.array(z.string()),
      button: z.object({
        enable: z.boolean(),
        label: z.string(),
        link: z.string(),
      }),
    }),
    section_3: z.object({
      title: z.string(),
      icon: z.string(),
      image: z.string(),
      content: z.string(),
    }),
    section_4: z.object({
      title: z.string(),
      icon: z.string(),
      image_1: z.string(),
      image_2: z.string(),
      content: z.string(),
    }),
    section_5: z.object({
      title: z.string(),
      icon: z.string(),
      image: z.string(),
      content: z.string(),
    }),
    review: z.object({
      title: z.string(),
      content: z.string(),
    }),
  }),
});

// integration
const integrationCollection = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "src/content/integration",
  }),
  schema: z.object({
    ...commonFields,
    integrations: z.array(
      z.object({
        name: z.string(),
        logo: z.string(),
        details: z.string(),
      })
    ),
  }),
});

// contact
const contactCollection = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "src/content/contact",
  }),
  schema: z.object({
    ...commonFields,
    connect: z.array(
      z.object({
        key: z.string(), // Label or description of the contact method
        value: z.string(), // Contact information (email, phone, etc.)
        icon: z.string(), // Icon name (e.g., FontAwesome icon)
      })
    ),
  }),
});

// about
const aboutCollection = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "src/content/about",
  }),
  schema: z.object({
    ...commonFields,
    hero: z.object({
      badge: z.string(),
      title: z.string(),
      content: z.string(),
      achievement: z.array(
        z.object({
          icon: z.string(),
          details: z.string(),
        })
      ),
    }),
    offering: z.object({
      title: z.string(),
      offers: z.array(
        z.union([
          z.object({
            type: z.literal("image"),
            image: z.string(),
          }),
          z.object({
            type: z.literal("review"),
            quote: z.string(),
            image: z.string(),
            author: z.string(),
            role: z.string(),
            rating: z.number(),
          }),
          z.object({
            type: z.literal("text"),
            title: z.string(),
            content: z.string(),
            data: z.string(),
          }),
        ])
      ),
    }),
    company: z.object({
      title: z.string(),
      logos: z.array(z.string()),
    }),
    call_to_action: z.object({
      title: z.string(),
      description: z.string(),
      button: z.object({
        enable: z.boolean(),
        label: z.string(),
        link: z.string(),
      }),
    }),
  }),
});

// faq
const faqSectionCollection = defineCollection({
  loader: glob({
    pattern: "faq.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    enable: z.boolean(),
    title: z.string(),
    description: z.string(),
    faqs: z.array(
      z.object({
        question: z.string(),
        answer: z.string(),
      })
    ),
  }),
});

// demo
const demoCollection = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "src/content/demo",
  }),
  schema: z.object({
    ...commonFields,
    hero: z.object({
      title: z.string(),
      content: z.string(),
    }),
    feature: z.object({
      title: z.string(),
      features: z.array(
        z.object({
          name: z.string(),
          icon: z.string(),
        })
      ),
    }),
  }),
});

// brand
const brandSectionCollection = defineCollection({
  loader: glob({ pattern: "brand.{md,mdx}", base: "src/content/sections" }),
  schema: z.object({
    enable: z.boolean(),
    title: z.string(),
    logos: z.array(z.string()),
  }),
});

// changelog
const changelogCollection = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "src/content/changelog",
  }),
  schema: z.object({
    ...commonFields,
    logs: z.array(
      z.object({
        version: z.string(),
        date: z.string(),
        feature: z.string().optional(),
        update: z.string().optional(),
        fix: z.string().optional(),
      })
    ),
  }),
});

// review collection schema
const reviewSectionCollection = defineCollection({
  loader: glob({
    pattern: "review.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    enable: z.boolean(),
    reviews: z.array(
      z.object({
        user: z.string(),
        designation: z.string(),
        comment: z.string(),
        rating: z.number().min(0).max(5),
      })
    ),
  }),
});

// Call to Action collection schema
const ctaSectionCollection = defineCollection({
  loader: glob({
    pattern: "call-to-action.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    enable: z.boolean(),
    title: z.string(),
    content: z.string(),
    button: z.object({
      enable: z.boolean(),
      label: z.string(),
      placeholder: z.string(),
      link: z.string(),
    }),
  }),
});

// Pages collection schema
const pagesCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/pages" }),
  schema: z.object({
    ...commonFields,
    badge: z.string().optional(),
    button: z
      .object({
        enable: z.boolean(),
        label: z.string(),
        link: z.string(),
      })
      .optional(),
  }),
});

// Export collections
export const collections = {
  about: aboutCollection,
  blog: blogCollection,
  case: useCasesCollection,
  changelog: changelogCollection,
  homepage: homepageCollection,
  pricing: pricingCollection,
  contact: contactCollection,
  demo: demoCollection,
  features: featuresCollection,
  integration: integrationCollection,
  faqSection: faqSectionCollection,
  reviewSection: reviewSectionCollection,
  brandSection: brandSectionCollection,
  ctaSection: ctaSectionCollection,
  pages: pagesCollection,
};
