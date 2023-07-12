import { useState } from "react"
import Error from "./Error"
import mongoose from "mongoose"
import User from "../Schemas/User.js"

const Login = ({ users, setUsers, username, setUsername, password, setPassword, error, setError, setShowLogin }) => {
  const [errorMessage, setErrorMessage] = useState('')

  console.log(mongoose)

  function logIn() {
    if (!username || !password) {
      setErrorMessage('Debes llenar ambos campos')
      return setError(true)
    }
    const usersCopy = [...users]
    const validUser = usersCopy.find(user => user.username == username)
    if (!validUser) {
      setErrorMessage('Usuario no encontrado')
      return setError(true)
    }
    const validLogin = usersCopy.find(user => user.username == username && user.password == password)
    if (!validLogin) {
      setErrorMessage('Clave incorrecta')
      return setError(true)
    }
    setError(false)
    setErrorMessage('')
    setUsername('')
    setPassword('')
    setShowLogin(false)
  }

  return (
    <div className="block">
      <div className='mt-2 w-1/2 m-auto'>
        <h2 className="font-semibold text-2xl mb-4 text-emerald-500 text-center">Ingresa al blog</h2>
        <form className="mr-5 bg-emerald-100 shadow-gray-300 shadow-md rounded-lg p-3 hover:shadow-gray-400 transition-all">
          <div>
            <label htmlFor="login-username" className="block font-semibold">Nombre de usuario</label>
            <input className="block p-1 pl-2 w-full mb-3 rounded-md border-2 border-emerald-200" placeholder="Tu nombre de usuario" type="text" name="name" id="login-username" value={username} onChange={e => setUsername(e.target.value)} />
          </div>
          <div>
            <label htmlFor="login-pass" className="block font-semibold">Clave</label>
            <input className="block p-1 pl-2 w-full mb-3 rounded-md border-2 border-emerald-200" placeholder="Contraseña" type="password" name="title" id="login-pass" value={password} onChange={e => setPassword(e.target.value)} />
          </div>
          <input className="bg-emerald-600 my-3 p-2 w-full rounded-lg text-white font-semibold hover:bg-emerald-500 transition-all cursor-pointer" type="button" id="log-in" value="Ingresar" onClick={logIn} />
        </form>
        {error && <Error errorMessage={errorMessage} />}
      </div>
    </div>
  )
}
export default Login