const {PORT} = require("./constants.js");
const express = require('express');
const cors = require('cors');
const ConnectDB = require('./src/db/connection.js');
const rootRouter = require('./src/routes/root.js')
const authRouter = require("./src/middleware/auth.js");
const contactUsRouter = require('./src/routes/contactUs.js');


if(require.main === module){
    ConnectDB();

    const app = express();
    app.use(express.json());
    app.use(cors({
        origin : true
    }));

    app.listen(PORT, () => {
        console.log("Server started successfully");
        console.log(`localhost:${PORT}`);
    });

    app.use('/', rootRouter);
    app.use('/auth', authRouter);
    app.use('/contactUs',contactUsRouter);
}