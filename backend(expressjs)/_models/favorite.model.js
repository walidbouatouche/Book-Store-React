const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const favoriteSchema = mongoose.Schema({
    userId: { type: String, required: true },
    bookId: { type: mongoose.SchemaTypes.ObjectId, ref:"Book" },
    createdAt: { type: String, required: true },
    updatedAt: { type: String, required: true }
});

favoriteSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Favorite', favoriteSchema);



// var ProjectGroupSchema = new Schema({
//     title             : String
// });
// Project Schema:

// var ProjectSchema = new Schema({
//     title         : {type : String, default : '', required : true},
//     group         : {type: Schema.Types.ObjectId, ref: 'ProjectGroup' },
//     _users    : [{type: Schema.Types.ObjectId, ref: 'User' }]
// });
// User Schema:

// var UserSchema = new Schema({
//     first_name    : {type: String, required: true},
//     last_name     : {type: String, required: true},
//     subscribing   : [{type: Schema.Types.ObjectId, ref: 'Project' }]
// });
// Then you can do the following:

// user.findById(req.userId)
//      .populate('subscribing')
//      .exec(function(err, user){
//           console.log(user.subscribing);
//      })