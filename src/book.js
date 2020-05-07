
function createTitle(title) {
  return "The " + title;
};

function buildMainCharacter(name, age, pronouns) {
  var ghoulCharacter = {
   name: name,
   age: age,
   pronouns: pronouns
 }
 return ghoulCharacter
};

function saveReview(praise, reviews) {
  if (reviews.includes(praise)) {
    console.log(reviews);
  } else {
  reviews.push(praise);
  return reviews;
}
};

function calculatePageCount(title) {
  var pages = title.length * 20;
  return pages;
};

function writeBook(bookTitle, bookCharacter, genre) {
  var book = {};
  book.title = bookTitle;
  book.mainCharacter = bookCharacter;
  book.pageCount = calculatePageCount(bookTitle);
  book.genre = genre;
 return book;
};

function editBook(book) {
book.pageCount = book.pageCount / 4 * 3;
return book.pageCount;
};

module.exports = {
  createTitle: createTitle,
  buildMainCharacter: buildMainCharacter,
  saveReview: saveReview,
  calculatePageCount: calculatePageCount,
  writeBook: writeBook,
  editBook: editBook
}
