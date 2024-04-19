const mongoose = require("mongoose")

mongoose.connect(
    "mongodb+srv://"
    + process.env.DB_USER_PASS 
    + "@cluster0.iodcc.mongodb.net/Tartatata"
)
.then(()=> console.log("Connecté à la BDD"))
.catch((err)=> console.log("Erreur lors de la tentative de connexion", err))

