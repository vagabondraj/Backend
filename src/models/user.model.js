import mongoose, {Schema} from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const userSchema = new Schema({
  username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        index:true  // index for faster search
     },
  email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true
   },
   fullName: {
      type: String,
      required: true,
      trim: true,
      index:true  // index for faster search
   },
   avatar: {
      type: String,
      required: true
   },
   coverimage: {
      type: String
   },
   watchHistory: [
      {
         type: Schema.Types.ObjectId,
         ref: "Video"
      }
   ],
   password: {
      type: String,
      required: [true, 'Password is required']  
   },
   refreshTokens: { // Store multiple refresh tokens for security
      type: [String],
      default: []
   }

}, { timestamps: true });


// for password incryption
userSchema.pre("save", async function (next) {
   if (!this.isModified("password")) {
      return next();
   }
   this.password = await bcrypt.hash(this.password, 10);
   next();
})
// what we did is before saving the user document, we check if the password field has been modified.
// If it has, we hash the new password using bcrypt with a salt round of 10
// and then proceed to save the document.

userSchema.methods.comparePassword = async function (candidatePassword) {
   return await bcrypt.compare(candidatePassword, this.password);
}

userSchema.methods.generateAccessToken = function () {
   return jwt.sign(
    {
      _id:this._id,
      email:this.email,
      username:this.username
    }
   ),

   process.env.ACCESS_TOKEN_SECRET,
   { expiresIn: process.env.ACCESS_TOKEN_EXPIRY
   }
};
userSchema.methods.generateRefreshToken = function () {
   return jwt.sign(
    {   
      _id:this._id
    },
    process.env.REFRESH_TOKEN_SECRET,
    { 
        expiresIn: process.env.REFRESH_TOKEN_EXPIRY
    }
   );
};

export const User = mongoose.model("User", userSchema);


