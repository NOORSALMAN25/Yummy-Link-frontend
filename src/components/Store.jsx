const Store = ({ store }) => {
  return (
    <>
      <div>
        <h2>{store.name}</h2>
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
