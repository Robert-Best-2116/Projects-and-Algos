const BudgetItemController = require("../controllers/budgetItem.controller");

    module.exports = app => {
        app.get('/api/budgetItems', BudgetItemController.findAllBudgetItems);
        app.get('/api/budgetItem/:id', BudgetItemController.findOneBudgetItem);
        app.patch('/api/budgetItem/:id', BudgetItemController.updateBudgetItemById);
        app.post('/api/budgetItem', BudgetItemController.createNewBudgetItem);
        app.delete('/api/budgetItem/:id', BudgetItemController.deleteAnExistingBudgetItem);
    }