"use strict";
const AccessService = require("../services/access.service");

class AccessCoontroller {
  signUp = async (req, res, next) => {
    try {
      console.log(`[p]::signUp::`, req.body);
      //200 OK
      //201 CREATED
      return res.status(201).json(
        await AccessService.signUp(req.body)
        // code: "20001",
        // metadata: { userid: 1 },
      );
    } catch (error) {
      next(error);
    }
  };
}

module.exports = new AccessCoontroller();
