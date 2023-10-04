import React from 'react'
import { FormattedMessage } from 'react-intl'
import { useCssHandles } from 'vtex.css-handles'
import { ProductSummaryContext } from 'vtex.product-summary-context'

import { isSponsored } from '../../utils'

const { useProductSummary } = ProductSummaryContext
const CSS_HANDLES = ['badgeContainer', 'badgeText'] as const

export const SponsoredBadge = () => {
  const { product } = useProductSummary()
  const { handles } = useCssHandles(CSS_HANDLES)

  if (!isSponsored(product)) return null

  return (
    <div className={handles.badgeContainer}>
      <span className={handles.badgeText}>
        <FormattedMessage id="store/sponsoredBadge.title" />
      </span>
    </div>
  )
}
