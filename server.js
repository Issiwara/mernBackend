require("dotenv").config({ path: "./config.env" });
const app = require("./index");
const mongoose = require("mongoose");

// Establishing database connection
mongoose.set('strictQuery', true);

const database = module.exports = () => 
{
    const connectionParams = {

        useNewUrlParser:true,
        useUnifiedTopology:true,
    }

    try {
        mongoose.connect(process.env.MONGODB_URL,
        connectionParams
        );
        console.log('success');
    } catch (error) {
        console.log('failed')
    }
}


database();

app.listen(3000, () => console.log("server is runnning at port 3000!"));

/*
var http=require('http');

var server=http.createServer(function(req,res){
    res.end('test');
});

server.on('listening',function(){
    console.log('ok, server is running');
});

server.listen(80);

*/
