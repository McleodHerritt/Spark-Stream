const { ObjectId } = require("mongoose").Types;

module.export = {
  async getUser(req, res) {
    try {
      const user = await User.find({ _id: req.params.UserId })
        .select("-__v")
        .lean();

      if (!user) {
        return res.status(404).json({ message: "No user with that ID" });
      }

      res.json({
        user,
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
};
