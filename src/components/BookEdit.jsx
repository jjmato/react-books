import { useState } from 'react'

function BookEdit ({ id, title, onEdit }) {
  const [newTitle, setNewTitle] = useState(title)

  const handleChange = (event) => {
    setNewTitle(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    onEdit({ id, newTitle })
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
