const mongoose = require('mongoose');
module.exports = db = {};

initialize();

async function initialize() {
    await mongoose.connect('mongodb+srv:/***************************',
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then(() => console.log('Connection to MongoDB successful!'))
        .catch((er) => console.log('Connection to MongoDB failed!'));
}
