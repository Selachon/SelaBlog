import { useState } from 'react'
import './App.css'
import AddPost from './components/AddPost'
import Posts from './components/Posts'

function App() {
  const [name, setName] = useState('')
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [posts, setPosts] = useState([])
  const [error, setError] = useState(false)

  return (
    <div>
      <h1
        className='font-black text-4xl mt-12 ml-12 text-emerald-600 text-center'>Sela's Blog</h1>

      <div id="blog" className='mt-12 ml-5 md:flex'>
        <AddPost
          name={name}
          setName={setName}
          title={title}
          setTitle={setTitle}
          content={content}
          setContent={setContent}
          posts={posts}
          setPosts={setPosts}
          error={error}
          setError={setError}
        />
        <Posts
          posts={posts}
        />
      </div>
    </div>
  )
}

export default App
