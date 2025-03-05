import mongoose from 'mongoose';

const promotionSchema = mongoose.Schema({
  id: {type: mongoose.Schema.Types.ObjectId},
  name: {type: mongoose.Schema.Types.String },
  quantity: {type: mongoose.Schema.Types.String },
  value: {type: mongoose.Schema.Types.String },
  comparison: {
    _id: { type: String, required: true },
    name: { type: String, required: true }
  },
  variation: {
    _id: { type: String, required: true },
    name: { type: String, required: true }
  }
},{versionKey: false})

const promotion =
  mongoose.models?.promotions || mongoose.model("promotions", promotionSchema);

export { promotion, promotionSchema }