const { getPrismaClient } = require("../loaders/prisma");

/**
 * Database query to get all books.
 *
 * @returns {Promise<null|any>}
 */
exports.getAllBooksService = async () => {
  const prismaClient = getPrismaClient();

  try {
    return await prismaClient.books.findMany();
  } catch (error) {
    console.log(error);
    return null;
  }
};

/**
 * Database query to create a book.
 *
 * @param {object} values Object with column:value mapped data.
 *
 * @returns {Promise<null|any>}
 */
exports.createBookService = async (values) => {
  if (!values) return null;

  delete values?.id;

  const prismaClient = getPrismaClient();

  try {
    return await prismaClient.books.create({ data: values });
  } catch (error) {
    console.log(error);
    return null;
  }
};

/**
 * Database query to get a book by its id.
 *
 * @param {string} id id of the book.
 *
 * @returns {Promise<null|any>}
 */
exports.getBookByIdService = async (id) => {
  if (!id) return null;

  const prismaClient = getPrismaClient();

  try {
    return await prismaClient.books.findUnique({ where: { id: Number(id) } });
  } catch (error) {
    console.log(error);
    return null;
  }
};

/**
 * Database query to update a book by its id.
 *
 * @param {string} id id of the book.
 * @param {object} updateObj Object with column:value mapped data.
 *
 * @returns {Promise<null|any>}
 */
exports.updateBookByIdService = async (id, updateObj) => {
  if (!id) return null;

  delete updateObj?.id;

  const prismaClient = getPrismaClient();

  try {
    return await prismaClient.books.update({
      where: { id: Number(id) },
      data: updateObj,
    });
  } catch (error) {
    console.log(error);
    return null;
  }
};

/**
 * Database query to delete a book by its id.
 *
 * @param {string} id id of the book.
 *
 * @returns {Promise<null|any>}
 */
exports.deleteBookByIdService = async (id) => {
  if (!id) return null;

  const prismaClient = getPrismaClient();

  try {
    return await prismaClient.books.delete({
      where: { id: Number(id) },
    });
  } catch (error) {
    console.log(error);
    return null;
  }
};
