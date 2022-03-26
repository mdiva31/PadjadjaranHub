const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

// register user
router.post("/register", async (req, res) => {

    // jika terjadi error
    try {
        // membuat password baru dan dienkripsi dengan bcrypt
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        // membuat user baru
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
        });

        // menyimpan user baru ke database dan mengirim respon
        const user = await newUser.save();
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err);
    }

});

// login user
router.post("/login", async (req, res) => {
    try {
        //mengecek kesesuaian email
        const user = await User.findOne({email: req.body.email});
        !user && res.status(400).json("User tidak ditemukan");

        // mengecek kesesuaian password
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        !validPassword && res.status(400).json("Password salah");

        //jika email dan password benar
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;