import { useEffect, useState } from 'react'
import './App.css'
import AddPost from './components/AddPost'
import Posts from './components/Posts'
import Login from './components/Login'

function App() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [posts, setPosts] = useState([])
  const [error, setError] = useState(false)
  const [showLogin, setShowLogin] = useState(true)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [anon, setAnon] = useState(Boolean)
  const [users, setUsers] = useState([{
    username: 'Sela',
    password: 'Sela2001*',
  }])

  useEffect(() => {
    const ld = JSON.parse(localStorage.getItem('loginData'))
    if (!ld) return
    setShowLogin(ld.showLogin)
  }, [])

  return (
    <div>
      <h1
        className='font-black text-4xl mt-12 text-emerald-600 text-center'>Sela's Blog</h1>

      {showLogin ? (
        <div id="login" className='mt-12 w-full transition-all'>
          <Login
            users={users}
            setUsers={setUsers}
            username={username}
            setUsername={setUsername}
            password={password}
            setPassword={setPassword}
            error={error}
            setError={setError}
            setShowLogin={setShowLogin}
          />
        </div>
      ) : (
        <div id="blog" className='mt-12 ml-5 md:flex transition-all'>
          <AddPost
            title={title}
            setTitle={setTitle}
            content={content}
            setContent={setContent}
            posts={posts}
            setPosts={setPosts}
            error={error}
            setError={setError}
            anon={anon}
            setAnon={setAnon}
          />
          <Posts
            posts={posts}
          />
        </div>
      )}
    </div>
  )
}

export default App
