'use client'

import { Page, Text, Code, Link } from '@vercel/examples-ui'
import { Navbar } from '@acme/components/navbar'
import { useParams } from 'next/navigation'

export default function IndexPage() {
  const { username } = useParams()

  return (
    <Page>
      <Navbar isDocsApp />
      <Text variant="h1" className="mb-6">
        Docs
      </Text>
      <Text className="mb-4">Docs {username}</Text>
      <Text>
        <a
          className="text-link hover:text-link-light transition-colors"
          href="/"
        >
          Home (Multi-Zones)
        </a>{' '}
      </Text>
    </Page>
  )
}
