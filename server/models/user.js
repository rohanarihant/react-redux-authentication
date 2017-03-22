const mongoose = require('mongoose');
const Schema = mongoose.Schema;
import bcrypt from 'bcryptjs';

const UserSchema = new Schema({
     username: {type: String, required: true, unique: true},
     password: {type: String, required: true},
     email:{ type:String, required: true },
     created_at: {type:Date, default: new Date()},
     updated_at: Date
});

// +++++++++++ pre methods ++++++++++++++++++++++++++++++++++
UserSchema.pre('save', function(next){
     const user = this;

     // hash password if modified
     if(!user.isModified('password')) return next();

     //generate a salt
     bcrypt.genSalt(10, function(err, salt){
          if(err) return next(err);

     //hash the password using new salt
     bcrypt.hash(user.password, salt, function(err, hash){
          if(err) return next(err);
          //override the clearText password with the hashed one
          user.password = hash;
          next();
          })
     })
});

//method to compare user password
UserSchema.methods.comparePassword = function(candidatePassword, cb){
     bcrypt.compare(candidatePassword, this.password, function(err, isMatch){
          if(err) return cb(err);
          cb(null, isMatch);
     });
};

//+++++++++++++++++++++++  end pre/methods ++++++++++++++++++++++++++++++++++

const User = mongoose.model('User', UserSchema);

export default User;
