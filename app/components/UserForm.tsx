'use client'
import { useState } from 'react'

export default function UserForm({ onSuccess }: { onSuccess: () => void }) {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const res = await fetch('/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, name })
    })
    if (res.ok) {
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