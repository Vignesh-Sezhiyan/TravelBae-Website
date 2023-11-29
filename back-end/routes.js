const express = require("express");
const router = express.Router();
const path = require("path");

router.get("^/$|/index(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

router.get("/destinations", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

router.get("^/contact$|/report", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});
router.get("/report", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

router.get("/kodaikanal", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});
router.get("/ooty", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

router.get("/munnar", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

router.get("/varanasi", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

router.get("/goa", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

router.get("/taj", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});
module.exports = router;
