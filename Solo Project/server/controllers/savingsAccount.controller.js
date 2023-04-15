const SavingsAccount = require ("../models/savingsAccount.model");

            //implement your CRUD functionality-Label Errors individually for recognition 

            //Find All 
            module.exports.findAllSavingsAccounts = (req, res) => {
                SavingsAccount.find()
                    .then((allSavingsAccounts) => {
                        res.status(200).json(allBudgetItems)
                    })
                    .catch((err) => {
                        res.status(500).json({err})
                });
            }

            //Find One 
            module.exports.findOneSavingsAccount = (req, res) => {
            SavingsAccount.findById({ _id: req.params.id })
                .then(oneSavingsAccount => {
                    res.json({ savingsAccount: oneSavingsAccount })
                })
                .catch((err) => {
                    res.status(400).json({err})
                });}

            //Create
            module.exports.createNewSavingsAccount = (req, res) => {
            SavingsAccount.create(req.body)
                .then(newSavingsAccount => {
                    res.json({ savings: newSavingsAccount })
                })
                .catch((err) => {
                    res.status(400).json({err})
                });}

            //Update 
            module.exports.updateSavingsAccountById = (req, res) => {
            SavingsAccount.findByIdAndUpdate(
                { _id: req.params.id },
                req.body,
                { new: true, runValidators: true }
                )
                .then(updatedSavingsAccount => {
                    res.json({ savingsAccount: updatedSavingsAccount })
                })
                .catch((err) => {
                    res.status(400).json({err})
                });}

            //Delete 
            module.exports.deleteAnExistingSavingsAccount = (req, res) => {
            SavingsAccount.findByIdAndDelete({ _id: req.params.id })
                .then(result => {
                    res.json({ result: result })
                })
                .catch((err) => {
                    res.status(400).json({err})
                });}
