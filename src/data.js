const PRODUCT_DATA =[
    {
        "id": 1,
        "title": "Product 1",
        "description": "Description for Product 1.",
        "category": "rings",
        "price": 12.5,
        "discountPercentage": 5.5,
        "rating": 4.1,
        "stock": 12,
        "tags": [
            "jewelry",
            "rings"
        ],
        "brand": "Brand 1",
        "sku": "SKU001",
        "weight": 0.25,
        "dimensions": {
            "width": 2.1,
            "height": 1.05,
            "depth": 2.1
        },
        "warrantyInformation": "6 months warranty",
        "shippingInformation": "Ships in 3-5 business days",
        "availabilityStatus": "Low Stock",
        "reviews": [],
        "returnPolicy": "30 days return policy",
        "minimumOrderQuantity": 1,
        "meta": {
            "createdAt": "2025-01-01T12:00:00.000Z",
            "updatedAt": "2025-01-01T12:00:00.000Z",
            "barcode": "1234567890001",
            "qrCode": "https://example.com/qr-code/product-1.png"
        },
        "images": [
            "/images/products/ring.jpg"
        ],
        "thumbnail": "/images/products/ring.jpg"
    },
    {
        "id": 2,
        "title": "Product 2",
        "description": "Description for Product 2.",
        "category": "bracelets",
        "price": 15.0,
        "discountPercentage": 6.0,
        "rating": 4.2,
        "stock": 14,
        "tags": [
            "jewelry",
            "bracelets"
        ],
        "brand": "Brand 2",
        "sku": "SKU002",
        "weight": 0.3,
        "dimensions": {
            "width": 2.2,
            "height": 1.1,
            "depth": 2.2
        },
        "warrantyInformation": "6 months warranty",
        "shippingInformation": "Ships in 3-5 business days",
        "availabilityStatus": "In Stock",
        "reviews": [],
        "returnPolicy": "30 days return policy",
        "minimumOrderQuantity": 1,
        "meta": {
            "createdAt": "2025-01-01T12:00:00.000Z",
            "updatedAt": "2025-01-01T12:00:00.000Z",
            "barcode": "1234567890002",
            "qrCode": "https://example.com/qr-code/product-2.png"
        },
        "images": [
            "/images/products/bracelets.jpg"
        ],
        "thumbnail": "/images/products/bracelets.jpg"
    },
    {
        "id": 3,
        "title": "Product 3",
        "description": "Description for Product 3.",
        "category": "earrings",
        "price": 17.5,
        "discountPercentage": 6.5,
        "rating": 4.3,
        "stock": 16,
        "tags": [
            "jewelry",
            "earrings"
        ],
        "brand": "Brand 3",
        "sku": "SKU003",
        "weight": 0.35,
        "dimensions": {
            "width": 2.3,
            "height": 1.15,
            "depth": 2.3
        },
        "warrantyInformation": "6 months warranty",
        "shippingInformation": "Ships in 3-5 business days",
        "availabilityStatus": "Low Stock",
        "reviews": [],
        "returnPolicy": "30 days return policy",
        "minimumOrderQuantity": 1,
        "meta": {
            "createdAt": "2025-01-01T12:00:00.000Z",
            "updatedAt": "2025-01-01T12:00:00.000Z",
            "barcode": "1234567890003",
            "qrCode": "https://example.com/qr-code/product-3.png"
        },
        "images": [
            "/images/products/earrings.jpg"
        ],
        "thumbnail": "/images/products/earrings.jpg"
    },
    {
        "id": 4,
        "title": "Product 4",
        "description": "Description for Product 4.",
        "category": "necklaces",
        "price": 20.0,
        "discountPercentage": 7.0,
        "rating": 4.4,
        "stock": 18,
        "tags": [
            "jewelry",
            "necklaces"
        ],
        "brand": "Brand 4",
        "sku": "SKU004",
        "weight": 0.4,
        "dimensions": {
            "width": 2.4,
            "height": 1.2,
            "depth": 2.4
        },
        "warrantyInformation": "6 months warranty",
        "shippingInformation": "Ships in 3-5 business days",
        "availabilityStatus": "In Stock",
        "reviews": [],
        "returnPolicy": "30 days return policy",
        "minimumOrderQuantity": 1,
        "meta": {
            "createdAt": "2025-01-01T12:00:00.000Z",
            "updatedAt": "2025-01-01T12:00:00.000Z",
            "barcode": "1234567890004",
            "qrCode": "https://example.com/qr-code/product-4.png"
        },
        "images": [
            "/images/products/necklaces.jpg"
        ],
        "thumbnail": "/images/products/necklaces.jpg"
    },
    {
        "id": 5,
        "title": "Product 5",
        "description": "Description for Product 5.",
        "category": "jhumki",
        "price": 22.5,
        "discountPercentage": 7.5,
        "rating": 4.0,
        "stock": 20,
        "tags": [
            "jewelry",
            "jhumkis"
        ],
        "brand": "Brand 5",
        "sku": "SKU005",
        "weight": 0.45,
        "dimensions": {
            "width": 2.5,
            "height": 1.25,
            "depth": 2.5
        },
        "warrantyInformation": "6 months warranty",
        "shippingInformation": "Ships in 3-5 business days",
        "availabilityStatus": "Low Stock",
        "reviews": [],
        "returnPolicy": "30 days return policy",
        "minimumOrderQuantity": 1,
        "meta": {
            "createdAt": "2025-01-01T12:00:00.000Z",
            "updatedAt": "2025-01-01T12:00:00.000Z",
            "barcode": "1234567890005",
            "qrCode": "https://example.com/qr-code/product-5.png"
        },
        "images": [
            "/images/products/jhumki.jpg"
        ],
        "thumbnail": "/images/products/jhumki.jpg"
    },
    {
        "id": 6,
        "title": "Product 6",
        "description": "Description for Product 6.",
        "category": "rings",
        "price": 25.0,
        "discountPercentage": 8.0,
        "rating": 4.1,
        "stock": 22,
        "tags": [
            "jewelry",
            "rings"
        ],
        "brand": "Brand 6",
        "sku": "SKU006",
        "weight": 0.5,
        "dimensions": {
            "width": 2.6,
            "height": 1.3,
            "depth": 2.6
        },
        "warrantyInformation": "6 months warranty",
        "shippingInformation": "Ships in 3-5 business days",
        "availabilityStatus": "In Stock",
        "reviews": [],
        "returnPolicy": "30 days return policy",
        "minimumOrderQuantity": 1,
        "meta": {
            "createdAt": "2025-01-01T12:00:00.000Z",
            "updatedAt": "2025-01-01T12:00:00.000Z",
            "barcode": "1234567890006",
            "qrCode": "https://example.com/qr-code/product-6.png"
        },
        "images": [
            "/images/products/ring.jpg"
        ],
        "thumbnail": "/images/products/ring.jpg"
    },
    {
        "id": 7,
        "title": "Product 7",
        "description": "Description for Product 7.",
        "category": "bracelets",
        "price": 27.5,
        "discountPercentage": 8.5,
        "rating": 4.2,
        "stock": 24,
        "tags": [
            "jewelry",
            "bracelets"
        ],
        "brand": "Brand 7",
        "sku": "SKU007",
        "weight": 0.55,
        "dimensions": {
            "width": 2.7,
            "height": 1.35,
            "depth": 2.7
        },
        "warrantyInformation": "6 months warranty",
        "shippingInformation": "Ships in 3-5 business days",
        "availabilityStatus": "Low Stock",
        "reviews": [],
        "returnPolicy": "30 days return policy",
        "minimumOrderQuantity": 1,
        "meta": {
            "createdAt": "2025-01-01T12:00:00.000Z",
            "updatedAt": "2025-01-01T12:00:00.000Z",
            "barcode": "1234567890007",
            "qrCode": "https://example.com/qr-code/product-7.png"
        },
        "images": [
            "/images/products/bracelets.jpg"
        ],
        "thumbnail": "/images/products/bracelets.jpg"
    },
    {
        "id": 8,
        "title": "Product 8",
        "description": "Description for Product 8.",
        "category": "earrings",
        "price": 30.0,
        "discountPercentage": 9.0,
        "rating": 4.3,
        "stock": 26,
        "tags": [
            "jewelry",
            "earrings"
        ],
        "brand": "Brand 8",
        "sku": "SKU008",
        "weight": 0.6,
        "dimensions": {
            "width": 2.8,
            "height": 1.4,
            "depth": 2.8
        },
        "warrantyInformation": "6 months warranty",
        "shippingInformation": "Ships in 3-5 business days",
        "availabilityStatus": "In Stock",
        "reviews": [],
        "returnPolicy": "30 days return policy",
        "minimumOrderQuantity": 1,
        "meta": {
            "createdAt": "2025-01-01T12:00:00.000Z",
            "updatedAt": "2025-01-01T12:00:00.000Z",
            "barcode": "1234567890008",
            "qrCode": "https://example.com/qr-code/product-8.png"
        },
        "images": [
            "/images/products/earrings.jpg"
        ],
        "thumbnail": "/images/products/earrings.jpg"
    },
    {
        "id": 9,
        "title": "Product 9",
        "description": "Description for Product 9.",
        "category": "necklaces",
        "price": 32.5,
        "discountPercentage": 9.5,
        "rating": 4.4,
        "stock": 28,
        "tags": [
            "jewelry",
            "necklaces"
        ],
        "brand": "Brand 9",
        "sku": "SKU009",
        "weight": 0.65,
        "dimensions": {
            "width": 2.9,
            "height": 1.45,
            "depth": 2.9
        },
        "warrantyInformation": "6 months warranty",
        "shippingInformation": "Ships in 3-5 business days",
        "availabilityStatus": "Low Stock",
        "reviews": [],
        "returnPolicy": "30 days return policy",
        "minimumOrderQuantity": 1,
        "meta": {
            "createdAt": "2025-01-01T12:00:00.000Z",
            "updatedAt": "2025-01-01T12:00:00.000Z",
            "barcode": "1234567890009",
            "qrCode": "https://example.com/qr-code/product-9.png"
        },
        "images": [
            "/images/products/necklaces.jpg"
        ],
        "thumbnail": "/images/products/necklaces.jpg"
    },
    {
        "id": 10,
        "title": "Product 10",
        "description": "Description for Product 10.",
        "category": "jhumki",
        "price": 35.0,
        "discountPercentage": 10.0,
        "rating": 4.0,
        "stock": 30,
        "tags": [
            "jewelry",
            "jhumkis"
        ],
        "brand": "Brand 10",
        "sku": "SKU010",
        "weight": 0.7,
        "dimensions": {
            "width": 3.0,
            "height": 1.5,
            "depth": 3.0
        },
        "warrantyInformation": "6 months warranty",
        "shippingInformation": "Ships in 3-5 business days",
        "availabilityStatus": "In Stock",
        "reviews": [],
        "returnPolicy": "30 days return policy",
        "minimumOrderQuantity": 1,
        "meta": {
            "createdAt": "2025-01-01T12:00:00.000Z",
            "updatedAt": "2025-01-01T12:00:00.000Z",
            "barcode": "1234567890010",
            "qrCode": "https://example.com/qr-code/product-10.png"
        },
        "images": [
            "/images/products/jhumki.jpg"
        ],
        "thumbnail": "/images/products/jhumki.jpg"
    },
    {
        "id": 11,
        "title": "Product 11",
        "description": "Description for Product 11.",
        "category": "rings",
        "price": 37.5,
        "discountPercentage": 10.5,
        "rating": 4.1,
        "stock": 32,
        "tags": [
            "jewelry",
            "rings"
        ],
        "brand": "Brand 11",
        "sku": "SKU011",
        "weight": 0.75,
        "dimensions": {
            "width": 3.1,
            "height": 1.55,
            "depth": 3.1
        },
        "warrantyInformation": "6 months warranty",
        "shippingInformation": "Ships in 3-5 business days",
        "availabilityStatus": "Low Stock",
        "reviews": [],
        "returnPolicy": "30 days return policy",
        "minimumOrderQuantity": 1,
        "meta": {
            "createdAt": "2025-01-01T12:00:00.000Z",
            "updatedAt": "2025-01-01T12:00:00.000Z",
            "barcode": "1234567890011",
            "qrCode": "https://example.com/qr-code/product-11.png"
        },
        "images": [
            "/images/products/ring.jpg"
        ],
        "thumbnail": "/images/products/ring.jpg"
    },
    {
        "id": 12,
        "title": "Product 12",
        "description": "Description for Product 12.",
        "category": "bracelets",
        "price": 40.0,
        "discountPercentage": 11.0,
        "rating": 4.2,
        "stock": 34,
        "tags": [
            "jewelry",
            "bracelets"
        ],
        "brand": "Brand 12",
        "sku": "SKU012",
        "weight": 0.8,
        "dimensions": {
            "width": 3.2,
            "height": 1.6,
            "depth": 3.2
        },
        "warrantyInformation": "6 months warranty",
        "shippingInformation": "Ships in 3-5 business days",
        "availabilityStatus": "In Stock",
        "reviews": [],
        "returnPolicy": "30 days return policy",
        "minimumOrderQuantity": 1,
        "meta": {
            "createdAt": "2025-01-01T12:00:00.000Z",
            "updatedAt": "2025-01-01T12:00:00.000Z",
            "barcode": "1234567890012",
            "qrCode": "https://example.com/qr-code/product-12.png"
        },
        "images": [
            "/images/products/bracelets.jpg"
        ],
        "thumbnail": "/images/products/bracelets.jpg"
    },
    {
        "id": 13,
        "title": "Product 13",
        "description": "Description for Product 13.",
        "category": "earrings",
        "price": 42.5,
        "discountPercentage": 11.5,
        "rating": 4.3,
        "stock": 36,
        "tags": [
            "jewelry",
            "earrings"
        ],
        "brand": "Brand 13",
        "sku": "SKU013",
        "weight": 0.85,
        "dimensions": {
            "width": 3.3,
            "height": 1.65,
            "depth": 3.3
        },
        "warrantyInformation": "6 months warranty",
        "shippingInformation": "Ships in 3-5 business days",
        "availabilityStatus": "Low Stock",
        "reviews": [],
        "returnPolicy": "30 days return policy",
        "minimumOrderQuantity": 1,
        "meta": {
            "createdAt": "2025-01-01T12:00:00.000Z",
            "updatedAt": "2025-01-01T12:00:00.000Z",
            "barcode": "1234567890013",
            "qrCode": "https://example.com/qr-code/product-13.png"
        },
        "images": [
            "/images/products/earrings.jpg"
        ],
        "thumbnail": "/images/products/earrings.jpg"
    },
    {
        "id": 14,
        "title": "Product 14",
        "description": "Description for Product 14.",
        "category": "necklaces",
        "price": 45.0,
        "discountPercentage": 12.0,
        "rating": 4.4,
        "stock": 38,
        "tags": [
            "jewelry",
            "necklaces"
        ],
        "brand": "Brand 14",
        "sku": "SKU014",
        "weight": 0.9,
        "dimensions": {
            "width": 3.4000000000000004,
            "height": 1.7000000000000002,
            "depth": 3.4000000000000004
        },
        "warrantyInformation": "6 months warranty",
        "shippingInformation": "Ships in 3-5 business days",
        "availabilityStatus": "In Stock",
        "reviews": [],
        "returnPolicy": "30 days return policy",
        "minimumOrderQuantity": 1,
        "meta": {
            "createdAt": "2025-01-01T12:00:00.000Z",
            "updatedAt": "2025-01-01T12:00:00.000Z",
            "barcode": "1234567890014",
            "qrCode": "https://example.com/qr-code/product-14.png"
        },
        "images": [
            "/images/products/necklaces.jpg"
        ],
        "thumbnail": "/images/products/necklaces.jpg"
    },
    {
        "id": 15,
        "title": "Product 15",
        "description": "Description for Product 15.",
        "category": "jhumki",
        "price": 47.5,
        "discountPercentage": 12.5,
        "rating": 4.0,
        "stock": 40,
        "tags": [
            "jewelry",
            "jhumkis"
        ],
        "brand": "Brand 15",
        "sku": "SKU015",
        "weight": 0.95,
        "dimensions": {
            "width": 3.5,
            "height": 1.75,
            "depth": 3.5
        },
        "warrantyInformation": "6 months warranty",
        "shippingInformation": "Ships in 3-5 business days",
        "availabilityStatus": "Low Stock",
        "reviews": [],
        "returnPolicy": "30 days return policy",
        "minimumOrderQuantity": 1,
        "meta": {
            "createdAt": "2025-01-01T12:00:00.000Z",
            "updatedAt": "2025-01-01T12:00:00.000Z",
            "barcode": "1234567890015",
            "qrCode": "https://example.com/qr-code/product-15.png"
        },
        "images": [
            "/images/products/jhumki.jpg"
        ],
        "thumbnail": "/images/products/jhumki.jpg"
    },
    {
        "id": 16,
        "title": "Product 16",
        "description": "Description for Product 16.",
        "category": "rings",
        "price": 50.0,
        "discountPercentage": 13.0,
        "rating": 4.1,
        "stock": 42,
        "tags": [
            "jewelry",
            "rings"
        ],
        "brand": "Brand 16",
        "sku": "SKU016",
        "weight": 1.0,
        "dimensions": {
            "width": 3.6,
            "height": 1.8,
            "depth": 3.6
        },
        "warrantyInformation": "6 months warranty",
        "shippingInformation": "Ships in 3-5 business days",
        "availabilityStatus": "In Stock",
        "reviews": [],
        "returnPolicy": "30 days return policy",
        "minimumOrderQuantity": 1,
        "meta": {
            "createdAt": "2025-01-01T12:00:00.000Z",
            "updatedAt": "2025-01-01T12:00:00.000Z",
            "barcode": "1234567890016",
            "qrCode": "https://example.com/qr-code/product-16.png"
        },
        "images": [
            "/images/products/ring.jpg"
        ],
        "thumbnail": "/images/products/ring.jpg"
    },
    {
        "id": 17,
        "title": "Product 17",
        "description": "Description for Product 17.",
        "category": "bracelets",
        "price": 52.5,
        "discountPercentage": 13.5,
        "rating": 4.2,
        "stock": 44,
        "tags": [
            "jewelry",
            "bracelets"
        ],
        "brand": "Brand 17",
        "sku": "SKU017",
        "weight": 1.05,
        "dimensions": {
            "width": 3.7,
            "height": 1.85,
            "depth": 3.7
        },
        "warrantyInformation": "6 months warranty",
        "shippingInformation": "Ships in 3-5 business days",
        "availabilityStatus": "Low Stock",
        "reviews": [],
        "returnPolicy": "30 days return policy",
        "minimumOrderQuantity": 1,
        "meta": {
            "createdAt": "2025-01-01T12:00:00.000Z",
            "updatedAt": "2025-01-01T12:00:00.000Z",
            "barcode": "1234567890017",
            "qrCode": "https://example.com/qr-code/product-17.png"
        },
        "images": [
            "/images/products/bracelets.jpg"
        ],
        "thumbnail": "/images/products/bracelets.jpg"
    },
    {
        "id": 18,
        "title": "Product 18",
        "description": "Description for Product 18.",
        "category": "earrings",
        "price": 55.0,
        "discountPercentage": 14.0,
        "rating": 4.3,
        "stock": 46,
        "tags": [
            "jewelry",
            "earrings"
        ],
        "brand": "Brand 18",
        "sku": "SKU018",
        "weight": 1.1,
        "dimensions": {
            "width": 3.8,
            "height": 1.9,
            "depth": 3.8
        },
        "warrantyInformation": "6 months warranty",
        "shippingInformation": "Ships in 3-5 business days",
        "availabilityStatus": "In Stock",
        "reviews": [],
        "returnPolicy": "30 days return policy",
        "minimumOrderQuantity": 1,
        "meta": {
            "createdAt": "2025-01-01T12:00:00.000Z",
            "updatedAt": "2025-01-01T12:00:00.000Z",
            "barcode": "1234567890018",
            "qrCode": "https://example.com/qr-code/product-18.png"
        },
        "images": [
            "/images/products/earrings.jpg"
        ],
        "thumbnail": "/images/products/earrings.jpg"
    },
    {
        "id": 19,
        "title": "Product 19",
        "description": "Description for Product 19.",
        "category": "necklaces",
        "price": 57.5,
        "discountPercentage": 14.5,
        "rating": 4.4,
        "stock": 48,
        "tags": [
            "jewelry",
            "necklaces"
        ],
        "brand": "Brand 19",
        "sku": "SKU019",
        "weight": 1.15,
        "dimensions": {
            "width": 3.9000000000000004,
            "height": 1.9500000000000002,
            "depth": 3.9000000000000004
        },
        "warrantyInformation": "6 months warranty",
        "shippingInformation": "Ships in 3-5 business days",
        "availabilityStatus": "Low Stock",
        "reviews": [],
        "returnPolicy": "30 days return policy",
        "minimumOrderQuantity": 1,
        "meta": {
            "createdAt": "2025-01-01T12:00:00.000Z",
            "updatedAt": "2025-01-01T12:00:00.000Z",
            "barcode": "1234567890019",
            "qrCode": "https://example.com/qr-code/product-19.png"
        },
        "images": [
            "/images/products/necklaces.jpg"
        ],
        "thumbnail": "/images/products/necklaces.jpg"
    },
    {
        "id": 20,
        "title": "Product 20",
        "description": "Description for Product 20.",
        "category": "jhumki",
        "price": 60.0,
        "discountPercentage": 15.0,
        "rating": 4.0,
        "stock": 50,
        "tags": [
            "jewelry",
            "jhumkis"
        ],
        "brand": "Brand 20",
        "sku": "SKU020",
        "weight": 1.2,
        "dimensions": {
            "width": 4.0,
            "height": 2.0,
            "depth": 4.0
        },
        "warrantyInformation": "6 months warranty",
        "shippingInformation": "Ships in 3-5 business days",
        "availabilityStatus": "In Stock",
        "reviews": [],
        "returnPolicy": "30 days return policy",
        "minimumOrderQuantity": 1,
        "meta": {
            "createdAt": "2025-01-01T12:00:00.000Z",
            "updatedAt": "2025-01-01T12:00:00.000Z",
            "barcode": "1234567890020",
            "qrCode": "https://example.com/qr-code/product-20.png"
        },
        "images": [
            "/images/products/jhumki.jpg"
        ],
        "thumbnail": "/images/products/jhumki.jpg"
    }
]

export default PRODUCT_DATA