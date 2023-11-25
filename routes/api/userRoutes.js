const router = require("express").Router();
const {
  getUser,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require("../../controllers/userController");

router.route("/").get(getUser).post(createUser);

router.route("/:UserId").get(getSingleUser).put(updateUser).delete(deleteUser);

// router.route("/:UserId/friends/:friendId").post(addFriend).delete(removeFriend);

module.exports = router;
