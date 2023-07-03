const express = require('express');
// const cors = require('cors')
// const helmet = require('helmet')
require('dotenv').config()



const app = express();
const PORT = process.env.PORT || 8400

app.use(express.json())

app.listen(PORT, () => {
    console.log(`Server on PORT: ${PORT}`);
});
