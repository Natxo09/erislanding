import { appData } from '@/lib/app-data';

interface ArticleJsonLdProps {
  title: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  url: string;
  image?: string;
}

export function ArticleJsonLd({
  title,
  description,
  datePublished,
  dateModified,
  url,
  image = "/meta.png"
}: ArticleJsonLdProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "image": `${appData.urls.landing}${image}`,
    "datePublished": datePublished,
    "dateModified": dateModified || datePublished,
    "author": {
      "@type": "Person",
      "name": appData.developer.name,
      "url": appData.developer.url
    },
    "publisher": {
      "@type": "Person",
      "name": appData.developer.name,
      "logo": {
        "@type": "ImageObject",
        "url": `${appData.urls.landing}/iconnobg.png`
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${appData.urls.landing}${url}`
    }
  };
  
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema)
      }}
    />
  );
}