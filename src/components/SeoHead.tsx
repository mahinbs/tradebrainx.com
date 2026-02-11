import React from "react";
import { Helmet } from "react-helmet-async";
import { SEO, canonicalUrl } from "../lib/seo";

export interface SeoHeadProps {
  /** Page title (e.g. "Home | tradebrainx.com" or "Terms of Service | tradebrainx.com") */
  title: string;
  /** Meta description. If omitted, default site description is used. */
  description?: string;
  /** Path for canonical URL (e.g. "/", "/terms-of-service"). No leading slash is ok. */
  path?: string;
  /** Set to true for thank-you or private pages to avoid indexing. */
  noIndex?: boolean;
  /** Override default OG image path (e.g. "/og-home.png"). Resolved relative to base URL. */
  ogImage?: string;
  /** OG type: website (default) or article */
  ogType?: "website" | "article";
  /** Optional JSON-LD script object (will be stringified and injected). */
  jsonLd?: object | object[];
}

const SeoHead: React.FC<SeoHeadProps> = ({
  title,
  description = SEO.defaultDescription,
  path = "/",
  noIndex = false,
  ogImage = SEO.defaultOgImage,
  ogType = "website",
  jsonLd,
}) => {
  const canonical = canonicalUrl(path);
  const ogImageUrl = ogImage.startsWith("http") ? ogImage : `${SEO.baseUrl}${ogImage.startsWith("/") ? ogImage : `/${ogImage}`}`;

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
        {noIndex && <meta name="robots" content="noindex, nofollow" />}

        {/* Open Graph */}
        <meta property="og:type" content={ogType} />
        <meta property="og:url" content={canonical} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImageUrl} />
        <meta property="og:site_name" content={SEO.siteName} />
        <meta property="og:locale" content={SEO.locale} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={canonical} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImageUrl} />
      </Helmet>
      {jsonLd && (
        <Helmet>
          <script type="application/ld+json">
            {JSON.stringify(Array.isArray(jsonLd) ? jsonLd : jsonLd)}
          </script>
        </Helmet>
      )}
    </>
  );
};

export default SeoHead;
