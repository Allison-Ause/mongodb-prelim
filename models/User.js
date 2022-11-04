import { model, Schema } from 'mongoose'

const userSchema = new Schema({
  email: string,
  password: string,
  gifts: [giftSchema],
  friends: [friendSchema],
})

const giftSchema = new Schema({
  idea: {
    type: String,
    required: true,
  },
  for: String,
  link: String,
  price: Number,
  occasion: String,
  bought: {
    type: Boolean,
    default: false,
  },
})

const friendSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  birthday: Date,
  address: String,
  allergies: Array,
})

const User = model('User', userSchema)
export default User
