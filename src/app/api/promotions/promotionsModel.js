import mongoose from 'mongoose';

const promotionSchema = mongoose.Schema({
  id: {type: mongoose.Schema.Types.ObjectId},
  name: {type: mongoose.Schema.Types.String },
  single: {type: mongoose.Schema.Types.String },
  quantity: {type: mongoose.Schema.Types.String },
  active: {type: mongoose.Schema.Types.String}
})

const promotion =
  mongoose.models?.promotions || mongoose.model("promotions", promotionSchema);

export { promotion, promotionSchema }