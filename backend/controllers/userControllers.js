const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

// Users with income lower than $5 and have a car of brand "BMW" or "Mercedes":
const condition1 = asyncHandler(async (req, res) => {
  try {
    const users = await User.find({
      income: { $lt: "\$5" },
      car: { $in: ["BMW", "Mercedes"] },
    });
    res.json(users);
  } catch (error) {
    res.status(400);
    throw new Error(error.message);
  }
});

// Male users with phone price greater than 10,000:
const condition2 = asyncHandler(async (req, res) => {
  try {
    const users = await User.find({
      gender: "Male",
      phone_price: { $gt: 10000 },
    });

    res.json(users);
  } catch (error) {
    res.status(400);
    throw new Error(error.message);
  }
});

// Users whose last name starts with "M", has a quote character length greater than 15, and email includes their last name:
const condition3 = asyncHandler(async (req, res) => {
  try {
    const users = await User.find({
      last_name: { $regex: /^M/ },
      quote: { $regex: /^.{15,}$/ },
      $expr: {
        $regexMatch: {
          input: { $toLower: "$email" },
          regex: { $toLower: "$last_name" },
        },
      },
    });

    res.json(users);
  } catch (error) {
    res.status(400);
    throw new Error(error.message);
  }
});

// Users with a car of brand "BMW", "Mercedes", or "Audi" and whose email does not include any digit:

const condition4 = asyncHandler(async (req, res) => {
  try {
    const users = await User.find({
      car: { $in: ["BMW", "Mercedes", "Audi"] },
      email: { $not: { $regex: /\d/ } },
    });

    res.json(users);
  } catch (error) {
    res.status(400);
    throw new Error(error.message);
  }
});

// Top 10 cities with the highest number of users and their average income:
const condition5 = asyncHandler(async (req, res) => {
  try {
    const cities = await User.aggregate([
      {
        $addFields: {
          numericIncome: {
            $toDouble: {
              $substrBytes: ['$income', 1, { $subtract: [{ $strLenBytes: '$income' }, 1] }],
            },
          },
        },
      },
      {
        $group: {
          _id: '$city',
          count: { $sum: 1 },
          avgIncome: { $avg: '$numericIncome' },
        },
      },
      { $sort: { count: -1 } },
      { $limit: 10 },
    ]);

    res.json(cities);
  } catch (error) {
    res.status(400);
    throw new Error(error.message);
  }
});

module.exports = { condition1, condition2, condition3, condition4, condition5 };
