// Builds the per-page <head> tags and JSON-LD used by the pre-render step.
import { products, site } from "../data/content";
import posts from "../data/medium.json";
import { pages } from "./pages";

const PERSON_ID = `${site.url}/#person`;
const WEBSITE_ID = `${site.url}/#website`;
const OG_IMAGE = `${site.url}/og.png`;

const absolute = (path) => `${site.url}${path === "/" ? "/" : path}`;

const person = () => ({
  "@type": "Person",
  "@id": PERSON_ID,
  name: site.name,
  alternateName: site.alternateNames,
  description: site.description,
  url: `${site.url}/`,
  email: `mailto:${site.email}`,
  jobTitle: site.role,
  worksFor: { "@type": "Organization", name: site.employer.name, url: site.employer.url },
  alumniOf: { "@type": "CollegeOrUniversity", name: site.school.name },
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "degree",
    name: site.school.degree,
    recognizedBy: { "@type": "CollegeOrUniversity", name: site.school.name },
  },
  homeLocation: { "@type": "Place", name: site.location },
  knowsAbout: site.knowsAbout,
  sameAs: [site.github, site.linkedin, site.medium, site.behance],
});

const app = (product) => ({
  "@type": "SoftwareApplication",
  "@id": `${site.url}/${product.slug}#app`,
  name: product.name,
  description: product.metaDescription,
  url: product.schema.url,
  applicationCategory: product.schema.applicationCategory,
  operatingSystem: product.schema.operatingSystem,
  ...(product.schema.free && { offers: { "@type": "Offer", price: "0", priceCurrency: "INR" } }),
  ...(product.schema.license && { license: product.schema.license }),
  author: { "@id": PERSON_ID },
  creator: { "@id": PERSON_ID },
  mainEntityOfPage: absolute(`/${product.slug}`),
});

const website = () => ({
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: `${site.url}/`,
  name: site.name,
  alternateName: site.alternateNames,
  inLanguage: "en",
  publisher: { "@id": PERSON_ID },
});

const graphFor = (key) => {
  if (key === "home") {
    return [
      person(),
      website(),
      {
        "@type": "ProfilePage",
        "@id": `${site.url}/#profile`,
        url: `${site.url}/`,
        name: pages.home.title,
        isPartOf: { "@id": WEBSITE_ID },
        mainEntity: { "@id": PERSON_ID },
      },
      ...products.map(app),
      ...posts.map((post) => ({
        "@type": "BlogPosting",
        headline: post.title,
        url: post.url,
        ...(post.date && { datePublished: post.date }),
        author: { "@id": PERSON_ID },
      })),
    ];
  }
  const product = products.find((p) => p.slug === key);
  if (!product) return null;
  const url = absolute(`/${product.slug}`);
  return [
    person(),
    website(),
    app(product),
    {
      "@type": "WebPage",
      "@id": `${url}#page`,
      url,
      name: pages[key].title,
      description: product.metaDescription,
      isPartOf: { "@id": WEBSITE_ID },
      about: { "@id": `${url}#app` },
      author: { "@id": PERSON_ID },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: site.name, item: `${site.url}/` },
        { "@type": "ListItem", position: 2, name: product.name, item: url },
      ],
    },
  ];
};

const escapeAttr = (value) => value.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

export const metaFor = (key) => {
  const page = pages[key];
  const product = products.find((p) => p.slug === key);
  return { ...page, description: page.description ?? product?.metaDescription ?? site.description };
};

// Returns the HTML that replaces the <!--seo--> … <!--/seo--> block in index.html.
export const headFor = (key) => {
  const meta = metaFor(key);
  const url = meta.path ? absolute(meta.path) : null;
  const tags = [
    `<title>${escapeAttr(meta.title)}</title>`,
    `<meta name="description" content="${escapeAttr(meta.description)}" />`,
    `<meta name="robots" content="${meta.noindex ? "noindex, follow" : "index, follow, max-image-preview:large"}" />`,
  ];
  if (url) tags.push(`<link rel="canonical" href="${url}" />`);
  if (!meta.noindex) {
    tags.push(
      `<meta property="og:type" content="${key === "home" ? "profile" : "website"}" />`,
      `<meta property="og:site_name" content="${site.name}" />`,
      `<meta property="og:locale" content="en_IN" />`,
      `<meta property="og:url" content="${url}" />`,
      `<meta property="og:title" content="${escapeAttr(meta.title)}" />`,
      `<meta property="og:description" content="${escapeAttr(meta.description)}" />`,
      `<meta property="og:image" content="${OG_IMAGE}" />`,
      `<meta property="og:image:width" content="1200" />`,
      `<meta property="og:image:height" content="630" />`,
      `<meta property="og:image:alt" content="${escapeAttr(`${site.name}, software engineer`)}" />`,
      ...(key === "home"
        ? [`<meta property="profile:first_name" content="Muhammed Sahal" />`, `<meta property="profile:last_name" content="K C" />`, `<meta property="profile:username" content="msahalkc" />`]
        : []),
      `<meta name="twitter:card" content="summary_large_image" />`,
      `<meta name="twitter:title" content="${escapeAttr(meta.title)}" />`,
      `<meta name="twitter:description" content="${escapeAttr(meta.description)}" />`,
      `<meta name="twitter:image" content="${OG_IMAGE}" />`
    );
  }
  const graph = graphFor(key);
  if (graph) {
    const json = JSON.stringify({ "@context": "https://schema.org", "@graph": graph }).replace(/</g, "\\u003c");
    tags.push(`<script type="application/ld+json">${json}</script>`);
  }
  return tags.join("\n    ");
};

export const sitemapXml = (lastmod) => {
  const urls = Object.values(pages)
    .filter((page) => page.path && !page.noindex)
    .map((page) => `  <url><loc>${absolute(page.path)}</loc><lastmod>${lastmod}</lastmod></url>`)
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
};
