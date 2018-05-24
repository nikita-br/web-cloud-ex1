//Creating a YoungWriter model for youngwriters schema
var mongoose = require('mongoose'),
    youngwriter = new mongoose.Schema({
        name: {
            type:String,
            index:1
        },
        age: Number,
        genre: [String],
        books: {
            book:[{
            title:{type:String},
            year:{type:Number},
            }]
        }
    });
var YoungWriter = mongoose.model('YoungWriter',youngwriter);
module.exports = YoungWriter;
console.log(`required paths: ${youngwriter.requiredPaths()}`);
console.log(`indexes: ${JSON.stringify(youngwriter.indexes())}`);