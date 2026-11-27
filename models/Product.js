// Import Mongoose
import mongoose from "mongoose";

// Extract the Schema class
import { Schema } from "mongoose";

// Define the Product schema
const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        validate: {
            validator: function(value) {
                return value > 0;
            },
            message: "Price must be greater than 0"
        }
    },
    category: {
        type: String,
        required: true
    },
    inStock: {
        type: Boolean,
        default: true
    },
    tags: [String],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Compile the Product model
const Product = mongoose.model("Product", productSchema);

// Export the Product model
export default Product;