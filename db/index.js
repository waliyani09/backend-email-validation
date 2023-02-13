const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://plasmaofspeed:vpFMAQOj9XUK48QO@cluster0.rksojkw.mongodb.net/test').then(()=>{
    console.log('db is connected');
}).catch((ex)=>{
    console.log('Database connection  failed: ',ex);
})