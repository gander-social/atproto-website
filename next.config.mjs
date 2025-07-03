import nextMDX from '@next/mdx'

import { recmaPlugins } from './src/mdx/recma.mjs'
import { rehypePlugins } from './src/mdx/rehype.mjs'
import { remarkPlugins } from './src/mdx/remark.mjs'
import withSearch from './src/mdx/search.mjs'

const withMDX = nextMDX({
  options: {
    remarkPlugins,
    rehypePlugins,
    recmaPlugins,
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  async redirects() {
    return [
      {
        source: '/guides',
        destination: '/docs',
        permanent: false,
      },
      {
        source: '/specs',
        destination: '/docs',
        permanent: false,
      },
      {
        source: '/lexicons',
        destination: '/docs',
        permanent: false,
      },
      {
        source: '/specs/auth',
        destination: '/specs/oauth',
        permanent: false,
      },
      // legacy docs
      {
        source: '/faq',
        destination: 'https://atproto.com/guides/faq',
        permanent: false,
      },
      {
        source: '/specs/did-plc',
        destination: 'https://github.com/did-method-plc/did-method-plc',
        permanent: false,
      },
      {
        source: '/lexicons/com-atproto-admin',
        destination: '/lexicons/com-atproto',
        permanent: false,
      },
      {
        source: '/lexicons/com-atproto-identity',
        destination: '/lexicons/com-atproto',
        permanent: false,
      },
      {
        source: '/lexicons/com-atproto-label',
        destination: '/lexicons/com-atproto',
        permanent: false,
      },
      {
        source: '/lexicons/com-atproto-moderation',
        destination: '/lexicons/com-atproto',
        permanent: false,
      },
      {
        source: '/lexicons/com-atproto-repo',
        destination: '/lexicons/com-atproto',
        permanent: false,
      },
      {
        source: '/lexicons/com-atproto-server',
        destination: '/lexicons/com-atproto',
        permanent: false,
      },
      {
        source: '/lexicons/com-atproto-sync',
        destination: '/lexicons/com-atproto',
        permanent: false,
      },
      {
        source: '/lexicons/com-atproto-sync',
        destination: '/lexicons/com-atproto',
        permanent: false,
      },
      {
        source: '/lexicons/app-gndr-actor',
        destination: '/lexicons/app-gndr',
        permanent: false,
      },
      {
        source: '/lexicons/app-gndr-embed',
        destination: '/lexicons/app-gndr',
        permanent: false,
      },
      {
        source: '/lexicons/app-gndr-feed',
        destination: '/lexicons/app-gndr',
        permanent: false,
      },
      {
        source: '/lexicons/app-gndr-graph',
        destination: '/lexicons/app-gndr',
        permanent: false,
      },
      {
        source: '/lexicons/app-gndr-notification',
        destination: '/lexicons/app-gndr',
        permanent: false,
      },
      {
        source: '/lexicons/app-gndr-richtext',
        destination: '/lexicons/app-gndr',
        permanent: false,
      },
      // redirects to Bluesky API docs site
      {
        source: '/community',
        destination: 'https://docs.gndr.app/showcase',
        permanent: false,
      },
      {
        source: '/community/quick-start',
        destination: 'https://docs.gndr.app/docs/get-started',
        permanent: false,
      },
      {
        source: '/community/projects',
        destination: 'https://docs.gndr.app/showcase',
        permanent: false,
      },
      {
        source: '/community/groups',
        destination: 'https://docs.gndr.app/showcase',
        permanent: false,
      },
      {
        source: '/blog',
        destination: 'https://docs.gndr.app/blog',
        permanent: false,
      },
      {
        source: '/blog/feature-bridgyfed',
        destination: 'https://docs.gndr.app/blog/feature-bridgyfed',
        permanent: false,
      },
      {
        source: '/blog/repo-export',
        destination: 'https://docs.gndr.app/blog/repo-export',
        permanent: false,
      },
      {
        source: '/blog/2023-protocol-roadmap',
        destination: 'https://docs.gndr.app/blog/protocol-roadmap',
        permanent: false,
      },
      {
        source: '/blog/building-on-atproto',
        destination: 'https://docs.gndr.app/blog/building-on-atproto',
        permanent: false,
      },
      {
        source: '/blog/bgs-and-did-doc',
        destination: 'https://docs.gndr.app/blog/bgs-and-did-doc',
        permanent: false,
      },
      {
        source: '/blog/rate-limits-pds-v3',
        destination: 'https://docs.gndr.app/blog/rate-limits-pds-v3',
        permanent: false,
      },
      {
        source: '/blog/repo-sync-update',
        destination: 'https://docs.gndr.app/blog/repo-sync-update',
        permanent: false,
      },
      {
        source: '/blog/create-post',
        destination: 'https://docs.gndr.app/docs/advanced-guides/posts',
        permanent: false,
      },
      {
        source: '/blog/feature-skyfeed',
        destination: 'https://docs.gndr.app/blog/feature-skyfeed',
        permanent: false,
      },
      {
        source: '/blog/call-for-developers',
        destination: 'https://docs.gndr.app/blog/call-for-developers',
        permanent: false,
      },
      {
        source: '/blog/federation-developer-sandbox',
        destination: 'https://docs.gndr.app/blog/federation-sandbox',
        permanent: false,
      },
      {
        source: '/blog/block-implementation',
        destination: 'https://docs.gndr.app/blog/block-implementation',
        permanent: false,
      },
    ]
  },
}

export default withSearch(withMDX(nextConfig))
