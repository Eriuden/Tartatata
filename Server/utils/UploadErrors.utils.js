module.exports.uploadErrors = (err) => {
    let errors = {format:"", maxsize:""}

    if (err.message.includes("invalid file"))
    errors.format = "Format d'image invalide"

    if (err.message.includes("max size"))
    errors.maxsize = "Taille maximale de fichier dépassée"

    return errors

}