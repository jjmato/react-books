import { useState } from 'react'
import './App.css'

import BookCreate from './components/BookCreate'
import BooksList from './components/BooksList'

function App () {
  const [books, setBooks] = useState([])

  const createBook = (title) => {
    const id = Math.round(Math.random() * 9999)
    setBooks([...books, { id, title }])
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
