const express = require("express");
const router = express.Router();
const {
    ensureAuth
} = require("../middleware/auth");

const Story = require("../models/story");


/**
 * @desc    Show add page
 * @route   GET /stories/add
 */
router.get("/add", ensureAuth, (req, res) => {
    res.render("stories/add")
})

/**
 * @desc    Creates a story
 * @route   POST /stories
 */
 router.post("/", ensureAuth, async (req, res) => {
    try {
        req.body.user = req.user.id;
        await Story.create(req.body);
        res.redirect("/dashboard")
    } catch(err) {
        console.error(err);
        res.render("error/500");
    }
})

module.exports = router;