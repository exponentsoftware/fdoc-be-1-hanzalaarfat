const express = require("express");
const router = express.Router();
const todocontroller = require("../controller/todocontroller");

router.get("/getall", todocontroller.getalltodo);
router.post("/add", todocontroller.addtodo);
router.get("/:id", todocontroller.gettodoById);
router.put("/update/:id", todocontroller.updatetodo);
router.delete("/delete/:id", todocontroller.deletetodo);
// router.get('/count/:id', todocontroller.taskCount);

module.exports = router;
