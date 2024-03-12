import Joi from 'joi';
import mongoose from 'mongoose'
export const productSchema = mongoose.Schema({
    productName: String,
    description: String,
    price: Number,
    category: String,
    // size: Number,
    metal: String, 
    productImg:String
})
export const ProductModel = mongoose.model("products", productSchema);

export const productValidator = (_product) => {
    const productValidationSchema = Joi.object().keys({
        productName: Joi.string().min(3).required(),
        description: Joi.string().min(0),
        price: Joi.number().min(0).required(),
        category: Joi.string().required(),
        // size: Joi.number(),
        metal: Joi.string(),
        image:Joi.string().default("סמל.png")
    })
    return productValidationSchema.validate(_product);
}
 
