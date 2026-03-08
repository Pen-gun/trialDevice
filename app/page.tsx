'use client'
import { useState } from 'react'
import UserForm from './components/UserForm'
import UserList from './components/UserList'

export default function Home() {
  const [refresh, setRefresh] = useState(0)

  return (
    <main>
      <UserForm onSuccess={() => setRefresh(r => r + 1)} />
      <UserList refresh={refresh} />
    </main>
  )
}