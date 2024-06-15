'use server'

import dynamic from 'next/dynamic'
import React from 'react'

import { Layout } from 'web/components/Layout'

const AntdInferencer = dynamic(
  () => import('@repo/ui/refine/antd').then((i) => i.AntdInferencer),
  {
    ssr: false,
  },
)

export default async function ListPage() {
  return (
    <Layout>
      <AntdInferencer />
    </Layout>
  )
}
