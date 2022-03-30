var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ResourceSchema = new Schema(
  {
    name: {type: String, required: true, maxLength: 100},
    description: {type: String, required: true, maxLength: 10000},
    picture: {type: String, required: true},
    link: {type: String, required: true},
    email: {type: String, required: false},
    phone: {type: String, required: false},
    demographicAttributes : [{type: Schema.Types.ObjectId}],
    serviceAttributes: [{type: Schema.Types.ObjectId}]
  }
);

// Virtual for author's URL
ResourceSchema
.virtual('url')
.get(function () {
  return '/catalog/resource/' + this._id;
});

//Export model
module.exports = mongoose.model('Resource', ResourceSchema);
