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
    <form onSubmit={handleSubmit} className='flex flex-col gap-4 w-full max-w-md'>
      <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required className='px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' />
      <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className='px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' />
      <button type="submit" className='px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors'>Add User</button>
    </form>
  )
}