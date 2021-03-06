const { v1: uuid } = require('uuid');

let authors = [
  {
    name: 'Robert Martin',
    id: 'afa51ab0-344d-11e9-a414-719c6709cf3e',
    born: 1952,
  },
  {
    name: 'Martin Fowler',
    id: 'afa5b6f0-344d-11e9-a414-719c6709cf3e',
    born: 1963,
  },
  {
    name: 'Fyodor Dostoevsky',
    id: 'afa5b6f1-344d-11e9-a414-719c6709cf3e',
    born: 1821,
  },
  {
    name: 'Joshua Kerievsky', // birthyear not known
    id: 'afa5b6f2-344d-11e9-a414-719c6709cf3e',
  },
  {
    name: 'Sandi Metz', // birthyear not known
    id: 'afa5b6f3-344d-11e9-a414-719c6709cf3e',
  },
];

/*
 * It might make more sense to associate a book with its author by storing the author's name in the context of the book instead of the author's id
 * However, for simplicity, we will store the author's name in connection with the book
 */

let books = [
  {
    title: 'Clean Code',
    published: 2008,
    author: 'Robert Martin',
    id: 'afa5b6f4-344d-11e9-a414-719c6709cf3e',
    genres: ['refactoring'],
  },
  {
    title: 'Agile software development',
    published: 2002,
    author: 'Robert Martin',
    id: 'afa5b6f5-344d-11e9-a414-719c6709cf3e',
    genres: ['agile', 'patterns', 'design'],
  },
  {
    title: 'Refactoring, edition 2',
    published: 2018,
    author: 'Martin Fowler',
    id: 'afa5de00-344d-11e9-a414-719c6709cf3e',
    genres: ['refactoring'],
  },
  {
    title: 'Refactoring to patterns',
    published: 2008,
    author: 'Joshua Kerievsky',
    id: 'afa5de01-344d-11e9-a414-719c6709cf3e',
    genres: ['refactoring', 'patterns'],
  },
  {
    title: 'Practical Object-Oriented Design, An Agile Primer Using Ruby',
    published: 2012,
    author: 'Sandi Metz',
    id: 'afa5de02-344d-11e9-a414-719c6709cf3e',
    genres: ['refactoring', 'design'],
  },
  {
    title: 'Crime and punishment',
    published: 1866,
    author: 'Fyodor Dostoevsky',
    id: 'afa5de03-344d-11e9-a414-719c6709cf3e',
    genres: ['classic', 'crime'],
  },
  {
    title: 'The Demon ',
    published: 1872,
    author: 'Fyodor Dostoevsky',
    id: 'afa5de04-344d-11e9-a414-719c6709cf3e',
    genres: ['classic', 'revolution'],
  },
];

const resolvers = {
  Query: {
    authorCount: () => authors.length,
    bookCount: () => books.length,
    allBooks: (_root, { author, genre }) => {
      if (author && genre) {
        return books.filter(
          (book) => book.author === author && book.genres.includes(genre)
        );
      } else if (author) {
        return books.filter((book) => book.author === author);
      } else if (genre) {
        return books.filter((book) => book.genres.includes(genre));
      }

      // no args supplied, return all books
      return books;
    },
    allAuthors: () => authors,
  },
  Author: {
    bookCount: (root) =>
      books.reduce(
        (prev, currBook) => (currBook.author === root.name ? ++prev : prev),
        0
      ),
  },
  Mutation: {
    addBook: (_root, { title, author, genres, published }) => {
      // Adding a book by a author we do not know, so let's add that author
      if (!authors.find((a) => a.name === author)) {
        const newAuthor = { name: author, id: uuid() };
        authors = authors.concat(newAuthor);
      }

      const book = { title, author, genres, published, id: uuid() };
      books = books.concat(book);
      return book;
    },
    editAuthor: (_root, { name, setBornTo }) => {
      const author = authors.find((a) => a.name === name);

      if (!author) {
        return null;
      }

      const updatedAuthor = { ...author, born: setBornTo };

      authors = authors.map((a) =>
        a.name === author.name ? updatedAuthor : a
      );

      return updatedAuthor;
    },
  },
};

module.exports = resolvers;
