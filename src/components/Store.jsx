import { Link } from 'react-router-dom'
import '../../public/styleSheets/home-style.css'

const Store = ({ store }) => {
  return (
    <>
      <Link className="store-link" to={`/stores/${store.id}`}>
        <div className="store-card default">
          <div className="store-card-inner">
            <div className="store-card-header">
              <h2 className="store-card-title">{store.name}</h2>
            </div>

            <div className="store-card-content">
              <div className="store-image-container">
                <img
                  src={`http://localhost:3000${store.image}`}
                  alt={`${store.name} store`}
                  className="store-image"
                />
              </div>
            </div>

            <div className="store-card-footer">
              <div className="opening-time">
                <p>🕛 {store.openTime}</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  )
}

export default Store
