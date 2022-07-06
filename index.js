import mongoose from 'mongoose';
import Urls from "./models/urls";



const main = async() => {
    var date = new Date();
    var daysToDeletion = 60; // jours après lesquels les documents seront détruits
    var deletionDate = new Date(date.setDate(date.getDate() - daysToDeletion));
    let test = await Urls.deleteMany({createdAt: {"$lt" : deletionDate }})
    console.log(test)
}


main();
mongoose.connect('mongodb+srv://root:root@cluster0.jxy4k.mongodb.net/url_shortener?authSource=admin&replicaSet=atlas-11d534-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true', {useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
    if (err) {
        console.log('Error connecting to mongodb database');
        console.log(err);
    }
    else {
        console.log('Connected to mongodb database');
    }
});