var mongoose = require('mongoose')

var options = {
    connectTimeoutMS: 5000,
    useUnifiedTopology: true,
    useNewUrlParser: true,
}

mongoose.connect('URI_BDD',
    options,
    function(err){
        console.log(err);
    }
)

module.exports = mongoose