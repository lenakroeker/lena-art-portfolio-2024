const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    year: { type: String, required: false },
    media: { type: String, required: false },
    dimensions: { type: String, required: false },
    description: { type: String, required: false },
    forSale: { type: Boolean, required: false },
    sold: { type: Boolean, required: false },
    categories: { type: [String], required: false },
    price: { type: Number, required: false },
    images: { type: [String], required: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Project", ProjectSchema);
