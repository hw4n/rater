const router = require("express").Router();
const mediaController = require("../controllers/mediaController");

router.get("/media", mediaController.getAllMedia);
router.get("/media/:id", mediaController.getMediaById);
router.post("/media", mediaController.createMedia);
router.put("/media/:id", mediaController.updateMediaById);
router.delete("/media/:id", mediaController.deleteMediaById);

module.exports = router;
