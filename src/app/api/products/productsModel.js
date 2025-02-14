import mongoose from 'mongoose';
import { promotionSchema } from '../promotions/promotionsModel'
import { typesSchema } from '../types/typesModel';

const productSchema = mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    name: { type: mongoose.Schema.Types.String, required:true },
    description: { type: mongoose.Schema.Types.String },
    code:{ type: mongoose.Schema.Types.String },
    price: { type: mongoose.Schema.Types.Number },
    type: typesSchema,
    promotion: promotionSchema,
    title: { type: mongoose.Schema.Types.String },
    active: { type: mongoose.Schema.Types.Boolean }
  }, {versionKey: false}
)

const product =
  mongoose.models?.products || mongoose.model("products", productSchema);


export {product}