import express from "express"
const router = express.Router();

router.get('/users', (req, res) => {
    console.log("Hi There");
    res.send("Hello");
});

export default router;