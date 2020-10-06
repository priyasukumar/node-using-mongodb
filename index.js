import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
const app = express();
const PORT = 4000;
var mongoDB = 'mongodb://127.0.0.1:27017/productsdb';
mongoose.Promise=global.Promise;
mongoose.connect(mongoDB, 
    {useNewUrlParser: true, 
        useUnifiedTopology: true
    });

//Get the default connection
var productsdb  = mongoose.connection;
// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); 

app.get('/', (req, res) =>
    res.send(`Store server running on port ${PORT}`)
);

app.listen(PORT, () => 
    console.log(`Your server is running on port ${PORT}`)
);
