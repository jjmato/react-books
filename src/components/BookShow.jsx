import { useState } from 'react'

import BookEdit from './BookEdit'

function BookShow ({ id, title, onDelete }) {
  const [editing, setEditing] = useState(false)

  const handleDeleteClick = () => {
    onDelete(id)
  }

  const handleEditClick = () => {
    setEditing(!editing)
  }

  let content = <h3># {id} - {title}</h3>
  if (editing) {
    content = <BookEdit />
  }

  return (
    <section className='book-show'>
      {content}
      <div className='actions'>
        <button className='delete' onClick={handleDeleteClick}>Delete 🗑️</button>
        <button className='edit' onClick={handleEditClick}>Edit ✏️</button>
      </div>
    </section>
  )
}

export default BookShow
