import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import ReviewsSection from '../components/Review'

const StoreDetails = () => {
  const { id } = useParams()
  const [store, setStore] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    setError(null)
    setStore(null)
    axios
      .get(`http://localhost:3000/stores/${id}`)
      .then((res) => setStore(res.data))
      .catch((err) =>
        setError(err.response?.data?.msg || 'Failed to load store')
      )
  }, [id])

  if (error) return <p style={{ color: 'crimson' }}>{error}</p>
  if (!store) return <p>Loading...</p>

  return (
    <div>
      <h1>{store.name}</h1>

      {store.image && (
        <img
          src={`http://localhost:3000${store.image}`}
          alt={store.name}
          style={{ maxWidth: 400 }}
        />
      )}

      <p>{store.description}</p>
      <p>
        <strong>Open:</strong> {store.openTime}
      </p>

      <h3>Menu</h3>
      <ul>
        {Array.isArray(store.menu) &&
          store.menu.map((item, i) => (
            <li key={i}>
              {item.name} {item.price != null ? `- ${item.price}` : ''}
            </li>
          ))}
      </ul>

      <ReviewsSection storeId={store.id} />
    </div>
  )
}

export default StoreDetails
