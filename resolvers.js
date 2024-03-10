const data = {
  authors: [
    { id: "1", name: "Void", bookIds: ["101", "102"] },
    { id: "2", name: "christopher", bookIds: ["105"] },
  ],
  books: [
    {
      id: "101",
      title: "theory of everything",
      publishedYear: 2001,
      authorId: "1",
    },
    { id: "102", title: "Atomic habits", publishedYear: 2002, authorId: "1" },
    {
      id: "105",
      title: "rich dad poor dad",
      publishedYear: 1965,
      authorId: "2",
    },
  ],
};

export const resolvers = {
  Book: {
    author: (parent, args, context, info) => {
      console.log(parent);
      return data.authors.find(
        (authorDetail) => authorDetail.id === parent.authorId
      );
    },
  },

  Author: {
    books: (parent, args, context, info) => {
      return data.books.filter((book) => parent.bookIds.includes(book.id));
    },
  },

  Query: {
    authors: (parent, args, context, info) => {
      return data.authors;
    },
    books: (parent, args, context, info) => {
      return data.books;
    },
  },

  Mutation: {
    addBook: (parent, args, context, info) => {
      const newBook = { ...args, id: data.books.length + 1 };
      data.books.push(newBook);
      return newBook;
    },
  },
};
