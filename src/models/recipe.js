import mongoose, { SchemaType } from 'mongoose';

const Schema = mongoose.Schema;

const RecipeSchema = new Schema ({
    name: {
        type: 'string',
        required: true
    },
    body: {
        type: 'string',
        required: false,
        max: 255
    },
    particepent: {
        type: Schema.Types.ObjectId,
        ref: 'Particepents'
    },
    ingredients: [],
    upvotes: {
        type: 'number',
        default: 0
    }
})

export default mongoose.model('Recipe', RecipeSchema);