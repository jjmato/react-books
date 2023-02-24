import { useContext } from 'react'

import BooksContext from '../context/books'
import BookShow from './BookShow'

function BooksList () {
  const { books } = useContext(BooksContext)

  return (
    <ul className='book-list'>
      {books.map((book) => <BookShow role='listitem' key={book.id} {...book} />)}
    </ul>
  )
}

export default BooksList
