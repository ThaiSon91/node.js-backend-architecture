"use strict";

const { Schema, model } = require("mongoose");

//model chua keyStore, nhiem vu chua keyPublic moi user
//trong do co array chua refresh token, co gi kiem tra lai bao mat ma chung ta
const DOCUMENT_NAME = "Key";
const COLLECTION_NAME = "Keys";
//Declare the Schema of the mongo model
const keyTokenSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Shop",
    },
    privateKey: {
      type: String,
      required: true,
    },
    publicKey: {
      type: String,
      required: true,
    },
    // refreshTokensUsed: {
    //   type: Array,
    //   default: [], // RT da duoc su dung
    // },
    refreshToken: {
      //test hacker su dung trai phep token nay
      type: Array,
      default: [],
    },
  },
  {
    collection: COLLECTION_NAME,
    timestamps: true,
  }
);

module.exports = model(DOCUMENT_NAME, keyTokenSchema);
