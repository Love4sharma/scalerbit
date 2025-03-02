const Product = require("../models/product");

async function getProducts(req, res) {
  try {
    const sellerId = req.token.userId;
    const products = await Product.find({ sellerId: sellerId });
    console.log(products);
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    return res.status(200).json({
      success: true,
      data: products,
      message: "products fetched successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

module.exports = { getProducts };
