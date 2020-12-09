const router = require("express").Router();
const bookController = require("../controllers/bookController");

/**
 * @swagger
 * /books:
 *    get:
 *      summary: get all books
 *      description: Get all books
 *      responses:
 *        200:
 *          description: Success
 * */
router.get("/books", bookController.getBooks);

/**
 * @swagger
 * /book:
 *    post:
 *      summary: Create a book
 *      description: Create a book
 *      parameters:
 *      - name: title
 *        description: title of the book
 *        in: formData
 *        required: true
 *        type: string
 *      responses:
 *        201:
 *          description: Success
 * */
router.post("/book", bookController.createBook);

/**
 * @swagger
 * /book/:bookId:
 *    get:
 *      summary: get book by bookId
 *      description: Get book by bookId
 *      responses:
 *        200:
 *          description: Success
 * */
router.get("/book/:bookId", bookController.getBookById);

/**
 * @swagger
 * /book/:bookId:
 *    put:
 *      summary: update a book
 *      description: Update a book
 *      responses:
 *        200:
 *          description: Success
 * */
router.put("/book/:bookId", bookController.patchBook);

/**
 * @swagger
 * /book/:bookId:
 *    delete:
 *      summary: delete a book
 *      description: Delete a book
 *      responses:
 *        200:
 *          description: Success
 * */
router.delete("/book/:bookId", bookController.deleteBook);

module.exports = router;
