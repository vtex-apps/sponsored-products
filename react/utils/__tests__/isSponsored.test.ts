import { Product } from 'vtex.product-summary-context/react/ProductSummaryTypes'

import ProductFactory from '../../__testUtils__/factories/product'
import isSponsored from '../isSponsored'

describe('#isSponsored', () => {
  describe('when the product is sponsored', () => {
    const product = ProductFactory.build() as Product

    it('should return true', () => {
      expect(isSponsored(product)).toBe(true)
    })
  })

  describe('when the product is not sponsored', () => {
    const product = ProductFactory.build({}, { isSponsored: false }) as Product

    it('should return true', () => {
      expect(isSponsored(product)).toBe(false)
    })
  })
})
