// Import Router from Express
import { Router } from "express";

// Import the Product model
import Product from "../models/Product.js";

// Initialize our router
const routes = Router();

/*
    ========== Get Routes ==========
*/

// Get all products
routes.get("/", async (req, res) => {
    try {
        // Find all products
        const response = await Product.find();

        res.status(200).json(response);

    } catch (err) {
        console.error("Get Products Error:", err.message);

        res.status(500).json({
            message: "Error retrieving products"
        });
    }
});

// Get a product by ID
routes.get("/:id", async (req, res) => {
    try {
        // Find a specific product
        const response = await Product.findById(req.params.id);

        // Check if the product exists
        if (!response) {
            return res.status(404).json({
                message: "Product not found"
            });
        }

        res.status(200).json(response);

    } catch (err) {
        console.error("Get Product Error:", err.message);

        // Handle invalid product IDs
        if (err.name === "CastError") {
            return res.status(400).json({
                message: "Invalid product ID"
            });
        }

        res.status(500).json({
            message: "Error retrieving product"
        });
    }
});

/*
    ========== Post Routes ==========
*/

// Create a new product
routes.post("/", async (req, res) => {
    try {
        // Create and save the product
        const response = await Product.create(req.body);

        // Return the newly created product
        res.status(201).json(response);

    } catch (err) {
        // Display the error in the terminal
        console.error("Product Creation Error:", err.message);

        // Handle validation errors
        if (err.name === "ValidationError") {
            return res.status(400).json({
                message: err.message
            });
        }

        // Handle unexpected errors
        res.status(500).json({
            message: "Error creating product"
        });
    }
});

// Export our product routes
export default routes;