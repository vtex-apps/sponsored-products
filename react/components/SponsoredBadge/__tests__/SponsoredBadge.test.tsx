import '@testing-library/jest-dom'
import { render, screen } from '@vtex/test-tools/react'
import React from 'react'
import { ProductSummaryContext } from 'vtex.product-summary-context'
import { Product } from 'vtex.product-summary-context/react/ProductSummaryTypes'

import ProductFactory from '../../../__testUtils__/factories/product'
import { SponsoredBadge } from '../SponsoredBadge'

const setupTests = ({ isSponsored = true } = {}) => {
  const product = ProductFactory.build({}, { isSponsored }) as Product

  return render(
    <ProductSummaryContext.ProductSummaryProvider product={product}>
      <SponsoredBadge />
    </ProductSummaryContext.ProductSummaryProvider>
  )
}

describe('<SponsoredBadge />', () => {
  describe('when the product is sponsored', () => {
    beforeEach(() => setupTests())

    it('should render the badge', () => {
      expect(screen.getByText(/Sponsored/i)).toBeInTheDocument()
    })
  })

  describe('when the product is not sponsored', () => {
    beforeEach(() => setupTests({ isSponsored: false }))

    it('should not render the badge', () => {
      expect(screen.queryByText(/Sponsored/i)).not.toBeInTheDocument()
    })
  })
})
