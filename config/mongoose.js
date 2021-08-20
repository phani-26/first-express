const mongoose = require('mongoose');

//connect to db
mongoose.connect('mongodb://localhost/contact_list');

//acquire the connection to check if it is successful
const db = mongoose.connection;

//error
db.on('error', console.error.bind(console, 'error connecting todb'));

//up and running
db.once('open', function(){
    console.log("Hii, My db is up and running after many efforts");
});