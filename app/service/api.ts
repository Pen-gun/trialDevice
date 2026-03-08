export async function createUser(email: string, name: string) {
  const res = await fetch('/api/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, name })
  })
  return res.ok
}

export async function getUsers() {
  const res = await fetch('/api/users')

  if (!res.ok) {
    throw new Error('Failed to fetch users')
  }

  const data = await res.json()
  return data
}