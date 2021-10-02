const productController = require("../controllers/products.controller");

const routes = [
  {
    url: "/products",
    method: "GET",
    handler: productController.getProducts,
  },
  {
    url: "/products/:id",
    method: "GET",
    handler: productController.getProduct,
  },
  {
    url: "/products",
    method: "POST",
    handler: productController.addProduct,
  },
  {
    url: "/products/:id",
    method: "DELETE",
    handler: productController.deleteProduct,
  },
  {
    url: "/products/:id",
    method: "PUT",
    handler: productController.updateProduct,
  },
];

module.exports = routes;
