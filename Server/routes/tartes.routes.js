const router = require("express").Router()
const tarteController = require("../Controllers/tartes.controller")
const multer = require("multer")
const upload = multer()

router.get("/", tarteController.readTarte)
router.post("/", upload.single("file"), tarteController.createTarte)
router.put("/:id", tarteController.updateTarte)
router.delete("/:id", tarteController.deleteTarte)