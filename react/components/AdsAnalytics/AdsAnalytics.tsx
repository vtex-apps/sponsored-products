import React from 'react'
import { useCssHandles } from 'vtex.css-handles'

import { isSponsored } from '../../utils'
import { AdsAnalyticsProps } from './AdsAnalytics.types'
import { getDataProperties } from './utils'

const CSS_HANDLES = ['adsAnalyticsContainer'] as const

export const AdsAnalytics = ({
  ProductSummary,
  ...productSummaryProps
}: AdsAnalyticsProps) => {
  const { handles } = useCssHandles(CSS_HANDLES)
  const { product, position } = productSummaryProps

  if (!isSponsored(product)) return <ProductSummary {...productSummaryProps} />

  const dataProperties = getDataProperties({ product, position })

  return (
    <div
      {...dataProperties}
      className={handles.adsAnalyticsContainer}
      data-testid="ads-analytics"
    >
      <ProductSummary {...productSummaryProps} />
    </div>
  )
}
