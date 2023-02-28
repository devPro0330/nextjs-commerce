import type { GetStaticPropsContext } from 'next'
import { useRouter } from 'next/router'
import { getConfig } from '@bigcommerce/storefront-data-hooks/api'
import getAllPages from '@bigcommerce/storefront-data-hooks/api/operations/get-all-pages'
import { Layout } from '@components/common'
import { Container, Text } from '@components/ui'
import { Bag } from '@components/icons'

export async function getStaticProps({
  preview,
  locale,
}: GetStaticPropsContext) {
  const config = getConfig({ locale })
  const { pages } = await getAllPages({ config, preview })
  return {
    props: { pages },
  }
}

export default function Smartphones() {
  const router = useRouter()
  const { asPath } = router
  return (
    <Container>
      <h1>Smartphones: {asPath}</h1>
    </Container>
  )
}

Smartphones.Layout = Layout