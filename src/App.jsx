import { useState } from 'react'
import './App.css'

import BookCreate from './components/BookCreate'

function App () {
  const [books, setBooks] = useState([])

  const createBook = (title) => {
    setBooks([...books, { title }])
  }

  return (
    <main>
      <h1>📚 Books... </h1>
      <BookCreate onCreate={createBook} />

      <ul>
        {books.map((book, index) => <li key={index}>{book.title}</li>)}
      </ul>

    </main>
  )
}

export default App
