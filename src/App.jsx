import { useState } from 'react'
import './App.css'
import List from './List'

function App() {
  const [users, setUsers] = useState([{
    name: 'Sela',
    count: 0
  }])

  const addUser = () => {
    let newUser = {
      name: `Sela${Math.floor(Math.random() * 20)}`,
      count: 0
    }
    setUsers([...users, newUser])
  }

  const handleCount = username => {
    let temp = [...users]
    let i = temp.findIndex(u => u.name == username)
    if (!i)
      return setUsers(temp)
    temp[i].count += 1
    setUsers(temp)
  }

  return (
    <>
      {users.forEach(u => (
        <>
          <List
            name={u.name}
            count={u.count}
            handleCount={handleCount}
          ></List>
        </>
      ))}

      <button onClick={addUser}>Add user!</button>
    </>
  )
}

export default App
