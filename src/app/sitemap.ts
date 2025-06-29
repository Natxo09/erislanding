import { MetadataRoute } from 'next';
import { appData } from '@/lib/app-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = appData.urls.landing;
  
  // Static pages with their priorities
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/roadmap`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/changelog`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.6,
    },
  ];
  
  // Add model-specific pages for better SEO
  const modelPages: MetadataRoute.Sitemap = appData.models.map(model => ({
    url: `${baseUrl}/models/${model.name.toLowerCase().replace(/\s+/g, '-')}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));
  
  // Add platform-specific landing pages
  const platformPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/iphone`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ipad`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/macos`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];
  
  // Combine all pages
  return [...staticPages, ...modelPages, ...platformPages];
}