const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    res.send("Working")
});

router.post("./signup", (req, res) => {
    res.json("Data is posted")
})

module.exports = router;