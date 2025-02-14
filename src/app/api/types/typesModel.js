import mongoose from 'mongoose';

const typesSchema = mongoose.Schema({
  id: {type: mongoose.Schema.Types.ObjectId},
  name: {type: mongoose.Schema.Types.String, required: true}
}, { versionKey: false })

const type =
  mongoose.models?.type || mongoose.model("type", typesSchema);

export { type, typesSchema }