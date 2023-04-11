const express = require('express'); 
const app = express();
const cors = require('cors');
const port = 8000;

app.use(cors());
app.use(express.json());    

app.use(express.json(), express.urlencoded({extended:true}));


require('./config/mongoose.config');
require('./routes/budgetItem.routes')(app);
require('./routes/savings.routes')(app);

app.listen(port, () => console.log(`the server is all filed up on port ${port}`));