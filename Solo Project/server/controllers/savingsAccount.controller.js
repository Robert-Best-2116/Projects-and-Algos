const Savings = require ("../models/savings.model");

            //implement your CRUD functionality-Label Errors individually for recognition 

            //Find All 
            module.exports.findAllSavings = (req, res) => {
                Savings.find()
                    .then((allSavings) => {
                        res.json(allSavings)
                    })
                    .catch((err) => {
                        res.json({message: "Find All: Something went wrong", error: err})
                });
            }

            //Find One 
            module.exports.findOneSavings = (req, res) => {
            Savings.findById({ _id: req.params.id })
                .then(oneSavings => {
                    res.json({ savings: oneSavings })
                })
                .catch((err) => {
                    res.json({ message: 'Something went wrong', error: err })
                });}

            //Create
            module.exports.createNewSavings = (req, res) => {
            Savings.create(req.body)
                .then(newSavings => {
                    res.json({ savings: newSavings })
                })
                .catch((err) => {
                    res.json({ message: 'Something went wrong', error: err })
                });}

            //Update 
            module.exports.updateSavingsById = (req, res) => {
            Savings.findByIdAndUpdate(
                { _id: req.params.id },
                req.body,
                { new: true, runValidators: true }
                )
                .then(updatedSavings => {
                    res.json({ savings: updatedSavings })
                })
                .catch((err) => {
                    res.json({ message: 'Something went wrong', error: err })
                });}

            //Delete 
            module.exports.deleteAnExistingSavings = (req, res) => {
            Savings.findByIdAndDelete({ _id: req.params.id })
                .then(result => {
                    res.json({ result: result })
                })
                .catch((err) => {
                    res.json({ message: 'Something went wrong', error: err })
                });}
