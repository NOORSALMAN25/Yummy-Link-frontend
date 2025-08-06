import { useState, useEffect } from 'react'
import axios from 'axios'

import '../../public/styleSheets/reviews-style.css'

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
    <div className="reviews-wrap">
      <h2 className="reviews-title">Reviews</h2>
      {loading && <p className="reviews-status">Loading...</p>}
      {error && <p>{error}</p>}

      {!loading && reviews.length === 0 && (
        <p className="reviews-empty">No reviews yet.</p>
      )}
      <div className="reviews-list">
        {reviews.map((rev) => (
          <div key={rev._id} className="review-card">
            <header className="review-header">
              <strong className="review-author">{`By ${rev.name}`}</strong>
              <div className="review-stars">
                {Array.from({ length: rev.rating }, (_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>
            </header>

            <p className="review-text">{rev.comment}</p>
            <button
              className="btn btn-danger"
              onClick={() => handleDelete(rev._id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      <h3 className="form-title">Add Comment</h3>
      <form className="review-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="User name"
            required
          />

          <div className="rating-field">
            <label htmlFor="rating">Rating (0–5)</label>
            <input
              id="rating"
              type="number"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              min="0"
              max="5"
              required
              className="input input-small "
            />
          </div>
        </div>

        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Comment"
          required
          rows={4}
          className="textarea"
        />

        <button type="submit" disabled={loading} className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  )
}

export default Review
