const mongoose = require('mongoose');

//create the schema 

    const SavingsSchema = new mongoose.Schema ({
        amount: {
            type: Number, 
            required: [true, "Amount is required"],
            min: [1, "Amount must be greater than 1"]
        }

    },
        { timestamps: true }
    );


module.exports = mongoose.model("Savings", SavingsSchema);