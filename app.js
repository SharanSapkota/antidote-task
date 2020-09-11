const express = require('express');
const mongoose = require('mongoose')
require('dotenv/config')
const postRoute = require('./routes/post')
const fetchRoute = require('./routes/fetch')
const bodyParser = require('body-parser')
const Fetch = require('./models/Post')


const app = express();

app.use(express.json());



app.use('/posts', postRoute)
app.use('/fetchdata', fetchRoute)


//GET CATEGORIES PANTS
app.get('/category', async(req, res) => {
    try{
        const fetch1 = await Fetch.find({ category: 'Shirt-2'})
        res.json(fetch1)
    } catch(err){
        res.json({message: "error aayo"})
    }
})


//GET THE LATEST 5 ITEMS AND SORT THEM
app.get('/sort', async(req, res) => {
    try{
    const sort = Fetch.find().sort({date: 'desc'}).limit(5).exec(function(err, docs) { ;
     res.json(docs)
    })
    }catch(err){
     res.json({message: "error in sort"})
    }
     });


// app.get('/users', (req, res) => {
  
//     const users = ["sharan", "saroj", "nitesh"]

//     res.send({
//         users:users
//     })

    // res.status(200).json({
    //     status: 'success',
    //     data: {
    //         message: 'hey'
    //     }
    // })
// })

// app.post('/api', (req, res) => {



// })


// app.patch('/api/', (req, res) => {

// })

// app.

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, () => {
    console.log("DB connceted")
});



app.listen(3000, () => {
    console.log("Server started")
})