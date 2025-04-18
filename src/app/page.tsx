'use client' // Mark as client component

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Home() {
  const [line1, setLine1] = useState('')
  const [line2, setLine2] = useState('')
  const [line3, setLine3] = useState('')
  const [showCursor, setShowCursor] = useState(false)

  const typingSpeed = 50 // Milliseconds per character
  const delayBetweenLines = 200 // Milliseconds delay

  useEffect(() => {
    const fullText1 = '> Hello'
    const fullText2 = '> My name is Rajiv'
    const fullText3 = '> This is my lifelog and digital playground '

    let charIndex = 0
    let currentLine = 1
    let timeoutId: NodeJS.Timeout | null = null

    const typeChar = () => {
      if (currentLine === 1) {
        if (charIndex < fullText1.length) {
          setLine1(fullText1.substring(0, charIndex + 1))
          charIndex++
          timeoutId = setTimeout(typeChar, typingSpeed)
        } else {
          charIndex = 0
          currentLine = 2
          timeoutId = setTimeout(typeChar, delayBetweenLines)
        }
      } else if (currentLine === 2) {
        if (charIndex < fullText2.length) {
          setLine2(fullText2.substring(0, charIndex + 1))
          charIndex++
          timeoutId = setTimeout(typeChar, typingSpeed)
        } else {
          charIndex = 0
          currentLine = 3
          timeoutId = setTimeout(typeChar, delayBetweenLines)
        }
      } else if (currentLine === 3) {
        if (charIndex < fullText3.length) {
          setLine3(fullText3.substring(0, charIndex + 1))
          charIndex++
          timeoutId = setTimeout(typeChar, typingSpeed)
        } else {
          setShowCursor(true)
        }
      }
    }

    // Reset state and start animation
    setLine1('')
    setLine2('')
    setLine3('')
    setShowCursor(false)
    // Clear any potential leftover timeout before starting a new one
    if (timeoutId) clearTimeout(timeoutId)
    timeoutId = setTimeout(typeChar, 500)

    // Cleanup function
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
    }
  }, [])

  return (
    <div className='bg-white min-h-screen p-8'>
      <div className='bg-[var(--terminal-bg)] text-[var(--terminal-text)] p-4 rounded-md font-mono text-sm mb-12 max-w-xl mx-auto min-h-[100px]'>
        <p>{line1}</p>
        <p>{line2}</p>
        <p>
          {line3}
          {showCursor && (
            <span className='animate-blink inline-block w-2 h-4 bg-[var(--terminal-text)] ml-1 align-bottom'></span>
          )}
        </p>
      </div>

      <div className='max-w-xl mx-auto'>
        <h2 className='text-2xl font-bold mb-6 text-black'>Thoughts</h2>
        <ul className='space-y-6'>
          <li>
            <a
              href='#'
              className='bg-[var(--highlight-bg)] text-[var(--highlight-text)] px-2 py-1 rounded text-sm hover:brightness-95'
            >
              The case against conversational interfaces (new)
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
