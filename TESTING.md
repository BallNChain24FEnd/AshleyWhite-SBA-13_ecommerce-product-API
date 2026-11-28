
# API Testing Documentation

## SBA 13 - Zenith Product API
 
**Base URL:** http://localhost:3014  
**Postman Collection:** SBA 13 - Zenith Product API  
**Authorization:** No Auth

## Testing Overview

Postman was used to verify the functionality of the Zenith Product API throughout the development process. Testing included server connectivity, CRUD operations, schema validation, error handling, filtering, sorting, and pagination.

## 1. Server Connectivity

| Test | Method | Endpoint | Expected Status | Result |
| --- | --- | --- | --- | --- |
| Test Express Server | GET | / | 200 OK | Pass |

## 2. Create Product

| Test | Method | Endpoint | Expected Status | Result |
| --- | --- | --- | --- | --- |
| Create Product | POST | /api/products | 201 Created | Pass |
| Create Product - Validation Errors | POST | /api/products | 400 Bad Request | Pass |

### Successful Product Creation

```json
{
    "name": "Wireless Headphones",
    "description": "Bluetooth headphones with noise cancellation.",
    "price": 129.99,
    "category": "Electronics",
    "tags": ["wireless", "audio", "headphones"]
}
```

The successful response included a MongoDB-generated ID and the default values for inStock and createdAt.

### Validation Test

```json
{
    "description": "Bluetooth headphones with noise cancellation.",
    "price": 0,
    "category": "Electronics"
}
```

This request tested both a missing required name and an invalid price.

Expected response: 400 Bad Request.

## 3. Retrieve Products

| Test | Method | Endpoint | Expected Status | Result |
| --- | --- | --- | --- | --- |
| Get All Products | GET | /api/products | 200 OK | Pass |
| Get Product by ID | GET | /api/products/:id | 200 OK | Pass |
| Get Product by ID - Not Found | GET | /api/products/:id | 404 Not Found | Pass |

## 4. Update and Delete Products

| Test | Method | Endpoint | Expected Status | Result |
| --- | --- | --- | --- | --- |
| Update Product by ID | PUT | /api/products/:id | 200 OK | Pass |
| Delete Product by ID | DELETE | /api/products/:id | 200 OK | Pass |
| Update Product by ID - Not Found | PUT | /api/products/:id | 404 Not Found | Pass |
| Delete Product by ID - Not Found | DELETE | /api/products/:id | 404 Not Found | Pass |

### Update Request Body

```json
{
    "price": 99.99,
    "inStock": false
}
```

The original Wireless Headphones product was updated and subsequently deleted. Its deleted ID was reused to verify the not-found responses.

## 5. Advanced Querying Test Data

Five products were created to test filtering, sorting, and pagination.

| Product | Category | Price |
| --- | --- | ---: |
| Wireless Mouse | Electronics | $24.99 |
| Bluetooth Speaker | Electronics | $79.99 |
| Wireless Headphones | Electronics | $129.99 |
| Laptop | Electronics | $899.99 |
| Cotton T-Shirt | Clothing | $19.99 |

Each product was created using the POST /api/products endpoint.

## 6. Filtering Tests

All filtering requests used the GET method.

| Query Parameters | Expected Products | Status | Result |
| --- | --- | --- | --- |
| category=Electronics | 4 products | 200 OK | Pass |
| minPrice=100 | 2 products | 200 OK | Pass |
| maxPrice=50 | 2 products | 200 OK | Pass |
| category=Electronics&minPrice=50&maxPrice=150 | 2 products | 200 OK | Pass |

## 7. Sorting Tests

| Query Parameters | Expected Result | Status | Result |
| --- | --- | --- | --- |
| sortBy=price_asc | Lowest to highest price | 200 OK | Pass |
| sortBy=price_desc | Highest to lowest price | 200 OK | Pass |

### Ascending Price Order

1. Cotton T-Shirt - $19.99
2. Wireless Mouse - $24.99
3. Bluetooth Speaker - $79.99
4. Wireless Headphones - $129.99
5. Laptop - $899.99

### Descending Price Order

1. Laptop - $899.99
2. Wireless Headphones - $129.99
3. Bluetooth Speaker - $79.99
4. Wireless Mouse - $24.99
5. Cotton T-Shirt - $19.99

## 8. Pagination Tests

| Query Parameters | Expected Products | Status | Result |
| --- | --- | --- | --- |
| sortBy=price_asc&page=1&limit=2 | Cotton T-Shirt and Wireless Mouse | 200 OK | Pass |
| sortBy=price_asc&page=2&limit=2 | Bluetooth Speaker and Wireless Headphones | 200 OK | Pass |

## 9. Combined Advanced Query

Method: GET

```text
http://localhost:3014/api/products?category=Electronics&minPrice=50&maxPrice=150&sortBy=price_desc&page=1&limit=1
```

Expected response:

- Status: 200 OK
- Number of products: 1
- Product: Wireless Headphones
- Price: $129.99
- Category: Electronics

Result: Pass

This test verified that category filtering, minimum and maximum price filtering, descending sorting, and pagination work together.

## 10. Testing Summary

| Testing Category | Number of Tests |
| --- | ---: |
| Server Connectivity | 1 |
| Product Creation and Validation | 2 |
| Product Retrieval | 3 |
| Product Update and Deletion | 4 |
| Filtering | 4 |
| Sorting | 2 |
| Pagination | 2 |
| Combined Advanced Querying | 1 |
| Total | 19 |

## Conclusion

The documented Postman tests verified the primary functionality of the Zenith Product API, including standard CRUD operations and advanced querying capabilities.
