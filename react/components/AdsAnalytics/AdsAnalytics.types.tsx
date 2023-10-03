import { ProductSummaryTypes } from 'vtex.product-summary-context'

type ProductSummaryProps = {
  product: ProductSummaryTypes.Product
  position: number
  [x: string]: unknown
}

export type AdsAnalyticsProps = {
  ProductSummary: React.FC<ProductSummaryProps>
} & ProductSummaryProps

export type DataProperties = {
  'data-van-prod-id': string
  'data-van-prod-name': string
  'data-van-position': number
  'data-van-aid': string
  'data-van-cid': string
  'data-van-req-id': string
  'data-van-res-id': string
  'data-van-cpc': number
}
