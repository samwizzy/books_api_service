module.exports.createBook = async (req, res) => {
  res.status(201).send("Book successfully created");
};

module.exports.getBooks = async (req, res) => {
  res.send([
    {
      title: "Avatar",
      description: "its a comic series",
    },
  ]);
};

module.exports.getBookById = async function (req, res) {
  res.send({
    title: "Avatar",
    description: "its a comic series",
  });
};

module.exports.patchBook = async function (req, res) {
  res.status(200).send("Successfully updated a book");
};

module.exports.deleteBook = async function (req, res) {
  res.status(200).send("Successfully deleted a book");
};
