import { useContext, useState } from 'react'

import BooksContext from '../context/books'

function BookEdit ({ id, title, onSubmit }) {
  const [newTitle, setNewTitle] = useState(title)
  const { editBook } = useContext(BooksContext)

  const handleChange = (event) => {
    setNewTitle(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit()
    editBook({ id, newTitle })
  }

  return (
    <form className='book-edit' onSubmit={handleSubmit}>
      <label htmlFor='title'>Title</label>
      <input type='text' id='title' className='input' value={newTitle} onChange={handleChange} />
      <button className='button is-primary'> 💾 Save! </button>
    </form>
  )
}

export default BookEdit
