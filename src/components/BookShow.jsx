import { useState } from 'react'

import BookEdit from './BookEdit'

function BookShow ({ id, title, onDelete, onEdit }) {
  const [editing, setEditing] = useState(false)

  const handleDeleteClick = () => {
    onDelete(id)
  }

  const handleEditClick = () => {
    setEditing(!editing)
  }

  const handleEdited = (newBook) => {
    onEdit(newBook)
    setEditing(false)
  }

  let content = <h3># {id} - {title}</h3>
  if (editing) {
    content = <BookEdit {...{ id, title }} onEdit={handleEdited} />
  }

  return (
    <section className='book-show'>
      <img src={`https://picsum.photos/seed/${title}/300/200`} alt={`book cover of ${title}`} />
      {content}
      <div className='actions'>
        <button className='delete' onClick={handleDeleteClick}>Delete 🗑️</button>
        <button className='edit' onClick={handleEditClick}>Edit ✏️</button>
      </div>
    </section>
  )
}

export default BookShow
