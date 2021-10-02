exports.options = {
  routePrefix: "/documentation",
  exposeRoute: true,
  swagger: {
    info: {
      title: "Node,js Api Fastify MongoDB",
      description: "Api build with Fastify and MongoDB",
      version: "0.0.1",
    },
    externalDocs: {
      url: "https://swagger.io",
      description: "Find more info here",
    },
  },
  host: "localhost:3000",
  schemas: ["http"],
  consumes: ["application/json"],
  produces: ["applicacion/json"],
};
