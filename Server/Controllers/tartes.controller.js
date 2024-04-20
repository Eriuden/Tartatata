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
    }
}