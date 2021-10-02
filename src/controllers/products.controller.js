const Product = require("../models/products.model");

const getProducts = async (request, reply) => {
  try {
    const listProducts = await Product.find();
    return reply.send({
      products: listProducts,
      msg: "lista de productos obtenida correctamente",
    });
  } catch (error) {
    return reply.send({ msg: "Error al obtener lista", error });
  }
};

const getProduct = async (request, reply) => {
  try {
    const product = await Product.findById(request.params.id);
    return reply.send({
      product: product,
      msg: "Producto obtenido correctamente",
    });
  } catch (error) {
    return reply.code(400).send({ msg: "Error al obtener producto", error });
  }
};

const addProduct = async (request, reply) => {
  try {
    const product = new Product(request.body);
    await product.save();
    return reply.code(201).send({
      product: product,
      msg: "Producto creado correctamente",
    });
  } catch (error) {
    return reply.code(400).send({ msg: "Error al crear producto", error });
  }
};

const deleteProduct = async (request, reply) => {
  try {
    const deleteProduct = await Product.findByIdAndDelete(request.params.id);
    return reply.send({
      id: deleteProduct._id,
      msg: "Producto eliminado correctamente",
    });
  } catch (error) {
    return reply.code(400).send({ msg: "Error al eliminar producto", error });
  }
};

const updateProduct = async (request, reply) => {
  try {
    const updateProduct = await Product.findByIdAndUpdate(
      request.params.id,
      request.body,
      {
        new: true,
      }
    );
    return reply.send({
      product: updateProduct,
      msg: "Producto actualizado correctamente",
    });
  } catch (error) {
    return reply.code(400).send({ msg: "Error al actualizar producto", error });
  }
};

module.exports = {
  getProducts,
  getProduct,
  addProduct,
  deleteProduct,
  updateProduct,
};
