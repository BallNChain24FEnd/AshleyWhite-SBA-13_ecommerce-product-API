# SBA 13: Build a Product API

## Zenith E-Commerce Product API

## Project Overview

The Zenith Product API is a RESTful backend application designed to manage products for an e-commerce platform. The application uses Node.js, Express, Mongoose, and MongoDB Atlas to perform CRUD operations and advanced database queries.

## Features

- Create, retrieve, update, and delete products using RESTful API endpoints.
- Store and manage product data in MongoDB Atlas with Mongoose schema validation.
- Filter products dynamically by category, minimum price, and maximum price.
- Sort products by price and paginate results using customizable query parameters.

## Technologies Used

- JavaScript (ES Modules)
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- dotenv
- Postman
- Git and GitHub
- Visual Studio Code

## Installation and Setup

1. Clone the repository:

   `git clone https://github.com/BallNChain24FEnd/AshleyWhite-SBA-13_ecommerce-product-API.git`

2. Navigate into the project directory:

   `cd AshleyWhite-SBA-13_ecommerce-product-API`

3. Install the dependencies:

   `npm install`

4. Create a `.env` file in the root directory and configure the environment variables:

   `env
   MONGO_URI=your_mongodb_connection_string
   PORT=3014`

5. Start the server:

   `npm start`

6. Access the application at:

   http://localhost:3014

A valid MongoDB connection string and appropriate database permissions are required.

## API Endpoints

| Method | Endpoint | Description |
| --- | --- | --- |
| GET | / | Welcome message |
| POST | /api/products | Create a new product |
| GET | /api/products | Retrieve products |
| GET | /api/products/:id | Retrieve a product by ID |
| PUT | /api/products/:id | Update a product by ID |
| DELETE | /api/products/:id | Delete a product by ID |

## Product Schema

| Field | Data Type | Requirement |
| --- | --- | --- |
| name | String | Required |
| description | String | Required |
| price | Number | Required and greater than zero |
| category | String | Required |
| inStock | Boolean | Defaults to true |
| tags | Array of Strings | Optional |
| createdAt | Date | Defaults to the current date |

## Advanced Query Parameters

| Parameter | Description |
| --- | --- |
| category | Filters products by category |
| minPrice | Filters products at or above the specified price |
| maxPrice | Filters products at or below the specified price |
| sortBy | Accepts price_asc or price_desc |
| page | Specifies the page number; defaults to 1 |
| limit | Specifies the number of products per page; defaults to 10 |

### Combined Query Example

```text
http://localhost:3014/api/products?category=Electronics&minPrice=50&maxPrice=150&sortBy=price_desc&page=1&limit=1
```

This request retrieves Electronics products priced between $50 and $150, sorts them from highest to lowest price, and returns one product from the first page.

## HTTP Status Codes

| Status Code | Description |
| --- | --- |
| 200 OK | Successful retrieval, update, or deletion |
| 201 Created | Product successfully created |
| 400 Bad Request | Invalid input, ID, or pagination values |
| 404 Not Found | Requested product does not exist |
| 500 Internal Server Error | Unexpected server or database error |

## Additional Implementation Concepts

The following techniques extend the concepts demonstrated during Module 13:

- **Custom Schema Validator:** Ensures that the product price is strictly greater than zero.
- **Date.now:** Provides the current date when a new product is created.
- **ValidationError and CastError:** Distinguish validation failures and incorrectly formatted IDs or filter values from unexpected server errors.
- **runValidators: true:** Applies Mongoose schema validation when updating products.
- **new: true:** Returns the updated document after a successful update, as specified in the assessment.
- **findByIdAndDelete():** Locates and deletes a product using its MongoDB ID.
- **Dynamic Filter Object:** Builds database queries based on the query parameters supplied by the user.
- **$gte and $lte:** Apply inclusive minimum and maximum price comparisons.
- **Number.isInteger():** Ensures that pagination values are positive whole numbers when combined with range checks.
- **Database Connection Function:** Establishes the MongoDB connection before starting the Express server.
- **process.exit(1):** Terminates the application if the initial database connection fails.

## Database Security

Environment variables are used to protect database credentials. The `.env` file and `node_modules` directory are excluded from version control through `.gitignore`.

A dedicated MongoDB database user was configured with read and write permissions for the Zenith product database.

## Testing

Postman was used to test CRUD operations, required-field validation, product-not-found responses, filtering, sorting, pagination, and combined queries.

Additional testing information is available in [TESTING.md](./TESTING.md).

## Resources

- [Node.js Documentation](https://nodejs.org/docs/latest/api/)
- [Express.js Documentation](https://expressjs.com/)
- [MongoDB Documentation](https://www.mongodb.com/docs/)
- [MongoDB Atlas Documentation](https://www.mongodb.com/docs/atlas/)
- [Mongoose Documentation](https://mongoosejs.com/docs/)
- [Postman Documentation](https://learning.postman.com/)
- [MDN JavaScript Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## Reflection

This assessment strengthened my understanding of backend development, RESTful APIs, and database management using MongoDB and Mongoose. I learned how to organize an Express application into separate configuration, model, and routing files while implementing CRUD operations.

One of my greatest challenges was establishing the MongoDB Atlas connection and configuring the appropriate database user permissions. Troubleshooting authentication and authorization errors helped me understand the importance of database security and access control.

I also gained practical experience using Postman to test API endpoints, validate responses, and verify that multiple query parameters could work together. Implementing dynamic filtering, sorting, and pagination helped me better understand how backend applications retrieve and manage data efficiently.

Completing this project has strengthened my foundation in full-stack software development.
