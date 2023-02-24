import { useEffect, useState } from 'react'
import './App.css'

import BookCreate from './components/BookCreate'
import BooksList from './components/BooksList'

import { fetchBooks, postBooks, deleteBook, updateBook } from './services/books'

function App () {
  const [books, setBooks] = useState([])

  useEffect(() => {
    fetchBooks()
      .then(books => setBooks(books))
  }, [])

  const createBook = async (title) => {
    const bookRecorded = await postBooks(title)
    setBooks([...books, bookRecorded])
  }

  const deleteBooks = async (idForDelete) => {
    await deleteBook(idForDelete)
    setBooks(books.filter(({ id }) => id !== idForDelete))
  }

  const editBook = async ({ id, newTitle }) => {
    await updateBook(id, newTitle)
    setBooks(books.map(book => book.id === id ? { ...book, title: newTitle } : { ...book }))
  }

  return (
    <main>
      <h1 className='title'>📚 Books... </h1>
      <BooksList books={books} onDelete={deleteBooks} onEdit={editBook} />
      <BookCreate onCreate={createBook} />

    </main>
  )
}

export default App
