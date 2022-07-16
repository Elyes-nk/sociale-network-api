const Stack = require("../models/Stack")

exports.create = async (req, res) => {
    const newStacks = new Stack(req.body);
    try {
      const savedStacks = await newStacks.save();
      res.status(201).json(savedStacks);
    } catch (err) {
      res.status(500).json(err);
    }
}

exports.update = async (req, res) => {
    try {
        const updatedStacks = await Stack.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true }
        );
        res.status(200).json(updatedStacks);
    } catch (err) {
        res.status(500).json(err);
    }
}


exports.delete = async (req, res) => {
    try {
      await Stack.findByIdAndDelete(req.params.id);
      res.status(200).json("Stack has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
}

exports.get = async (req, res) => {
    try {
      const stack = await Stack.findById(req.params.id);
      res.status(200).json(stack);
    } catch (err) {
      res.status(500).json(err);
    }
}

exports.getAll = async (req, res) => {
    const query = req.query.new;
      try {
        const stacks = query
          ? await Stack.find().sort({ _id: -1 }).limit(5)
          : await Stack.find();
        res.status(200).json(stacks);
      } catch (err) {
        res.status(500).json(err);
      }
}