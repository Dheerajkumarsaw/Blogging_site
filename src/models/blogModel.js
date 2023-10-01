const mongoose = require("mongoose");
const Object_id = mongoose.Types.ObjectId;

const BlogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    authorId: {
      type: Object_id,
      required: true,
      ref: "Author",
    },
    tags: [
      {
        type: String,
        required: true,
        trim: true,
      },
    ],
    category: {
      type: String,
      required: true,
      trim: true,
    },
    subcategory: [
      {
        type: String,
        required: true,
        trim: true,
        _id: false,
      },
    ],
    deleteAt: {
      type: Date,
      default: null,
    },
    publishedAt: {
      type: Date,
      default: null,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    isPublished: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Blog", BlogSchema);
