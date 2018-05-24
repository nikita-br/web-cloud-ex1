

var YoungWriter = require('./writer');
//Query to get all authors query
exports.findAllAuthors = (req, res) => {
    YoungWriter.find()
        .then(youngwriter => {
            res.send(youngwriter);

        }).catch(err => {
        console.log(`connection error: ${err}`);
        res.send("some error");
    });
};
//Query to get author by id - get
/*
exports.findAuthorById = (req, res) => {
    YoungWriter.findOne({_id:req.params.id})
        .then(youngwriter => {
            res.send(youngwriter);
        }).catch(err => {
        console.log(`connection error: ${err}`);
        res.send("some error");
    });
};
*/
//Query to get author by genre and year - get method
exports.findAuthorByGenreAndYear = (req, res) => {
    YoungWriter.aggregate( [ { $unwind : "$books"},{$match: {"books.year":req.params.year,"genre":req.params.genre}}])
        .then(youngwriter => {
            res.send(youngwriter);
        }).catch(err => {
        console.log(`connection error: ${err}`);
        res.send("some error");
    });
};

//Query to get author by id - post method
exports.getAuthorProfileData = (req, res) => {
    var newWriterId = req.body._id;
    YoungWriter.findOne({_id:newWriterId})
        .then(youngwriter => {
            res.send(youngwriter);
        }).catch(err => {
        console.log(`connection error: ${err}`);
        res.send("some error");
    });
};
//wrong route error message
exports.getLost = (req, res) => {
    res.send("thre is no such page");
};