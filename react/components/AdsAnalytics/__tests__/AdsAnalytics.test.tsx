import '@testing-library/jest-dom'
import { render } from '@vtex/test-tools/react'
import React from 'react'
import { ProductSummaryContext } from 'vtex.product-summary-context'
import {
  Product,
  State,
} from 'vtex.product-summary-context/react/ProductSummaryTypes'

import ProductFactory from '../../../__testUtils__/factories/product'
import { AdsAnalytics } from '../AdsAnalytics'

const testId = 'product-summary'
const MockProductSummary = () => <div data-testid={testId}>ProductSummary</div>

const position = 1

type Options = {
  fromContext?: boolean
}

const setupTest = (product: Product, { fromContext }: Options = {}) => {
  jest
    .spyOn(ProductSummaryContext, 'useProductSummary')
    .mockImplementation(() => ({ product } as State))

  const propProduct = fromContext ? undefined : product

  return render(
    <AdsAnalytics
      ProductSummary={MockProductSummary}
      product={propProduct}
      position={position}
    />
  )
}

describe('<AdsAnalytics />', () => {
  describe('when a product is sponsored', () => {
    const product = ProductFactory.build() as Product

    it('should render the ProductSummary component passed as prop', () => {
      const { getByTestId } = setupTest(product)

      expect(getByTestId(testId)).toBeInTheDocument()
    })

    it('should add a wrapper with the correct data properties', () => {
      const { getByTestId } = setupTest(product)
      const wrapper = getByTestId('ads-analytics')
      const {
        productId,
        productName,
        advertisement: {
          campaignId,
          adId,
          adRequestId,
          adResponseId,
          actionCost,
        },
      } = product

      expect(wrapper.getAttribute('data-van-prod-id')).toBe(productId)
      expect(wrapper.getAttribute('data-van-prod-name')).toBe(productName)
      expect(wrapper.getAttribute('data-van-position')).toBe('1')
      expect(wrapper.getAttribute('data-van-cid')).toBe(campaignId)
      expect(wrapper.getAttribute('data-van-aid')).toBe(adId)
      expect(wrapper.getAttribute('data-van-req-id')).toBe(adRequestId)
      expect(wrapper.getAttribute('data-van-res-id')).toBe(adResponseId)
      expect(wrapper.getAttribute('data-van-cpc')).toBe(actionCost.toString())
    })
  })

  describe('when a product is not sponsored', () => {
    const product = ProductFactory.build({}, { isSponsored: false }) as Product

    it('should render the ProductSummary component passed as prop', () => {
      const { getByTestId } = setupTest(product)

      expect(getByTestId(testId)).toBeInTheDocument()
    })

    it('should not add a wrapper with the data properties', () => {
      const { queryByTestId } = setupTest(product)

      expect(queryByTestId('ads-analytics')).not.toBeInTheDocument()
    })
  })

  describe('when the product is not passed as prop', () => {
    const product = ProductFactory.build() as Product

    it('should get the product from the context', () => {
      const { getByTestId } = setupTest(product, { fromContext: true })

      expect(getByTestId(testId)).toBeInTheDocument()
    })
  })
})
