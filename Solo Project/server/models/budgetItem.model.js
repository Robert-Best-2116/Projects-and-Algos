const mongoose = require('mongoose');

//create the schema 

    const BudgetItemSchema = new mongoose.Schema ({
        name: {
            type: String,
            required: [true, "Name is required"],
            minlength: [3, "Name must be at least 3 characters long"] 
        },
        amount: {
            type: Number, 
            required: [true, "Amount is required"],
            min: [1.00, "Amount must be greater than 1.00"]
        },
        type: {
            type: String,
            required: [true, "Income or Expense must be selected."],
            enum: ["expense", "income"]
        },
        frequency: {
            type: String, 
            required: [true, "Frequency is required"],
            enum: ["monthly", "other"]
        }
    },
        { timestamps: true }
    );


module.exports = mongoose.model("BudgetItem", BudgetItemSchema);