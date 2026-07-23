import { useEffect } from "react";
import { siteInfo } from "../../data/site";

type SeoProps = {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
};

const getCanonicalUrl = (path: string) => {
  const baseUrl = siteInfo.url.replace(/\/$/, "");
  const routePath = path.startsWith("/") ? path : `/${path}`;

  return routePath === "/" ? `${baseUrl}/` : `${baseUrl}${routePath}`;
};

const upsertMeta = (selector: string, attributes: Record<string, string>) => {
  const existingTag = document.head.querySelector<HTMLMetaElement>(selector);
  const tag = existingTag ?? document.createElement("meta");

  Object.entries(attributes).forEach(([name, value]) => {
    tag.setAttribute(name, value);
  });

  if (!existingTag) {
    document.head.appendChild(tag);
  }
};

const upsertCanonical = (href: string) => {
  const existingLink = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  const link = existingLink ?? document.createElement("link");

  link.setAttribute("rel", "canonical");
  link.setAttribute("href", href);

  if (!existingLink) {
    document.head.appendChild(link);
  }
};

export function Seo({ title, description, path, noindex = false }: SeoProps) {
  useEffect(() => {
    const canonicalUrl = getCanonicalUrl(path);
    const robots = noindex ? "noindex, nofollow" : "index, follow";

    document.documentElement.lang = siteInfo.language;
    document.title = title;

    upsertCanonical(canonicalUrl);
    upsertMeta('meta[name="description"]', { name: "description", content: description });
    upsertMeta('meta[name="robots"]', { name: "robots", content: robots });
    upsertMeta('meta[property="og:title"]', { property: "og:title", content: title });
    upsertMeta('meta[property="og:description"]', {
      property: "og:description",
      content: description,
    });
    upsertMeta('meta[property="og:type"]', { property: "og:type", content: "website" });
    upsertMeta('meta[property="og:url"]', { property: "og:url", content: canonicalUrl });
    upsertMeta('meta[property="og:image"]', {
      property: "og:image",
      content: siteInfo.socialImage,
    });
    upsertMeta('meta[property="og:image:alt"]', {
      property: "og:image:alt",
      content: siteInfo.socialImageAlt,
    });
    upsertMeta('meta[property="og:site_name"]', {
      property: "og:site_name",
      content: siteInfo.name,
    });
    upsertMeta('meta[property="og:locale"]', { property: "og:locale", content: siteInfo.locale });
    upsertMeta('meta[name="twitter:card"]', { name: "twitter:card", content: "summary" });
    upsertMeta('meta[name="twitter:title"]', { name: "twitter:title", content: title });
    upsertMeta('meta[name="twitter:image"]', {
      name: "twitter:image",
      content: siteInfo.socialImage,
    });
    upsertMeta('meta[name="twitter:image:alt"]', {
      name: "twitter:image:alt",
      content: siteInfo.socialImageAlt,
    });
    upsertMeta('meta[name="twitter:description"]', {
      name: "twitter:description",
      content: description,
    });
  }, [description, noindex, path, title]);

  return null;
}
