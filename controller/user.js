const express = require("express");
const UserModel = require("../model/user");

module.exports.getSingleUser = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await UserModel.findOne({ _id: id });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports.getAllUser = async (req, res) => {
  try {
    const user = await UserModel.find();
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports.addUser = async (req, res) => {
  const { email, username } = req.body;
  try {
    const newUser = new UserModel({ email, username });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports.editUser = async (req, res) => {
  const { id } = req.params;
  const { email, username } = req.body;

  try {
    const editUser = await UserModel.findByIdAndUpdate(
      id,
      { email, username },
      { new: true }
    );
    if (!editUser) {
      return res.status(404).json({ message: "users not found" });
    }
    res.json(editUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports.deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    const deleteUser = await UserModel.findByIdAndDelete(id);
   
    if (!deleteUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ message: "User deleted successfully", deleteUser });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
