const mongoose = require('mongoose')
const bycrpt = require('bcrypt')
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    }
    ,
    password: {
        type: String,
        required: true
    },
    age: Number,
    phone: String,
    profilePic: String,
    coverPic: Array,
    messagesArray: [{type: mongoose.Schema.Types.ObjectId, ref: 'message'}],
    loginStatus: { type: Boolean, default: false },
    lastseen: { type: String },
    role: { type: String, default: 'User' },
}, {
    timestamps: true
})


userSchema.pre('save', async function (next) {
    this.password = await bycrpt.hash(this.password, parseInt(process.env.saltRound))
    next()
})

userSchema.pre('findByIdAndUpdate', async function() {

    const hookData = await this.model.findById(this.getQuery()).select("__v");

    this.set({__v:hookData.__v +1})
    
})

const userModel = mongoose.model('User', userSchema)
module.exports = userModel