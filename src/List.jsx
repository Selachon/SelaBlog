const List = ({ name, count, handleCount }) => {
  return (
    <>
      <p>{name} | {count}</p>
      <button onClick={handleCount(name)}>Add to count!</button>
    </>
  )
}
export default List