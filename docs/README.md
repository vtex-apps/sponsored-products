📢 Use this project, [contribute](https://github.com/vtex-apps/sponsored-products) to it or open issues to help evolve it using [Store Discussion](https://github.com/vtex-apps/store-discussion).

# Sponsored Products

<!-- DOCS-IGNORE:start -->
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

[![All Contributors](https://img.shields.io/badge/all_contributors-0-orange.svg?style=flat-square)](#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE:END -->
<!-- DOCS-IGNORE:end -->

VTEX Sponsored Products is responsible for implementing the necessary frontend apps to properly render the sponsored products.

:warning: Keep in mind that this app alone **will not** request the sponsored products; it will only add the "Sponsored" badge and add the Analytics wrapper.

![Media Placeholder](https://github.com/vtex-apps/sponsored-products/assets/15937541/576a2021-0d90-47b7-a6fc-bb60f231cca2)

## Configuration

### Step 1: Adding the Sponsored Products app to your theme's dependency

In your theme's `manifest.json`, add the Sponsored Products app as a dependency:

```json
  "dependencies": {
    "vtex.sponsored-products": "0.x"
  }
```

Now, you are able to use all the blocks exported by the `sponsored-products` app. Check out the full list below:

#### `sponsored-products` blocks

| Block name        | Description                                                                                                    |
| ----------------- | -------------------------------------------------------------------------------------------------------------- |
| `sponsored-badge` | Renders the "Sponsored" badge in your Product Summary. You can customize its CSS however fits best your store. |
| `ads-analytics`   | Necessary for observing impression and click metrics to assess the performance of the campaigns                |

### Step 2: Using the Sponsored Products blocks

#### The sponsored badge

This is fairly straightforward: simply call it as a child block on you Product Summary shelf. For example:

```diff
"product-summary.shelf": {
    "children": [
        "stack-layout#prodsum",
        "product-summary-space",
+       "sponsored-badge",
        "product-summary-name",
        "flex-layout.col#productRating",
        "product-summary-space",
        "product-list-price#summary",
        "flex-layout.row#selling-price-savings",
        "product-installments#summary",
        "add-to-cart-button"
    ]
},
```

They can also be added anywhere where a product is in context. For instance, in a product carrousel.

#### The Ads Analytics wrapper

For this one, you'll need to use the Ads Analytics directly as children of your Gallery block. For instance:

```diff
"gallery": {
    "props": {
        "layouts": [
            {
                "name": "grid",
                "component": "GridSummary",
                "itemsPerRow": {
                    "(min-width:1300px)": 4,
                    "desktop": 3,
                    "tablet": 3,
                    "phone": 2
                }
            },
            {
                "name": "list",
                "component": "ListSummary",
                "itemsPerRow": 1
            }
        ],
+       "ListSummary": "ads-analytics#listLayout",
+       "GridSummary": "ads-analytics"
    }
},

+ "ads-analytics": {
+   "props": {
+       "ProductSummary": "product-summary.shelf"
+   }
+ },

+ "ads-analytics#listLayout": {
+   "props": {
+   "ProductSummary": "product-summary.shelf#listLayout"
+   }
+ },

```

## Blocks

### `sponsored-badge`

No props are necessary, this component is able to access the current product via context automatically.

### `ads-analytics`

| Prop name        | Type     | Description                                 | Default value |
| ---------------- | -------- | ------------------------------------------- | ------------- |
| `ProductSummary` | `string` | The component used for the Product Summary. | `undefined`   |

## Customization

In order to apply CSS customizations in this and other blocks, follow the instructions given in the recipe on [Using CSS Handles for store customization](https://vtex.io/docs/recipes/style/using-css-handles-for-store-customization).

| CSS Handles             |
| ----------------------- |
| `badgeContainer`        |
| `badgeText`             |
| `adsAnalyticsContainer` |

<!-- DOCS-IGNORE:start -->

## Contributors ✨

Thanks goes to these wonderful people:

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind are welcome!

<!-- DOCS-IGNORE:end -->
