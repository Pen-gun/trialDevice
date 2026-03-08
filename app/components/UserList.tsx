'use client'
import { useEffect, useState } from 'react'
import { getUsers } from '@/app/service/api'

export default function UserList({ refresh }: { refresh: number }) {
  const [users, setUsers] = useState<any[]>([])

  useEffect(() => {
    async function loadUsers() {
      const data = await getUsers()
      setUsers(data)
    }

    loadUsers()
  }, [refresh])

  return (
    <div>
      <h2>Users:</h2>
      {users.map((u) => (
        <p key={u.id}>
          {u.email} - {u.name}
        </p>
      ))}
    </div>
  )
}