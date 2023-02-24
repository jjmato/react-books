import { useState } from 'react'

import useBooksContext from '../hooks/use-books-context'

function BookCreate () {
  const [title, setTitle] = useState('')
  const { createBook } = useBooksContext()

  const handleChange = (event) => {
    setTitle(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    createBook(title)
    setTitle('')
  }

  return (
    <section className='book-create'>
      <h3>Add Book</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor='title'>Title</label>
        <input
          name='title' id='title'
          className='input' type='text' value={title} onChange={handleChange}
        />
        <button className='button'>Create!</button>
      </form>
    </section>
  )
}

export default BookCreate
