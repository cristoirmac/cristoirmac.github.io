import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/data/profile';
import { caseStudies } from '@/content/case-studies';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '',
    '/experience',
    '/transformations',
    '/operating-model',
    '/readme',
    '/writing',
    '/about',
    '/contact',
  ];

  const routes: MetadataRoute.Sitemap = staticRoutes.map((path) => ({
    url: `${SITE_URL}${path}/`.replace(/\/\/$/, '/'),
    changeFrequency: 'monthly',
    priority: path === '' ? 1 : 0.7,
  }));

  for (const c of caseStudies) {
    routes.push({
      url: `${SITE_URL}/transformations/${c.slug}/`,
      changeFrequency: 'monthly',
      priority: 0.6,
    });
  }

  return routes;
}
