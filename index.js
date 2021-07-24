'use strict';
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Player = require('./models/players');

// routes
//const playerRoutes = require('./routes/player/routes');

const app = express();

// mongodb connection url
const dbURL="mongodb+srv://panteon:panteon123@cluster0.mwghx.mongodb.net/panteonDb?retryWrites=true&w=majority";
mongoose.connect(dbURL, { useNewUrlParser: true ,useUnifiedTopology: true })
.then((result)=> app.listen(3000))
.catch((err)=>console.log(err));

app.set('view engine','ejs');
app.use(express.static('public'));
app.use(morgan('dev'));


app.get('/add',(req,res)=>{
    const player = new Player({
        money:1,
        name:'Berkant',
        country:'Turkey'
        
    })
    player.save()
    .then((result)=> {
        res.send(result)
    })
    .catch((err)=> {console.log(err)})
}
)

//app.use('/api', playerRoutes.routes);



// app.listen(config.port, () => {
//   console.log('app listening on url http://localhost:' + config.port )
// });