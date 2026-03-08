'use client'
import { useState } from 'react'
import UserForm from './components/UserForm'
import UserList from './components/UserList'

export default function Home() {
  const [refresh, setRefresh] = useState(0)

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4">
      <UserForm onSuccess={() => setRefresh(r => r + 1)} />
      <UserList refresh={refresh} />
    </main>
  )
} 