
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true
  },
  pass: {
    type: String,
    required: [true, 'Password is required']
  }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);

// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const UserSchema = new Schema({
//     name: {
//         type:String,
//         required:true
//     },
//     email: {
//         type:String,
//         required:true,
//         unique:true
//     },
//     pass: {
//         type:String,
//         required:true,

//     }
    
// });

// const Usermodel = mongoose.model('user',UserSchema);
// module.exports = Usermodel;