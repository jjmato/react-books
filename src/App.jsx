import { useState } from 'react'
import './App.css'

import BookCreate from './components/BookCreate'
import BooksList from './components/BooksList'

const API_BOOKS_ENDPOINT = 'http://127.0.0.1:3001/books'

function App () {
  const [books, setBooks] = useState([])

  const createBook = async (title) => {
    const response = await fetch(API_BOOKS_ENDPOINT, { method: 'POST' })
    const bookRecorded = response.json()

    setBooks([...books, bookRecorded])
  }

  const deleteBooks = (idForDelete) => {
    setBooks(books.filter(({ id }) => id !== idForDelete))
  }

  const editBook = ({ id, newTitle }) => {
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
