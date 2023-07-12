const Error = ({ errorMessage }) => {
  return (
    <div>
      <h2 className="block text-center bg-red-500 text-white p-3 mr-5 my-5 rounded-lg w-auto">{ errorMessage }</h2>
    </div>
  )
}
export default Error