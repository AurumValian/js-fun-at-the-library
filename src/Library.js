function createLibrary(name) {
  var library = {
    name: name,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: []
    }
  };
return library;
};

function addBook(library, bookName) {
  if (bookName.genre === "fantasy") {
    library.shelves.fantasy.push(bookName);
  } else if (bookName.genre === "fiction") {
    library.shelves.fiction.push(bookName);
  } else {
    library.shelves.nonFiction.push(bookName);
  }
  return library;
};

function checkoutBook(library, bookTitle) {
    if (library.shelves.fantasy.length > 0 && library.shelves.fantasy[0].title === bookTitle) {
      library.shelves.fantasy.shift();
      return `You have now checked out ${bookTitle} from the ${library.name}`;
    } else if (library.shelves.fiction.length > 0 &&library.shelves.fiction[0].title === bookTitle) {
        library.shelves.fiction.shift();
        return `You have now checked out ${bookTitle} from the ${library.name}`;
    } else if (library.shelves.nonFiction.length > 0 &&library.shelves.nonFiction[0].title === bookTitle) {
        library.shelves.nonFiction.shift();
        return `You have now checked out ${bookTitle} from the ${library.name}`;
      } else return `Sorry, there are currently no copies of ${bookTitle} available at the ${library.name}`

};

module.exports = {
  createLibrary: createLibrary,
  addBook: addBook,
  checkoutBook: checkoutBook
};
