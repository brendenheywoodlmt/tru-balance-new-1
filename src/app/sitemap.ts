import type { MetadataRoute } from 'next'
import { SERVICES } from '@/constants/services'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://trubalance.life'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = new URL(siteUrl)

  // Static pages
  const staticPages = [
    '',
    '/about',
    '/services',
    '/resources',
    '/contact',
  ].map(route => ({
    url: new URL(route, baseUrl).toString(),
    lastModified: new Date(),
    changeFrequency: (route === '' ? 'weekly' : 'monthly') as 'weekly' | 'monthly',
    priority: route === '' ? 1 : 0.8,
  }))

  // Dynamic service pages
  const servicePages = SERVICES.map(service => ({
    url: new URL(`/services/${service.slug}`, baseUrl).toString(),
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...servicePages]
}
