const fastify = require("fastify")({
  //log peticiones
  logger: true,
});

const productsRoutes = require("./routes/products.routes");
require("./utils/database");
const swagger = require("./utils/swagger");

fastify.register(require("fastify-swagger"), swagger.options);

fastify.get("/", (request, reply) => {
  reply.send({ msg: "hello world" });
});
productsRoutes.forEach((route) => {
  fastify.route(route);
});

const start = async () => {
  await fastify.listen(3000);
  fastify.log.info(`server listening on ${fastify.server.address().port}`);
};

start();
