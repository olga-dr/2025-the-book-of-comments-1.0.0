const mongoose = require('mongoose')
const {Schema} = require('mongoose')

// можно и так:
//const {model, Schema} = require('mongoose')

mongoose.Schema.Types.String.set('trim', true);

const userSchema = new Schema ({
    _id: mongoose.Schema.Types.ObjectId,

    firstName: {
      type: String,
    },

    lastName: {
      type: String,
    },

    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
      },
    ]
  }
)

module.exports = model('User', userSchema)
 
// можно и так:
// const User = mongoose.model('User', userSchema)
// module.exports = User