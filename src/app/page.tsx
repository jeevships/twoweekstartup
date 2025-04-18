'use client' // Mark as client component

import { useState, useEffect, FC } from 'react'

const FULL_TEXT_1 = '> Hello'
const FULL_TEXT_2 = '> My name is Rajiv'
const FULL_TEXT_3 = '> This is my digital playground '
const FULL_TEXT_4 =
  '> Here I will be launching an MVP (minimum viable product) every two weeks in order to find Product Market Fit & become a better programmer'
const FULL_TEXT_5 =
  '> I will do this every two weeks until I hit $10k MRR, or get a job as a software developer — whichever comes first'

const TYPING_SPEED = 50 // Milliseconds per character
const DELAY_BETWEEN_LINES = 200 // Milliseconds delay

const Home: FC = () => {
  const [line1, setLine1] = useState('')
  const [line2, setLine2] = useState('')
  const [line3, setLine3] = useState('')
  const [line4, setLine4] = useState('')
  const [line5, setLine5] = useState('')
  const [showCursor, setShowCursor] = useState(false)
  const [currentDate, setCurrentDate] = useState('') // State for current date

  useEffect(() => {
    let charIndex = 0
    let currentLine = 1
    let timeoutId: NodeJS.Timeout | null = null

    const typeChar = () => {
      if (currentLine === 1) {
        if (charIndex < FULL_TEXT_1.length) {
          setLine1(FULL_TEXT_1.substring(0, charIndex + 1))
          charIndex++
          timeoutId = setTimeout(typeChar, TYPING_SPEED)
        } else {
          charIndex = 0
          currentLine = 2
          timeoutId = setTimeout(typeChar, DELAY_BETWEEN_LINES)
        }
      } else if (currentLine === 2) {
        if (charIndex < FULL_TEXT_2.length) {
          setLine2(FULL_TEXT_2.substring(0, charIndex + 1))
          charIndex++
          timeoutId = setTimeout(typeChar, TYPING_SPEED)
        } else {
          charIndex = 0
          currentLine = 3
          timeoutId = setTimeout(typeChar, DELAY_BETWEEN_LINES)
        }
      } else if (currentLine === 3) {
        if (charIndex < FULL_TEXT_3.length) {
          setLine3(FULL_TEXT_3.substring(0, charIndex + 1))
          charIndex++
          timeoutId = setTimeout(typeChar, TYPING_SPEED)
        } else {
          charIndex = 0
          currentLine = 4
          timeoutId = setTimeout(typeChar, DELAY_BETWEEN_LINES)
        }
      } else if (currentLine === 4) {
        if (charIndex < FULL_TEXT_4.length) {
          setLine4(FULL_TEXT_4.substring(0, charIndex + 1))
          charIndex++
          timeoutId = setTimeout(typeChar, TYPING_SPEED)
        } else {
          charIndex = 0
          currentLine = 5
          timeoutId = setTimeout(typeChar, DELAY_BETWEEN_LINES)
        }
      } else if (currentLine === 5) {
        if (charIndex < FULL_TEXT_5.length) {
          setLine5(FULL_TEXT_5.substring(0, charIndex + 1))
          charIndex++
          timeoutId = setTimeout(typeChar, TYPING_SPEED)
        } else {
          setShowCursor(true)
        }
      }
    }

    // Reset state and start animation
    setLine1('')
    setLine2('')
    setLine3('')
    setLine4('')
    setLine5('')
    setShowCursor(false)
    // Clear any potential leftover timeout before starting a new one
    if (timeoutId) clearTimeout(timeoutId)
    timeoutId = setTimeout(typeChar, 500)

    // --- Start: Set Current Date ---
    const today = new Date()
    // Define options for toLocaleDateString for better type checking
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }
    setCurrentDate(today.toLocaleDateString(undefined, options)) // Format date like "October 26, 2023"
    // --- End: Set Current Date ---

    // Cleanup function
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
    }
  }, [])

  return (
    <div className='relative bg-white min-h-screen p-8'>
      <div className='absolute top-8 right-8 bg-[var(--terminal-bg)] text-[var(--terminal-text)] p-4 rounded-md font-mono text-sm z-10'>
        <p>MRR: $0</p>
        <p>Start Date: April 19, 2025</p>
        <p>Current Date: {currentDate}</p>
        <p>Startups Built: 0</p>
      </div>

      <div className='bg-[var(--terminal-bg)] text-[var(--terminal-text)] p-4 rounded-md font-mono text-base mb-12 max-w-xl mx-auto min-h-[150px]'>
        <p>{line1}</p>
        <p>{line2}</p>
        <p>{line3}</p>
        <p>{line4}</p>
        <p>
          {line5}
          {showCursor && (
            <span className='animate-[blink_1s_step-end_infinite] inline-block w-2 h-4 bg-[var(--terminal-text)] ml-1 align-bottom'></span>
          )}
        </p>
      </div>

      <div className='max-w-xl mx-auto'>
        <h2 className='text-3xl font-bold mb-6 text-black'>
          Build Chronicles{' '}
        </h2>
        <ul className='space-y-6'>
          <li>
            <a
              href='#'
              className='bg-[var(--highlight-bg)] text-[var(--highlight-text)] px-2 py-1 rounded text-sm hover:brightness-95'
            >
              Why Am I Doing This? (new)
            </a>
          </li>
          <li>
            <a
              href='#'
              className='bg-[var(--highlight-bg)] text-[var(--highlight-text)] px-2 py-1 rounded text-sm hover:brightness-95'
            >
              Multi-layered calendars
            </a>
          </li>
          <li>
            <a
              href='#'
              className='bg-[var(--highlight-bg)] text-[var(--highlight-text)] px-2 py-1 rounded text-sm hover:brightness-95'
            >
              The power of defaults
            </a>
          </li>
          <li>
            <a
              href='#'
              className='bg-[var(--highlight-bg)] text-[var(--highlight-text)] px-2 py-1 rounded text-sm hover:brightness-95'
            >
              Banking on status
            </a>
          </li>
          <li>
            <a
              href='#'
              className='bg-[var(--highlight-bg)] text-[var(--highlight-text)] px-2 py-1 rounded text-sm hover:brightness-95'
            >
              Chief Notion Officer
            </a>
          </li>
          <li>
            <a
              href='#'
              className='bg-[var(--highlight-bg)] text-[var(--highlight-text)] px-2 py-1 rounded text-sm hover:brightness-95'
            >
              Is this real life?
            </a>
          </li>
          <li>
            <a
              href='#'
              className='bg-[var(--highlight-bg)] text-[var(--highlight-text)] px-2 py-1 rounded text-sm hover:brightness-95'
            >
              A meta-layer for notes
            </a>
          </li>
          <li>
            <a
              href='#'
              className='bg-[var(--highlight-bg)] text-[var(--highlight-text)] px-2 py-1 rounded text-sm hover:brightness-95'
            >
              Proof of X
            </a>
          </li>
          <li>
            <a
              href='#'
              className='bg-[var(--highlight-bg)] text-[var(--highlight-text)] px-2 py-1 rounded text-sm hover:brightness-95'
            >
              Thoughts on e-commerce (Part 2)
            </a>
          </li>
          <li>
            <a
              href='#'
              className='bg-[var(--highlight-bg)] text-[var(--highlight-text)] px-2 py-1 rounded text-sm hover:brightness-95'
            >
              Thoughts on e-commerce (Part 1)
            </a>
          </li>
          <li>
            <a
              href='#'
              className='bg-[var(--highlight-bg)] text-[var(--highlight-text)] px-2 py-1 rounded text-sm hover:brightness-95'
            >
              AirPods as a platform
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Home
