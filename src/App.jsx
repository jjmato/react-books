import { useContext, useEffect } from 'react'
import './App.css'

import BookCreate from './components/BookCreate'
import BooksList from './components/BooksList'
import BooksContext from './context/books'

function App () {
  const { getBooks } = useContext(BooksContext)

  useEffect(() => {
    getBooks()
  }, [])

  return (
    <main>
      <h1 className='title'>📚 Books... </h1>
      <BooksList />
      <BookCreate />

    </main>
  )
}

export default App
