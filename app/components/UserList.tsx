'use client'
import { useEffect, useState } from 'react'

export default function UserList({ refresh }: { refresh: number }) {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('/api/users').then(r => r.json()).then(setUsers)
  }, [refresh])

  return (
    <div>
      <h2>Users:</h2>
      {users.map((u: any) => <p key={u.id}>{u.email} - {u.name}</p>)}
    </div>
  )
}