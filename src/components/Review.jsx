const Review = ({ props }) => {
  return (
    <>
<div>
  <h2>Reviews</h2>
<ul> {}</ul>

</div>
    <div className="commentBox">
    <h2>Add A Comment</h2>
      <form>
        <label>Username</label>
        <input type="text" />
        <label>Comment</label>
        <input type="textarea" />
        <label>Rating</label>
        <input type="range" min={1} max={5} />
        <button type="submit">Submit</button>
      </form>
      </div>
    </>
  )
}

export default Review
