import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import ReviewsSection from '../components/Review'
import '../../public/styleSheets/storeDetails-style.css'

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

  if (error) return <p className="error-text">{error}</p>
  if (!store) return <p className="loading-text">Loading...</p>

  return (
    <div className="center">
      <div className="details-page">
        <section className="hero">
          <div className="hero-inner">
            <h1 className="store-name">{store.name}</h1>
            <p className="store-open">Open: {store.openTime}</p>
          </div>
        </section>

        <section className="content">
          <div className="media">
            {store.image && (
              <img
                src={`http://localhost:3000${store.image}`}
                alt={store.name}
                className="store-image"
              />
            )}
          </div>

          <div className="info">
            <h2 className="section-title">About</h2>
            <p className="store-desc">{store.description}</p>
          </div>
        </section>

        <section className="menu">
          <h2 className="section-title">Menu</h2>
          <ul className="menu-grid">
            {Array.isArray(store.menu) &&
              store.menu.map((item, i) => (
                <li key={i} className="menu-card">
                  <div className="menu-header">
                    <span className="menu-name">{item.name}</span>
                    {item.price != null && (
                      <span className="menu-price">{`${item.price} BD`}</span>
                    )}
                  </div>
                  {item.description && (
                    <p className="menu-desc">{item.description}</p>
                  )}
                </li>
              ))}
          </ul>
        </section>

        <section className="reviews">
          <ReviewsSection storeId={store.id} />
        </section>
      </div>
    </div>
  )
}
export default StoreDetails
