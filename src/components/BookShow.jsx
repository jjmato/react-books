function BookShow ({ id, title, onDelete }) {
  const handleClick = () => {
    onDelete(id)
  }

  return (
    <section className='book-show'>
      <h3># {id} - {title}</h3>
      <div className='actions'>
        <button className='delete' onClick={handleClick}>🗑️</button>
      </div>
    </section>
  )
}

export default BookShow
