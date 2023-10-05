import { Product } from 'vtex.product-summary-context/react/ProductSummaryTypes'

import { isSponsored } from '../../../utils'
import { DataProperties } from '../AdsAnalytics.types'

type GetDataPropertiesArgs = {
  product: Product
  position: number
}

const getDataProperties = ({
  product,
  position,
}: GetDataPropertiesArgs): Nullable<DataProperties> => {
  if (!isSponsored(product)) return

  const {
    productId,
    productName,
    advertisement: { adId, campaignId, adRequestId, adResponseId, actionCost },
  } = product

  return {
    'data-van-prod-id': productId,
    'data-van-prod-name': productName,
    'data-van-position': position,
    'data-van-aid': adId,
    'data-van-cid': campaignId,
    'data-van-req-id': adRequestId,
    'data-van-res-id': adResponseId,
    'data-van-cpc': actionCost,
  }
}

export default getDataProperties
