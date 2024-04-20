const tarteModel = require("../Models/tartes.model")
const ObjectId = require("mongoose").Types.ObjectId
const fs = require("fs")
const {promisify} = require("util")
const {uploadErrors} = require ("../utils/UploadErrors.utils")
const pipeline = promisify(require("stream"))

module.exports.readTarte = (res) => {
    tarteModel.find((err,docs)=> {
        if (!err) res.send(docs)
        else console.log("Erreur de réception:" + err)
    }).sort ({createdAt: -1})
}

module.exports.createTarte = async(req,res) => {
    let fileName

    if (req.file != null) {
        try {
            if (
                req.file.detectedMimeType != "image/jpg" &&
                req.file.detectedMimeType != "image/png" &&
                req.file.detectedMimeType != "image/jpeg"
            )
            throw Error("invalid file")

            if (req.file.size > 500000) throw Error ("Taille maximale dépassée")
        } catch (error) {
            const errors = uploadErrors(error)
            return res.status(201).json({errors})
        }
        fileName = req.body._id + Date.now() + ".jpg"

        await pipeline(
            req.file.stream,
            fs.createWriteStream(
                `${__dirname}/../public/uploads/tarteImages/${fileName}`
            )
        )
    }

    const newTarte = new tarteModel({
        picture: req.file != null ? "./uploads/tarteImage" + fileName: "",
        name: req.body.name, 
        typeDeTarte : req.body.typeDeTarte,
        ingrédients: req.body.ingrédients,
        résumé: req.body.résumé,
        price: req.body.price
    })

    try {
        const tarte = await newTarte.save()
        return res.status(201).json(tarte)
    } catch (err) {
        return res.status(400).send(err)
    }
}

module.exports.updateTarte = (req,res) => {
    if (!ObjectId.isValid(req.params.id))
    return res.status(400).send("Id inconnue:" + req.params.id)

    const updatedRecord = {
        picture: req.body.picture,
        name: req.body.name,
        typeDeTarte: req.body.typeDeTarte,
        ingrédients: req.body.ingrédients,
        résumé: req.body.résumé,
        price: req.body.price,
    }

    tarteModel.findByIdAndUpdate(
        req.params.id,
        { $set: updatedRecord},
        {new: true},
        (err,docs) => {
            if (!err) res.send(docs)
            else console.log("erreur d'update :" + err)
        }
    )
}

module.exports.deleteTarte = (req,res) => {
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send("Id inconnue:" + req.params.id)

    tarteModel.findByIdAndDelete(req.params.id, (err,docs) => {
        if (!err)res.send(docs)
        else console.log ("Erreur lors de la supression :" + err)
    })
}