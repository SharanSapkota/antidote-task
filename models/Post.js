const mongoose = require('mongoose')

const PostSchema = mongoose.Schema({
 
    manufacture_date: 
    {
        type: Date,
       
        required: false
    },
    category:
     {
         type: String,
         required: false
        },
         description: 
         {
             type: String,
             required: false
            },
            purchase_date: 
            {
                type: Date,
                default: Date.now(),
                required: false
            },
                price: 
                {
                    type: Number,
                    required: false
                },
                    date: {
                        type: Date,
                        default: Date.now
                    }

})

module.exports = mongoose.model('Posts', PostSchema)