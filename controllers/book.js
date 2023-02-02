const {
  getAllBooksService,
  createBookService,
  getBookByIdService,
  updateBookByIdService,
  deleteBookByIdService,
} = require("../services/book");
const express = require("express");

/**
 * Controller function to get all books.
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
exports.getAllBooksController = async (req, res, next) => {
  const books = await getAllBooksService();

  if (!books) {
    return res.status(500).json({
      success: false,
      message: "Failed to get books.",
    });
  }

  res.status(200).json({
    success: true,
    message: "The books were found successfully.",
    data: books,
  });
};

/**
 * Controller function to create a book.
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
exports.createBookController = async (req, res, next) => {
  const bookData = req.body;

  if (!bookData) {
    return res.status(400).json({
      success: false,
      message: "Please add a book title.",
    });
  }

  const book = await createBookService(req.body);

  if (!book) {
    return res.status(500).json({
      success: false,
      message: "Failed to create book.",
    });
  }

  res.status(201).json({
    success: true,
    message: "The book was created successfully.",
    data: book,
  });
};

/**
 * Controller function to get a book by its id.
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
exports.getBookByIdController = async (req, res, next) => {
  const bookId = req.params.bookId;

  if (!bookId) {
    return res.status(400).json({
      success: false,
      message: "Please add a book id.",
    });
  }

  const book = await getBookByIdService(bookId);

  if (!book) {
    return res.status(404).json({
      success: false,
      message: `A book was not found with id ${bookId}.`,
    });
  }

  res.status(200).json({
    success: true,
    message: "The book was found successfully.",
    data: book,
  });
};

/**
 * Controller function to update a book by its id.
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
exports.updateBookByIdController = async (req, res, next) => {
  const bookId = req.params.bookId;
  const bookData = req.body;

  if (!bookId) {
    return res.status(400).json({
      success: false,
      message: "Please add a book id.",
    });
  }

  if (!bookData) {
    return res.status(400).json({
      success: false,
      message: "Please add fields to be updated.",
    });
  }

  const book = await updateBookByIdService(bookId, bookData);

  if (!book) {
    return res.status(500).json({
      success: false,
      message: "Failed to update book.",
    });
  }

  res.status(200).json({
    success: true,
    message: "The book was updated successfully.",
    data: book,
  });
};

/**
 * Controller function to delete a book by its id.
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
exports.deleteBookByIdController = async (req, res, next) => {
  const bookId = req.params.bookId;

  if (!bookId) {
    return res.status(400).json({
      success: false,
      message: "Please add a book id.",
    });
  }

  const book = await deleteBookByIdService(bookId);

  if (!book) {
    return res.status(500).json({
      success: false,
      message: "Failed to delete book.",
    });
  }

  res.status(200).json({
    success: true,
    message: "The book was deleted successfully.",
    data: book,
  });
};
