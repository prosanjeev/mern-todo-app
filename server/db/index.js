const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

mongoose.connect("mongodb+srv://sanjeevcse2k23:sanjeevcse2023@cluster0.rnmu7w4.mongodb.net/").
then(() => console.log("Connect mongo db")).catch((e) => console.log(e));