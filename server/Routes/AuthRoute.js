const { Signup, Login } = require("../Controllers/AuthController.js");
const {userVerification, cook} = require("../Middlewares/AuthMiddleware.js")
const router = require("express").Router();

router.post("/signup", Signup);
router.post('/login', Login)
router.post('/', userVerification)
router.post('/ck', cook)

module.exports = router;