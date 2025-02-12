import mongoose from 'mongoose';

const promotionSchema = mongoose.Schema({
  id: {type: mongoose.Schema.Types.ObjectId},
  name: {type: mongoose.Schema.Types.String, required: true}
})

const promotion = mongoose.model('promotions', promotionSchema )

export { promotion, promotionSchema }