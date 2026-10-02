import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://alaalamcc.com';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/', '/api/'], // استثناء الصفحات الخاصة أو الـ API
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}