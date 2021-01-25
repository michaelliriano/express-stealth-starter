exports.connectMongoose = function(app) {
    var mongoose = require('mongoose')
    const mongoSanitize = require('express-mongo-sanitize');
    const uri = 'mongodb://localhost:27017'
    app.use(mongoSanitize());
    mongoose.connect(uri,  {useNewUrlParser: true, useUnifiedTopology: true});

    const connection = mongoose.connection;
    connection.once("open", function() {
    console.log(`MongoDB running on ${uri}`);
    });

}