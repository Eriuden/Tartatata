const mongoose = require("mongoose")

const tarteSchema = new mongoose.Schema(
    {
        picture: {
            type: String,
            required: true,
        },

        name: {
            type: String,
            trim: true,
            maxLength: 100,
        },

        typeDeTarte: {
            type: String,
            trim: true,
            maxLength: 20,
        },

        ingrédients: {
            type: String,
            trim: true,
            maxLength: 1000,
        },

        résumé: {
            type: String,
            trim: true,
            maxLength: 1000,
        },

        price: {
            type: String,
            trim: true,
            maxLength: 10,
        },

    },
    {timestamps : true}
)

const tarteModel = mongoose.model("tarte", tarteSchema)
module.exports = tarteModel