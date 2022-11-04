import { model, Schema } from 'mongoose'

const giftSchema = new Schema({
  idea: {
    type: String,
    required: true,
  },
  link: String,
  price: Number,
  bought: {
    type: Boolean,
    default: false,
  },
})

const Gift = model('Gift', giftSchema)
export default Gift

// nest schemas inside the big dashboard schema
// users can have their own document. or users could be the same as Dashboard.
