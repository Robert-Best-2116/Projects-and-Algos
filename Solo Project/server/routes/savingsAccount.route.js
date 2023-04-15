const SavingsAccountController = require("../controllers/savingsAccount.controller");

module.exports = app => {
    app.get('/api/savingsAccount', SavingsAccountController.findAllSavingsAccounts);
    app.get('/api/savingsAccount/:id', SavingsAccountController.findOneSavingsAccount);
    app.patch('/api/savingsAccount/:id', SavingsAccountController.updateSavingsAccountById);
    app.post('/api/savingsAccount', SavingsAccountController.createNewSavingsAccount);
    app.delete('/api/savingsAccount/:id', SavingsAccountController.deleteAnExistingSavingsAccount);
}