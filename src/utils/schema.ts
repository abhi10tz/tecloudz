export function generateOrganizationSchema(siteUrl: string) {
  const base = siteUrl || 'https://tecloudz.com';
  return {
    '@context': 'https://schema.org',
    '@type': 'NewsMediaOrganization',
    name: 'tecloudz',
    url: base,
    logo: {
      '@type': 'ImageObject',
      url: new URL('/favicon.svg', base).href
    }
  };
}

interface BlogPost {
  id: string;
  data: {
    title: string;
    description: string;
    image?: { src: string };
    author: string;
    date: Date;
  };
}

export function generateBlogPostSchema(post: BlogPost, siteUrl: string) {
  const base = siteUrl || 'https://tecloudz.com';
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.data.title,
    description: post.data.description,
    image: post.data.image
      ? new URL(post.data.image.src, base).href
      : new URL('/favicon.svg', base).href,
    author: {
      '@type': 'Person',
      name: post.data.author
    },
    datePublished: post.data.date.toISOString(),
    publisher: {
      '@type': 'Organization',
      name: 'tecloudz',
      logo: {
        '@type': 'ImageObject',
        url: new URL('/favicon.svg', base).href
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': new URL(`/posts/${post.id}`, base).href
    }
  };
}
