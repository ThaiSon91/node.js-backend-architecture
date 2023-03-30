"use strict";

//! dmbg install by mongo snippets for nodejs
const { model, schema, Types } = require("mongoose");
const DOCUMENT_NAME = "Shop";
const COLLECTION_NAME = "Shops";

//Declare the schema of the Mongo model
const shopSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      maxLength: 150,
    },
    email: {
      type: String,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "inactive",
    },
    vertify: {
      type: Schema.Type.Boolean,
      default: false,
    },
    roles: {
      type: Array,
      default: [],
    },
  },
  {
    timestamp: true,
    collection: COLLECTION_NAME,
  }
);

//export the model
module.exports = model(DOCUMENT_NAME, shopSchema);
