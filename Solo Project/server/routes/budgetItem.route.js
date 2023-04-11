const BudgetItemController = require("../controllers/<<modelName>>.controller");

            module.exports = app => {
                app.get('/api/<<modelName>>', BudgetItemController.findAllBudgetItems);
                app.get('/api/<<modelName>>/:id', BudgetItemController.findOneBudgetItem);
                app.patch('/api/<<modelName>>/:id', BudgetItemController.updateBudgetItemById);
                app.post('/api/<<modelName>>', BudgetItemController.createNewBudgetItem);
                app.delete('/api/<<modelName>>/:id', BudgetItemController.deleteAnExistingBudgetItem);
            }