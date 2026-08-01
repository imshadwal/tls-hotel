import { Helmet } from 'react-helmet-async'
import { buildSeo, hotelJsonLd } from '@/utils/seo'

type SeoHeadProps = {
  title?: string
  description?: string
  path?: string
  image?: string
  type?: 'website' | 'article'
  jsonLd?: Record<string, unknown> | Record<string, unknown>[]
}

export function SeoHead({
  title,
  description,
  path,
  image,
  type,
  jsonLd = hotelJsonLd,
}: SeoHeadProps) {
  const seo = buildSeo({ title, description, path, image, type })
  const schemas = Array.isArray(jsonLd) ? jsonLd : [jsonLd]

  return (
    <Helmet>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <link rel="canonical" href={seo.url} />
      <meta property="og:type" content={seo.type} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:image" content={seo.imageUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.imageUrl} />
      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  )
}
