import User from "../models/UserSchema.js";

export const updateUser = async (req, res) => {
  const id = req.params.id;

  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );

    res.status(200).json({ message: "updated succesfully", data: updatedUser });
  } catch (error) {
    res.status(500).json({ message: "updated succesfully" });
  }
};

export const deleteUser = async (req, res) => {
  const id = req.params.id;

  try {
    const deletedUser = await User.findByIdAndDelete(id);
    res.status(200).json({ message: "deleted succesfully", data: deletedUser });
  } catch (error) {
    res.status(500).json({ message: "deletion failed" });
  }
};

export const getSingleUser = async (req, res) => {
  const id = req.params.id;

  try {
    const user = await User.findById(id);
    res.status(200).json({ message: "user found succesfully", data: user });
  } catch (error) {
    res.status(404).json({ message: "user not found" });
  }
};

export const getSAllUser = async (req, res) => {
  const id = req.params.id;

  try {
    const user = await User.find({}).select("-password");
    res.status(200).json({ message: "users found succesfully", data: user   });
  } catch (error) {
    res.status(404).json({ message: "users not found" });
  }
};
