const { PrismaClient } = require("@prisma/client");

let prismaClient;

exports.initPrisma = () => {
  prismaClient = new PrismaClient();

  console.log("Initialized prisma client.");
};

/**
 * @returns {PrismaClient}
 */
exports.getPrismaClient = () => prismaClient;
