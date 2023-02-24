import useBooksContext from '../hooks/use-books-context'
import BookShow from './BookShow'

function BooksList () {
  const { books } = useBooksContext()

  return (
    <ul className='book-list'>
      {books.map((book) => <BookShow role='listitem' key={book.id} {...book} />)}
    </ul>
  )
}

export default BooksList
