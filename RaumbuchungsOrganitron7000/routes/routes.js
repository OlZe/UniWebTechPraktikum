const express = require("express");
const router = express.Router();

router.use(express.static("public"));

router.get("/", (req, res, next) => {
    res.render("dashboard");
});

router.get("/raumliste", (req, res, next) => {
    res.render("raumliste");
});

router.get("/raumdetail", (req, res, next) => {
    res.render("raumdetail");
});

router.get("/buchungsdetail", (req, res, next) => {
    res.render("buchungsdetails");
});

router.get("/neuebuchung", (req, res, next) => {
    res.render("neuebuchung");
});

router.use((req, res, next) => {
    res.render("404");
});

module.exports = router;