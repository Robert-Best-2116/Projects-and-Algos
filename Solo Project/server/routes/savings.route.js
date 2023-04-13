const SavingsController = require("../controllers/savings.controller");

module.exports = app => {
    app.get('/api/savings', SavingsController.findAllSavings);
    app.get('/api/savings/:id', SavingsController.findOneSavings);
    app.patch('/api/savings/:id', SavingsController.updateSavingsById);
    app.post('/api/savings', SavingsController.createNewSavings);
    app.delete('/api/savings/:id', SavingsController.deleteAnExistingSavings);
}