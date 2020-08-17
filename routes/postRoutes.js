const { Router } = require("express");

const controllers = require("../controllers/postControllers");

const router = Router();

router.get("/posts", controllers.getPost);
router.get("/post/:id", controllers.getPost);
router.post("/post", controllers.createPost);
router.put("/post/:id", controllers.updatePost);
router.delete("/post/:id", controllers.deletePost);

module.exports = router;

//Wooooo Whoooo
