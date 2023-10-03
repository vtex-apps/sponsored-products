import React from 'react'

import { isSponsored } from '../../utils'
import { AdsAnalyticsProps } from './AdsAnalytics.types'
import { getDataProperties } from './utils'

export const AdsAnalytics = ({
  ProductSummary,
  ...productSummaryProps
}: AdsAnalyticsProps) => {
  const { product, position } = productSummaryProps

  if (!isSponsored(product)) return <ProductSummary {...productSummaryProps} />

  const dataProperties = getDataProperties({ product, position })

  return (
    <div {...dataProperties} data-testid="ads-analytics">
      <ProductSummary {...productSummaryProps} />
    </div>
  )
}
