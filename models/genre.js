var mongoose = require('mongoose');

var GenreSchema = mongoose.Schema({
    name: {type: String, minlength:3, maxlength:100}
});

//Virtual for genre's URL
GenreSchema
.virtual('url')
.get(function(){
    return '/catalog/genre/' + this._id;
});

module.exports = mongoose.model('Genre', GenreSchema);