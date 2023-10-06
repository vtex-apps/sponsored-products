import { faker } from '@faker-js/faker'
import { Factory } from 'rosie'
import { Product } from 'vtex.product-summary-context/react/ProductSummaryTypes'

const ProductFactory = Factory.define<Partial<Product>>('product')
  .option('isSponsored', true)
  .attr('productId', faker.string.uuid)
  .attr('productName', faker.commerce.productName())
  .attr('advertisement', ['isSponsored'], (isSponsored: boolean) => {
    if (!isSponsored) return

    return {
      adId: faker.string.uuid(),
      campaignId: faker.string.uuid(),
      adRequestId: faker.string.uuid(),
      adResponseId: faker.string.uuid(),
      actionCost: faker.number.float({ min: 0, max: 5, precision: 0.01 }),
    }
  })

export default ProductFactory
