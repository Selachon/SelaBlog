import Error from "./Error"

const AddPost = ({
  name, setName, title,
  setTitle, content,
  setContent, posts, setPosts,
  error, setError }) => {

  const addPost = () => {
    if (!title || !content) {
      return setError(true)
    }
    setPosts([...posts, {
      name: name || 'Anónimo',
      title: title,
      content: content,
      date: Date.now().toString(),
      id: posts.length
    }])
    setError(false)
    setName('')
    setTitle('')
    setContent('')
  }

  return (
    <div className='md:w-1/2 lg:w-2/5'>
      <h2 className="font-semibold text-2xl mb-4 text-emerald-500 text-center">Añadir al blog</h2>
      <form className="mr-5 bg-emerald-100 shadow-gray-300 shadow-md rounded-lg p-3 hover:shadow-gray-400 transition-all">
        <div>
          <label htmlFor="post-name" className="block font-semibold">Nombre</label>
          <input className="block p-1 pl-2 w-full mb-3 rounded-md border-2 border-emerald-200" placeholder="Tu nombre de usuario o en blanco" type="text" name="name" id="post-name" value={name} onChange={e => setName(e.target.value)} />
        </div>
        <div>
          <label htmlFor="post-title" className="block font-semibold">Título</label>
          <input className="block p-1 pl-2 w-full mb-3 rounded-md border-2 border-emerald-200" placeholder="Título de tu post" type="text" name="title" id="post-title" value={title} onChange={e => setTitle(e.target.value)} />
        </div>
        <textarea className="block w-full mb-3 p-1 pl-2 rounded-md border-2 border-emerald-200" placeholder="Cuéntanos algo" type="text" name="content" id="post-content" value={content} onChange={e => setContent(e.target.value)} />

        <input className="bg-emerald-600 my-3 p-2 w-full rounded-lg text-white font-semibold hover:bg-emerald-500 transition-all cursor-pointer" type="button" id="post-post" value="Añadir" onClick={addPost} />
      </form>
      {error && <Error/>}
    </div>
  )
}
export default AddPost