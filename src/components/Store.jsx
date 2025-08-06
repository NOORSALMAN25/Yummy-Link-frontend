import { Link } from 'react-router-dom'

const Store = ({ store }) => {
  return (
    <>
      <div>
        <h2>
          <Link to={`/stores/${store.id}`}>{store.name}</Link>
        </h2>
        <img
          src={`http://localhost:3000${store.image}`}
          alt={`${store.name} store`}
        />
        <p>Opening Time: {store.openTime}</p>
      </div>
    </>
  )
}

export default Store
