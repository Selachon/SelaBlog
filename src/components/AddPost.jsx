import Error from "./Error"

const AddPost = ({
  name, setName, title,
  setTitle, content,
  setContent, posts, setPosts,
  error, setError, anon, setAnon }) => {

  const addPost = () => {
    if (!title || !content) {
      return setError(true)
    }
    if (anon) {
      setPosts([...posts, {
        name: 'Anónimo',
        title,
        content,
        date: Date.now().toString(),
        id: posts.length
      }])
    } else setPosts([...posts, {
      name: JSON.parse(localStorage.getItem('loginData')).name,
      title,
      content,
      date: Date.now().toString(),
      id: posts.length
    }])
    setError(false)
    setTitle('')
    setContent('')
  }

  return (
    <div className='md:w-1/2 lg:w-2/5'>
      <h2 className="font-semibold text-2xl mb-4 text-emerald-500 text-center">Añadir al blog</h2>
      <form className="mr-5 bg-emerald-100 shadow-gray-300 shadow-md rounded-lg p-3 hover:shadow-gray-400 transition-all">
        {/* <div>
          <label htmlFor="post-name" className="block font-semibold">Nombre</label>
          <input className="block p-1 pl-2 w-full mb-3 rounded-md border-2 border-emerald-200" placeholder="Tu nombre de usuario o en blanco" type="text" name="name" id="post-name" value={name} onChange={e => setName(e.target.value)} />
        </div> */}
        <div>
          <label htmlFor="post-title" className="block font-semibold">Título</label>
          <input className="block p-1 pl-2 w-full mb-3 rounded-md border-2 border-emerald-300" placeholder="Título de tu post" type="text" name="title" id="post-title" value={title} onChange={e => setTitle(e.target.value)} />
        </div>
        <textarea className="block w-full mb-3 p-1 pl-2 rounded-md border-2 border-emerald-300" placeholder="Cuéntanos algo" type="text" name="content" id="post-content" value={content} onChange={e => setContent(e.target.value)} />

        <div className="border-emerald-300 border-2 py-2 px-3 rounded-md">
          <input type="checkbox" name="anonymous" id="post-anonymous" />
          <label className="ml-2" id="post-anonymous-label" onClick={() => {
            const checkbox = document.getElementById('post-anonymous')
            if (checkbox.checked) {
              checkbox.checked = false
              setAnon(false)
            } else if (!checkbox.checked) {
              checkbox.checked = true
              setAnon(true)
            }
          }}>Enviar como anónimo</label>
        </div>

        <input className="bg-emerald-600 my-3 p-2 w-full rounded-lg text-white font-semibold hover:bg-emerald-500 transition-all cursor-pointer" type="button" id="post-post" value="Añadir" onClick={addPost} />
      </form>
      {error && <Error errorMessage={'Debes llenar los campos de título y contenido'} />}
    </div>
  )
}
export default AddPost