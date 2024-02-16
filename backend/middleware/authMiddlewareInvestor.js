const jwt = require("jsonwebtoken");
const Investor = require("../models/investorModel");
const asyncHandler = require("express-async-handler");

const protectInvestor = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      //decodes token id
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await Investor.findById(decoded.id).select("-password");

      next();
    } catch (error) {
      res.status(401).json("Not authorized, token failed");
    }
  }

  if (!token) {
    res.status(401).json("Not authorized, no token");
  }
});

module.exports = { protectInvestor };