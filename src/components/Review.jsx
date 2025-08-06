import { useState, useEffect } from 'react'
import axios from 'axios'

const Review = ({ storeId }) => {
  const [reviews, setReviews] = useState([])
  const [username, setUsername] = useState('')
  const [comment, setComment] = useState('')
  const [rating, setRating] = useState(0)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!storeId) return
    setLoading(true)
    setError(null)
    axios
      .get(`http://localhost:3000/stores/${storeId}/reviews`)
      .then((res) => setReviews(res.data))
      .catch((err) => setError('Failed to load reviews'))
      .finally(() => setLoading(false))
  }, [storeId])
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!username || !comment || rating < 0 || rating > 5) {
      alert('Please fill all fields correctly')
      return
    }

    try {
      setLoading(true)
      setError(null)
      await axios.post(`http://localhost:3000/stores/${storeId}/reviews`, {
        name: username,
        comment,
        rating: Number(rating)
      })
      const updated = await axios.get(
        `http://localhost:3000/stores/${storeId}/reviews`
      )
      setReviews(updated.data)
      setUsername('')
      setComment('')
      setRating(0)
    } catch (err) {
      setError('Failed to add review')
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `http://localhost:3000/stores/${storeId}/reviews/${id}`
      )
      setReviews(reviews.filter((r) => r._id !== id))
    } catch (err) {
      alert('Failed to delete review')
    }
  }

  return (
    <div>
      <h2>Reviews</h2>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {!loading && reviews.length === 0 && <p>No reviews yet.</p>}

      {reviews.map((rev) => (
        <div key={rev._id}>
          <strong>{`By ${rev.name}`}</strong>
          <div>
            {Array.from({ length: rev.rating }, (_, i) => (
              <span key={i}>⭐</span>
            ))}
          </div>
          <p>{rev.comment}</p>
          <button onClick={() => handleDelete(rev._id)}>Delete</button>
        </div>
      ))}

      <h3>Add Comment</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="User name"
          required
        />
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Comment"
          required
          rows={3}
        />
        <input
          type="number"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          min="0"
          max="5"
          required
        />
        <button type="submit" disabled={loading}>
          Submit
        </button>
      </form>
    </div>
  )
}

export default Review
