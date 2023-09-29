const mongoose = require('mongoose');

require('dotenv').config();

const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        .then(() => {
            console.log("connection is succesfull");
        })
        .catch((error) => {
            console.log("recived an error of ", error);
            process.exit(1);
        });
}

module.exports = dbConnect;

