const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
   name: {
    type: String,
    required: [true, "Please add a name"],
   },
   email: {
    type: String,
    required: [true, "Please add an email"],
    unique: true,
    trim: true,
    match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Please enter a valid email",
    ],
   },
   password: {
    type:String,
    required: [true, "Please enter a valid Password"],
    minLength: [6, "Password must be upto 6 character"],
    // maxLength: [23, "Password must not be longer than 23 character"],
   },
   photo: {
    type:String,
    required: [true, "Please add a photo"],
    default: "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1694173844~exp=1694174444~hmac=9f6dbea3ec57a24bafc0852688622c6a605c4a70e71d112eb8a850052f8f96bf",
   },
   phone: {
    type:String,
    default: "+91",
   },
   bio: {
    type:String,
    maxLength: [250, "Bio must not be more than 250 characters"],
    default:"Bio", 
   }, 
}, 
{
    timestamps: true,
}
);

const User = mongoose.model("User", userSchema);

module.exports = User;