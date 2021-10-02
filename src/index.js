const fastify = require("fastify")({
  //log peticiones
  logger: true,
});

fastify.get("/", (request, reply) => {
  reply.send({ msg: "hello world" });
});

const start = async () => {
  await fastify.listen(3000);
  fastify.log.info(`server listening on ${fastify.server.address().port}`);
};

start();
