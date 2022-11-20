require('dotenv').config();
const mongoose = require('mongoose');

module.exports = function(){
    const db = mongoose.connect(process.env.db, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('MongoDB Connection Successful');
    })
    .catch((error) => {
        console.log(error);
    })

    return db;
}
