class Librarian {
  constructor(name, library) {
    this.name = name,
    this.library = library
  }

  greetPatron(patron, isItMorning) {
  if (isItMorning === true) {
    return `Good morning, ${patron}!`
  };
    return `Hello, ${patron}!`;
  };

  findBook(newBook) {
    var libShelves = this.library.shelves;
    for (var i = 0; i < libShelves.fantasy.length && i < libShelves.fiction.length && i < libShelves.nonFiction.length; i++)
    if (libShelves.fantasy[i] === undefined && libShelves.fiction[i] === undefined && libShelves.nonFiction[i] === undefined) {
      return `Sorry, we do not have ${newBook}`;
    }
    if (libShelves.fantasy[i] !== undefined && libShelves.fantasy[i].title === newBook) {
      libShelves.fantasy.splice(i, 1);
      return `Yes, we have ${newBook}`;
    } else if (libShelves.fiction[i] !== undefined && libShelves.fiction[i].title === newBook) {
      libShelves.fiction.splice(i, 1);
      return `Yes, we have ${newBook}`;
    } else if (libShelves.nonFiction[i] !== undefined && libShelves.nonFiction[i].title === newBook) {
      libShelves.nonFiction.splice(i, 1);
      return `Yes, we have ${newBook}`;
    } else return `Sorry, we do not have ${newBook}`;
  }

  calculateLateFee(daysLate) {
    var lateFee = Math.ceil(daysLate / 4);
    return lateFee;
  }
}

module.exports = Librarian;
