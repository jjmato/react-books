import { useState } from 'react'
import './App.css'

import BookCreate from './components/BookCreate'

function App () {
  const [books, setBooks] = useState([])

  const createBook = (title) => {
    const id = Math.round(Math.random() * 9999)
    setBooks([...books, { id, title }])
  }

  return (
    <main>
      <h1>📚 Books... </h1>
      <BookCreate onCreate={createBook} />

      <ul>
        {books.map((book) => <li key={book.id}>{book.title}</li>)}
      </ul>

    </main>
  )
}

export default App
