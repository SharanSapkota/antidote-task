const express = require('express')
const router = express.Router()
const Fetch = require('../models/Post')


//GET ALL ITEMS FROM PRICE RANGE 300-1500
router.get('/', async(req, res) => {

    try{ 
   const fetch = await Fetch.find({'price' : {$gte : 300, $lte: 1500}   })
  
   res.json(fetch)
   
} catch(err) {
    
    res.json({message: "err"})
}
 
    
})



module.exports = router