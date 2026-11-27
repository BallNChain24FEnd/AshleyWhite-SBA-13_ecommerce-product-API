// Import Router from Express
import { Router } from "express";

// Import the Product model
import Product from "../models/Product.js";

// Initialize our router
const routes = Router();

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