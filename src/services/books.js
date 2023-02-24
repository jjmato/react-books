const API_BOOKS_ENDPOINT = 'http://localhost:3001/books/'

const fetchBooks = async () => {
  return await fetch(API_BOOKS_ENDPOINT)
    .then(resp => resp.json())
}

const postBooks = async (title) => {
  const response = await fetch(API_BOOKS_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ title })
  })
  return await response.json()
}

const updateBook = async (id, title) => {
  const response = await fetch(API_BOOKS_ENDPOINT + id, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ title })
  })
  return await response.json()
}

const deleteBook = async (id) => {
  const response = await fetch(API_BOOKS_ENDPOINT + id, {
    method: 'DELETE'
  })
  return await response.json()
}

export {
  fetchBooks,
  postBooks,
  updateBook,
  deleteBook
}
