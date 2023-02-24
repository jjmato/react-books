import BookShow from './BookShow'

function BooksList ({ books, onDelete }) {
  return (
    <ul className='book-list'>
      {books.map((book) => <BookShow role='listitem' key={book.id} {...book} onDelete={onDelete} />)}
    </ul>
  )
}

export default BooksList
