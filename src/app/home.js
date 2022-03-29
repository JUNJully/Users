import React from 'react'
import { useEffect, useState } from 'react'
import UserCard from './userCard'
import SortList from './sortBlock'
import Loader from './loader'

function Home() {
  const [users, setUsers] = useState()
  const [error, setError] = useState(null)
  const [load, setLoad] = useState(true)

  useEffect(async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users?_limit=10")
      const data = await response.json()
      setUsers(data)
      setLoad(false)
    }
    catch
    {
      setError("Что-то пошло не так, попробуйте позже...")
      setLoad(false)
    }

  }, [])

  function sortCity() {
    let arr = Object.assign([], users)
    arr.sort((a, b) => a.address.city > b.address.city ? 1 : -1)
    setUsers(arr)
  }

  function sortName() {
    let arr = Object.assign([], users)
    arr.sort((a, b) => a.name > b.name ? 1 : -1)
    setUsers(arr)
  }
  return (<div className='main'>

    {load ?
      <Loader />
      : users ?
        <div className='mainBlock'>
          <div className='sortList'>
            <SortList city={sortCity} company={sortName} />
          </div>
          <div className='home'>
            <div className='main_list'>
              <h1>Список пользователей</h1>
              <ul>
                {users.map(item => <li key={item.id}><UserCard props={item} /></li>)}
                <li>Найдено {users.length} пользователей</li>
              </ul>
            </div>
          </div>
        </div>
        : <h2>{error}</h2>
    }
  </div>
  )
}

export default Home