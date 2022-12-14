import express from "express"
const router = express.Router();

router.get('/', (req, res) => {
    console.log("Hi There Buddy");
    res.send("Hello");
});

export default router;