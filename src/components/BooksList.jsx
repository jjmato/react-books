import BookShow from './BookShow'

function BooksList ({ books }) {
  return (
    <ul className='book-list'>
      {books.map((book) => <BookShow role='listitem' key={book.id} {...book} />)}
    </ul>
  )
}

export default BooksList
