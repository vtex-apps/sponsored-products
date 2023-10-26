import React from 'react'
import { ProductSummaryContext } from 'vtex.product-summary-context'

import { isSponsored } from '../../utils'
import { AdsAnalyticsProps } from './AdsAnalytics.types'
import { getDataProperties } from './utils'

const { useProductSummary } = ProductSummaryContext

export const AdsAnalytics = ({
  ProductSummary,
  ...productSummaryProps
}: AdsAnalyticsProps) => {
  const { product: productFromContext } = useProductSummary()
  const { product: productFromProps, position } = productSummaryProps

  const product = productFromProps ?? productFromContext

  if (!isSponsored(product)) return <ProductSummary {...productSummaryProps} />

  const dataProperties = getDataProperties({ product, position })

  return (
    <div {...dataProperties} data-testid="ads-analytics">
      <ProductSummary {...productSummaryProps} />
    </div>
  )
}
