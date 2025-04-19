'use client' // Mark as client component

import { useEffect, FC } from 'react'
import TerminalDisplay from '@/components/TerminalDisplay'

const Home: FC = () => {
  useEffect(() => {}, [])

  return (
    <div className='relative bg-white min-h-screen p-8'>
      <TerminalDisplay />

      <div className='max-w-xl mx-auto'>
        <h2 className='text-3xl font-bold mb-6 text-black'>
          Build Chronicles{' '}
        </h2>
        <ul className='space-y-6'>
          <li>
            <a
              href='/blog/why-am-i-doing-this'
              className='bg-[var(--highlight-bg)] text-[var(--highlight-text)] px-2 py-1 rounded text-sm hover:brightness-95'
            >
              Why Am I Doing This? (new)
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Home
