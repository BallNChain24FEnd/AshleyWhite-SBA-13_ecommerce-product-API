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

        res.status(201).json(response);

    } catch (err) {
        console.error("Product Creation Error:", err.message);

        // Handle validation errors
        if (err.name === "ValidationError") {
            return res.status(400).json({
                message: err.message
            });
        }

        res.status(500).json({
            message: "Error creating product"
        });
    }
});

/*
    ========== Put Routes ==========
*/

// Update a product by ID
routes.put("/:id", async (req, res) => {
    try {
        // Update and return the product
        const response = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        // Check if the product exists
        if (!response) {
            return res.status(404).json({
                message: "Product not found"
            });
        }

        res.status(200).json(response);

    } catch (err) {
        console.error("Update Product Error:", err.message);

        // Handle validation errors
        if (err.name === "ValidationError") {
            return res.status(400).json({
                message: err.message
            });
        }

        // Handle invalid product IDs
        if (err.name === "CastError") {
            return res.status(400).json({
                message: "Invalid product ID"
            });
        }

        res.status(500).json({
            message: "Error updating product"
        });
    }
});

/*
    ========== Delete Routes ==========
*/

// Delete a product by ID
routes.delete("/:id", async (req, res) => {
    try {
        // Find and delete the product
        const response = await Product.findByIdAndDelete(
            req.params.id
        );

        // Check if the product exists
        if (!response) {
            return res.status(404).json({
                message: "Product not found"
            });
        }

        // Confirm successful deletion
        res.status(200).json({
            message: "Product deleted successfully"
        });

    } catch (err) {
        console.error("Delete Product Error:", err.message);

        // Handle invalid product IDs
        if (err.name === "CastError") {
            return res.status(400).json({
                message: "Invalid product ID"
            });
        }

        res.status(500).json({
            message: "Error deleting product"
        });
    }
});

// Export our product routes
export default routes;