'use client' // Error components must be Client Components

import { useEffect } from 'react'

export default function Error({ error, reset }: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Logged route error:', error) // Log to service
  } , [error])

  return (
    <div className="flex flex-col items-center justify-center p-6 text-center">
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  )
}
