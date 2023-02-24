import { createContext, useState } from 'react'

import { fetchBooks, postBooks, deleteBook, updateBook } from '../services/books'

const BooksContext = createContext()

function BooksProvider ({ children }) {
  const [books, setBooks] = useState([])

  const getBooks = () => {
    fetchBooks()
      .then(books => setBooks(books))
  }

  const createBook = async (title) => {
    const bookRecorded = await postBooks(title)
    setBooks([...books, bookRecorded])
  }

  const editBook = async ({ id, newTitle }) => {
    await updateBook(id, newTitle)
    setBooks(books.map(book => book.id === id ? { ...book, title: newTitle } : { ...book }))
  }

  const removeBook = async (idForDelete) => {
    await deleteBook(idForDelete)
    setBooks(books.filter(({ id }) => id !== idForDelete))
  }

  return (
    <BooksContext.Provider value={{
      books,
      getBooks,
      createBook,
      editBook,
      removeBook
    }}
    >{children}
    </BooksContext.Provider>
  )
}

export { BooksProvider }
export default BooksContext
