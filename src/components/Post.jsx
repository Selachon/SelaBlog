const Post = ({ post }) => {
  const formatDate = (date) => {
    const newDate = new Date(parseInt(date))
    return newDate.toLocaleString('es-CO')
  }
  return (
    <div id="blog-post" className="mb-4 bg-emerald-200 pb-3 w-auto mr-10 rounded-md">
      <h2 className="font-semibold text-lg bg-emerald-400 rounded-md px-3 py-1 text-black mb-2">{post.title}</h2>

      <p className="px-3"><b className="text-emerald-800">|</b> {post.content}</p>
      <p id="author" className="text-right px-5 italic font-semibold">Posted by <a className="font-bold text-emerald-900">{post.name}</a></p>
      <p id="posted" className="text-right px-5 italic text-emerald-700 font-semibold text-xs">{formatDate(post.date)}</p>
    </div>
  )
}
export default Post