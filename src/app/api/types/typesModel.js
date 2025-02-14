import mongoose from 'mongoose';

const typesSchema = mongoose.Schema({
  id: {type: mongoose.Schema.Types.ObjectId},
  name: {type: mongoose.Schema.Types.String, required: true}
})

const type = mongoose.model('types', typesSchema )

export { type, typesSchema }