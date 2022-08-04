const express = require('express');
const app = express();
require('dotenv').config();



app.use(express.json());


app.use("/api/user", require("./routes/user"));
app.use("/api/post", require("./routes/post"));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});