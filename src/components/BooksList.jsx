import BookShow from './BookShow'

function BooksList ({ books, onDelete, onEdit }) {
  return (
    <ul className='book-list'>
      {books.map((book) => <BookShow role='listitem' key={book.id} {...book} onDelete={onDelete} onEdit={onEdit} />)}
    </ul>
  )
}

export default BooksList
