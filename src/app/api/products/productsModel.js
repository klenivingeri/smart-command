import mongoose from 'mongoose';
import { promotionSchema } from '../promotions/promotionsModel'

const productSchema = mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    name: { type: mongoose.Schema.Types.String, required:true },
    description: { type: mongoose.Schema.Types.String },
    price: { type: mongoose.Schema.Types.Number },
    type: { type: mongoose.Schema.Types.Number },
    promotion: promotionSchema,
    title: { type: mongoose.Schema.Types.String }
  }, {versionKey: false}
)

const product = mongoose.model('products', productSchema)

export {product}