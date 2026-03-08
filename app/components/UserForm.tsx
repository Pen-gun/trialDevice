'use client'
import { useState } from 'react'
import { createUser } from '@/app/service/api'

export default function UserForm({ onSuccess }: { onSuccess: () => void }) {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (await createUser(email, name)) {
      setEmail('')
      setName('')
      onSuccess()
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <button type="submit">Add User</button>
    </form>
  )
}