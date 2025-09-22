import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

// Add this at the top of your file
const debugCollection = (data: any) => {
  console.log('Collection Data:', JSON.stringify(data, null, 2));
  return data;
};

const createDebugSchema = (schema: any, name: string) => {
  return schema.superRefine((data: any, ctx: any) => {
    console.log(`Validating ${name}:`, data);
    try {
      schema.parse(data);
    } catch (error) {
      console.error(`Validation error in ${name}:`, error);
      if (error instanceof Error) {
        ctx.addIssue({
          code: 'custom',
          message: `Schema validation failed: ${error.message}`,
        });
      } else {
        ctx.addIssue({
          code: 'custom',
          message: 'Schema validation failed due to an unknown error.',
        });
      }
    }
    return data;
  });
};

const loggedArray = <T extends z.ZodTypeAny>(schema: z.ZodArray<T>) => {
  return schema.transform((data, ctx) => {
    console.log(`Array data:`, {
      length: data?.length,
      data: data
    });
    return data;
  });
};

// Homepage collection schema
const homepageCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/homepage" }),
  schema: createDebugSchema(z.object({
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
        images: loggedArray(z.array(z.string())).optional().default([]),
        clients: z.object({
          rating: z.string(),
          user: z.string(),
        }),
      }),
    }),
    brand: z.object({
      title: z.string(),
      logos: z.array(z.string()).min(1).optional().default([]),
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
  }), 'homepage')
});

// pricing
const pricingCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/pricing" }),
  schema: z.object({
    title: z.string(),
    meta_title: z.string(),
    description: z.string(),
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
                z.string(), // Feature name
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
const caseStudiesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    meta_title: z.string().optional(),
    image: z.string().optional(),
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
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    date: z.date().optional(),
    image: z.string().optional(),
    draft: z.boolean().optional(),
  }),
});

// features
// const featuresCollection = defineCollection({ ... });

// integration
const platformsCollection = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "src/content/platforms",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    categories: z.array(
      z.object({
        name: z.string(),
        description: z.string(),
        platforms: z.array(
          z.object({
            name: z.string(),
            logo: z.string(),
            details: z.string(),
          })
        ),
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
    title: z.string(),
    meta_title: z.string().optional(), // Optional since it's an empty string
    description: z.string(),
    draft: z.boolean(),
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
    title: z.string().optional(),
    meta_title: z.string(),
    description: z.string().optional(),
    image: z.string().optional(),
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
    title: z.string(),
    description: z.string(),
    meta_title: z.string(),
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
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string(),
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
    title: z.string(),
    logos: z.array(z.string()).min(1).optional().default([]),
  }),
});

// changelog
const changelogCollection = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "src/content/changelog",
  }),
  schema: z.object({
    title: z.string(),
    meta_title: z.string(),
    description: z.string(),
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
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
    badge: z.string().optional(),
    button: z
      .object({
        enable: z.boolean(),
        label: z.string(),
        link: z.string(),
      })
      .optional(),
    draft: z.boolean().optional(),
  }),
});

// services collection
const servicesCollection = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "src/content/services",
  }),
  schema: z.object({
    title: z.string(),
    meta_title: z.string(),
    description: z.string(),
    hero: z.object({
      title: z.string(),
      content: z.string(),
    }),
    services: z.array(
      z.object({
        title: z.string(),
        description: z.string(),
        icon: z.string(),
        image: z.string(),
        link: z.string(),
        badge: z.string(),
        highlights: z.array(z.string()),
      })
    ).optional(),
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
    }).optional(),
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
    }).optional(),
    section_3: z.object({
      title: z.string(),
      icon: z.string(),
      image: z.string(),
      content: z.string(),
    }).optional(),
    section_4: z.object({
      title: z.string(),
      icon: z.string(),
      image_1: z.string(),
      image_2: z.string(),
      content: z.string(),
    }).optional(),
    section_5: z.object({
      title: z.string(),
      icon: z.string(),
      image: z.string(),
      content: z.string(),
      highlights: z.array(z.string()).optional(),
    }).optional(),
    review: z.object({
      title: z.string(),
      content: z.string(),
    }).optional(),
  }),
});

// Export collections
export const collections = {
  about: aboutCollection,
  blog: blogCollection,
  "case-studies": caseStudiesCollection,
  changelog: changelogCollection,
  homepage: {
    ...homepageCollection,
    transform: debugCollection
  },
  pricing: pricingCollection,
  contact: contactCollection,
  demo: demoCollection,
  services: servicesCollection,
  platforms: platformsCollection,
  faqSection: faqSectionCollection,
  reviewSection: reviewSectionCollection,
  brandSection: brandSectionCollection,
  ctaSection: ctaSectionCollection,
  pages: pagesCollection,
};
