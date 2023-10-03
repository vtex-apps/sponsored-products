import { Product } from 'vtex.product-summary-context/react/ProductSummaryTypes'

import ProductFactory from '../../../../__testUtils__/factories/product'
import getDataProperties from '../getDataProperties'

const position = 1

describe('#getDataProperties', () => {
  describe('when product is  sponsored', () => {
    const product = ProductFactory.build() as Product

    it('returns the correct data properties to be added to the HTML', () => {
      const dataProperties = getDataProperties({ product, position })

      expect(dataProperties).toMatchObject({
        'data-van-prod-id': product.productId,
        'data-van-prod-name': product.productName,
        'data-van-position': position,
        'data-van-aid': product.advertisement.adId,
        'data-van-cid': product.advertisement.campaignId,
        'data-van-req-id': product.advertisement.adRequestId,
        'data-van-res-id': product.advertisement.adResponseId,
        'data-van-cpc': product.advertisement.actionCost,
      })
    })
  })

  describe('when product is not sponsored', () => {
    const product = ProductFactory.build({}, { isSponsored: false }) as Product

    it('returns undefined', () => {
      const dataProperties = getDataProperties({ product, position })

      expect(dataProperties).toBeUndefined()
    })
  })
})
