// import('dotenv').config()
import mongoose from 'mongoose'
import Gift from './models/Gift.js'

// Connect to MongoDB Atlas Cluster
mongoose.connect(
  `mongodb+srv://tester:password123456@aause.bos7dtf.mongodb.net/?retryWrites=true&w=majority`,
) // why does this not work as a password, leading to a "handshake error"?

// CREATE a new Gift object & insert it into database
const gift = await Gift.create({
  idea: 'Sword Umbrella',
  link: 'https://www.swordsdirect.com/swords-rapier-umbrella.html',
  price: 70,
})

// FIND a single Gift
const firstGift = await Gift.findOne({})
console.log('firstGift', firstGift)

// UPDATE a single Gift locally, which is then saved to the database
gift.price = 55
await gift.save()
console.log('updatedGift', gift)

// FIND BY ID
// (may specify fields we want returned. ie: idea, price)
// The second parameter can be of type Object|String|Array<String>
const specificGift = await Gift.findById(
  '63654def1c8c913fa8e64c22',
  'idea price',
).exec()
// .exec returns a promise
console.log('specificGift', specificGift)

//DELETE BY ID
const deletedGift = await Gift.findByIdAndDelete('6365543b236f18646aad5012')
// maybe await or maybe need to .exec()

const confirmation = await Gift.exists({ _id: '6365543b236f18646aad5012' })
// does NOT return the deletedGift
console.log('deletedGift', deletedGift)
console.log('confirmation', confirmation)
