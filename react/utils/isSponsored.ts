import { Product } from 'vtex.product-summary-context/react/ProductSummaryTypes'

const isSponsored = (product: Product) => !!product?.advertisement?.adId

export default isSponsored
