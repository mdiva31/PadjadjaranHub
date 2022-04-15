const User = require("../models/User");
const router = require("express").Router();
const bcrypt = require("bcrypt");
const res = require("express/lib/response");

//update user
router.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    if (req.body.password) {
      try {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
      } catch (err) {
        return res.status(500).json(err);
      }
    }
    try {
      const user = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      res.status(200).json("Akun telah terupdate");
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    return res
      .status(403)
      .json("Anda hanya dapat mengupdate akun anda sendiri");
  }
});

//menghapus user
router.delete("/:id", async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
      res.status(200).json("Akun telah terhapus");
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    return res.status(403).json("Anda hanya dapat menghapus akun anda sendiri");
  }
});

// menampilkan satu user
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, updateAt, ...other } = user._doc;
    res.status(200).json(other);
  } catch (err) {
    res.status(500).json(err);
  }
});

// follow user
router.put("/:id/follow", async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.userId);
      if (!user.followers.includes(req.body.userId)) {
        await user.updateOne({ $push: { followers: req.body.userId } });
        await currentUser.updateOne({ $push: { followings: req.params.id } });
        res.status(200).json("user berhasil diikuti");
      } else {
        res.status(403).json("anda mengikuti user ini");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("anda tidak dapat mengikuti diri sendiri");
  }
});

// unfollow user
router.put("/:id/unfollow", async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.userId);
      if (user.followers.includes(req.body.userId)) {
        await user.updateOne({ $pull: { followers: req.body.userId } });
        await currentUser.updateOne({ $pull: { followings: req.params.id } });
        res.status(200).json("user berhenti diikuti");
      } else {
        res.status(403).json("anda tidak mengikuti user ini");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("anda tidak dapat meng-unfollow diri anda sendiri");
  }
});

module.exports = router;