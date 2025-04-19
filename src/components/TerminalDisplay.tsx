'use client' // Required for hooks

import React, { useState, useEffect, FC } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

// Constants for the terminal text and animation speed
const FULL_TEXT_1 = '> Hello'
const FULL_TEXT_2 = '> My name is Rajiv'
const FULL_TEXT_3 = '> This is my digital playground '
const FULL_TEXT_4 =
  '> Here I will be launching an MVP (minimum viable product) every two weeks in order to find Product Market Fit & become a better programmer'
const FULL_TEXT_5 = '> I will do this every two weeks until I hit $10k MRR'

const TYPING_SPEED = 50 // Milliseconds per character
const DELAY_BETWEEN_LINES = 200 // Milliseconds delay

const TerminalDisplay: FC = () => {
  const [line1, setLine1] = useState('')
  const [line2, setLine2] = useState('')
  const [line3, setLine3] = useState('')
  const [line4, setLine4] = useState('')
  const [line5, setLine5] = useState('')
  const [showCursor, setShowCursor] = useState(false)

  const pathname = usePathname()
  const isHomepage = pathname === '/'

  useEffect(() => {
    let charIndex = 0
    let currentLine = 1
    let timeoutId: NodeJS.Timeout | null = null

    const typeChar = () => {
      // Logic for typing each line (same as before)
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

    // Reset state and start animation on mount
    setLine1('')
    setLine2('')
    setLine3('')
    setLine4('')
    setLine5('')
    setShowCursor(false)
    if (timeoutId) clearTimeout(timeoutId) // Clear previous timeout if any
    timeoutId = setTimeout(typeChar, 500)

    // Cleanup function to clear timeout on unmount
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
    }
  }, [])

  const terminalContent = (
    <div
      className={`bg-[var(--terminal-bg)] text-[var(--terminal-text)] p-4 rounded-md font-mono text-base mb-12 max-w-3xl mx-auto min-h-[150px] ${
        !isHomepage ? 'cursor-pointer' : ''
      }`}
    >
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
  )

  // Conditionally wrap with Link if not on the homepage
  return isHomepage ? terminalContent : <Link href='/'>{terminalContent}</Link>
}

export default TerminalDisplay
