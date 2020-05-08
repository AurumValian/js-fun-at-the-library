function shelfBook(book, shelf) {
  if (book.genre === 'scifi') {
    if (shelf.length < 3) {
    shelf.unshift(book);
    console.log(shelf);
    return shelf;
  };
};

};

function unshelfBook(book, shelf) {
  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title === book) {
      shelf.splice(i, 1);
    };
  };

};

function listTitles(shelf) {
var titleArray = []
for (var i = 0; i < shelf.length; i++) {
    titleArray.push(shelf[i].title);
  };
  var list = titleArray.join(', ');
  return list;
};

function searchShelf(shelf, book) {
  for (var i = 0; i < shelf.length; i++) {
    if (book == shelf[i].title) {
      return true;
    };
  };
return false;
};

module.exports = {
  shelfBook: shelfBook,
  unshelfBook: unshelfBook,
  listTitles: listTitles,
  searchShelf: searchShelf
};
