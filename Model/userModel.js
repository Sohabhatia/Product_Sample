const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const validator = require('validator');


const userSchema = new mongoose.Schema({
  //SCHEMA FOR USERS
  name: {
    type: String,
    required: [true, 'A name is required!'],
  },
  username: {
    type: String,
    required: [true, 'Please provide an username!'],
    unique: true,
    },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
    minlength: 8,
 },
  dob: {
    type: String,
    required: [true, 'Please provide a password'],
    minlength: 8,
    
  },
  mobile: {
    type:Number ,
    minlength: 10,
    
  },
  products: [{
    type : mongoose.Schema.ObjectId,
    required : [true, 'A product name is required'],
    ref : 'Product'
  }],

});

//encrypting our password
userSchema.pre('save', async function (next) {
  //   //ONLY ENCRYPT WHEN PASSWORD IS SAVED OR MODIFIED
  if (!this.isModified('password')) return next();

  //ENCRYPT PASSWORD OF CURRENT DOCUMENT
  this.password = await bcrypt.hash(this.password, 12);

  // DELETE PASSWORD FIELD FROM DATABASE
  this.confirmPassword = undefined;
  next();
});


userSchema.pre(/^find/, function (next) {
  this.find({ active: { $ne: false } });
  next();
});

userSchema.methods.correctPassword = async function (
  userPassword,
  candidatePassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};


const User = mongoose.model('User', userSchema);

module.exports = User;
