const mongoose = require('mongoose');
module.exports = db = {};

initialize();

async function initialize() {
    await mongoose.connect('mongodb://localhost/test',
        {
            useNewUrlParser: true,
            useUnifiedTopology: true ,
            useFindAndModify: false
        })
        .then(() => console.log('Connection to MongoDB successful!'))
        .catch((er) => console.log('Connection to MongoDB failed!'));
}
