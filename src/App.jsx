import { useEffect, useState } from 'react'
import './App.css'

import BookCreate from './components/BookCreate'
import BooksList from './components/BooksList'

const API_BOOKS_ENDPOINT = 'http://localhost:3001/books'

const fetchBooks = async () => {
  return await fetch(API_BOOKS_ENDPOINT)
    .then(resp => resp.json())
}

const postBooks = async (title) => {
  const response = await fetch(API_BOOKS_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ title })
  })
  return await response.json()
}

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
