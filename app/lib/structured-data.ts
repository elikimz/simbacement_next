export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Simba Cement",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://simbacement.com",
    logo: `${process.env.NEXT_PUBLIC_SITE_URL || "https://simbacement.com"}/logo.png`,
    description:
      "Premium building materials and roofing solutions for construction needs",
    sameAs: [
      "https://www.facebook.com/simbacement",
      "https://www.twitter.com/simbacement",
      "https://www.instagram.com/simbacement",
    ],
    contact: {
      "@type": "ContactPoint",
      telephone: "+254-700-000-000",
      contactType: "Customer Service",
      email: "info@simbacement.com",
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "KE",
      addressLocality: "Nairobi",
      addressRegion: "Nairobi County",
    },
  };
}

export function generateProductSchema(product: {
  id: number;
  name: string;
  description?: string;
  price: number;
  image?: string;
  rating?: number;
  reviewCount?: number;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.image,
    offers: {
      "@type": "Offer",
      price: product.price,
      priceCurrency: "KES",
      availability: "https://schema.org/InStock",
    },
    ...(product.rating && {
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: product.rating,
        reviewCount: product.reviewCount || 0,
      },
    }),
  };
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateFAQSchema(
  faqs: Array<{ question: string; answer: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Simba Cement",
    image: `${process.env.NEXT_PUBLIC_SITE_URL || "https://simbacement.com"}/logo.png`,
    description:
      "Premium building materials and roofing solutions for construction needs",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Building Materials Hub",
      addressLocality: "Nairobi",
      addressRegion: "Nairobi County",
      postalCode: "00100",
      addressCountry: "KE",
    },
    telephone: "+254-700-000-000",
    email: "info@simbacement.com",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://simbacement.com",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "13:00",
      },
    ],
  };
}
