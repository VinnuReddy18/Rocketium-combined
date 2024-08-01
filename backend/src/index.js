const express = require('express');
const cors = require('cors');
const dataRoutes = require('./routes/data');

const app = express(); //creating a instance for express app
const PORT = 5000;

app.use(cors());//enabling cors for all routes
app.use(express.json());//parsing req with json 

app.use('/api/data', dataRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
