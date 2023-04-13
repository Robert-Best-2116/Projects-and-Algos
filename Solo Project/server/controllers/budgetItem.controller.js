const BudgetItem = require ("../models/budgetItem.model");

            //implement your CRUD functionality-Label Errors individually for recognition 

            //Find All 
            module.exports.findAllBudgetItems = (req, res) => {
                BudgetItem.find()
                    .then((allBudgetItems) => {
                        res.json(allBudgetItems)
                    })
                    .catch((err) => {
                        res.status(500).json({err})
                });
            }

            //Find One 
            module.exports.findOneBudgetItem = (req, res) => {
            BudgetItem.findById({ _id: req.params.id })
                .then(oneBudgetItem => {
                    res.json({ budgetItem: oneBudgetItem })
                })
                .catch((err) => {
                    res.status(400).json({err})
                });}

            //Create
            module.exports.createNewBudgetItem = (req, res) => {
            BudgetItem.create(req.body)
                .then(newBudgetItem => {
                    res.json({ budgetItem: newBudgetItem })
                })
                .catch((err) => {
                    res.status(400).json({err})
                });}

            //Update 
            module.exports.updateBudgetItemById = (req, res) => {
            BudgetItem.findByIdAndUpdate(
                { _id: req.params.id },
                req.body,
                { new: true, runValidators: true }
                )
                .then(updatedBudgetItem => {
                    res.json({ budgetItem: updatedBudgetItem })
                })
                .catch((err) => {
                    res.status(400).json({err})
                });}

            //Delete 
            module.exports.deleteAnExistingBudgetItem = (req, res) => {
            BudgetItem.findByIdAndDelete({ _id: req.params.id })
                .then(result => {
                    res.json({ result: result })
                })
                .catch((err) => {
                    res.status(400).json({err})
                });}