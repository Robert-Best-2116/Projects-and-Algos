const mongoose = require('mongoose');

//create the schema 

    const SavingsAccountSchema = new mongoose.Schema ({
        amount: {
            type: Number, 
            required: [true, "Amount is required"],
            min: [1, "Amount must be greater than 1"]
        }

    },
        { timestamps: true }
    );


module.exports = mongoose.model("SavingsAccount", SavingsAccountSchema);