'use client' // Required for useState and useEffect

import React, { useState, useEffect, FC } from 'react'

// --- Copied from homepage ---
const FULL_TEXT_1 = '> Hello'
const FULL_TEXT_2 = '> My name is Rajiv'
const FULL_TEXT_3 = '> This is my digital playground '
const FULL_TEXT_4 =
  '> Here I will be launching an MVP (minimum viable product) every two weeks in order to find Product Market Fit & become a better programmer'
const FULL_TEXT_5 = '> I will do this every two weeks until I hit $10k MRR'

const TYPING_SPEED = 50 // Milliseconds per character
const DELAY_BETWEEN_LINES = 200 // Milliseconds delay
// --- End Copied ---

const BlogPost: FC = () => {
  // Use FC type
  // --- Copied from homepage ---
  const [line1, setLine1] = useState('')
  const [line2, setLine2] = useState('')
  const [line3, setLine3] = useState('')
  const [line4, setLine4] = useState('')
  const [line5, setLine5] = useState('')
  const [showCursor, setShowCursor] = useState(false)

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

    // Cleanup function
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
    }
  }, [])
  // --- End Copied ---

  return (
    <div className='min-h-screen bg-white p-8'>
      {/* Copied Terminal Display */}
      <div className='bg-[var(--terminal-bg)] text-[var(--terminal-text)] p-4 rounded-md font-mono text-base mb-12 max-w-3xl mx-auto min-h-[150px]'>
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

      {/* Blog Content - Adjusted styling */}
      <article className='max-w-3xl mx-auto'>
        {' '}
        {/* Removed prose, adjusted max-width */}
        <h1 className='text-4xl font-bold mb-4 text-black'>
          Why Am I Doing This?
        </h1>{' '}
        {/* Adjusted styles */}
        <p className='text-gray-500 text-sm mb-8'>
          {' '}
          {/* Adjusted styles */}
          Published on:{' '}
          {new Date().toLocaleDateString(undefined, {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </p>
        <p className='mb-6 text-gray-700 leading-relaxed'>
          {' '}
          {/* Adjusted styles */}
          This is the beginning of a journey. A chronicle of building, learning,
          and striving towards a goal. Why launch an MVP every two weeks? Why
          aim for $10k MRR or a software development job?
        </p>
        <p className='mb-6 text-gray-700 leading-relaxed'>
          {' '}
          {/* Adjusted styles */}
          The core idea is simple: rapid iteration and consistent learning.
          Building in public forces accountability and provides valuable
          feedback. Each two-week cycle is a sprint, a focused effort to create
          something tangible, test an idea, and hone programming skills.
        </p>
        {/* Section Heading 1 - Styled like screenshot */}
        <div className='flex items-baseline mt-12 mb-4'>
          <span className='text-gray-400 text-sm font-mono mr-4 w-8'>01</span>
          <h2 className='text-lg font-semibold uppercase tracking-wider text-gray-800'>
            The Challenge
          </h2>
        </div>
        <p className='mb-6 text-gray-700 leading-relaxed'>
          {' '}
          {/* Adjusted styles */}
          The path won't be easy. There will be failures, pivots, and moments of
          doubt. But the commitment is to the process, to the relentless pursuit
          of product-market fit and technical mastery. This blog will document
          the highs and lows, the successes and the setbacks.
        </p>
        {/* Section Heading 2 - Styled like screenshot */}
        <div className='flex items-baseline mt-12 mb-4'>
          <span className='text-gray-400 text-sm font-mono mr-4 w-8'>02</span>
          <h2 className='text-lg font-semibold uppercase tracking-wider text-gray-800'>
            Join the Journey
          </h2>
        </div>
        <p className='mb-6 text-gray-700 leading-relaxed'>
          {' '}
          {/* Adjusted styles */}
          Follow along as I navigate the challenges of bootstrapping, product
          development, and the search for that elusive $10k MRR milestone or the
          next career step. Let the build chronicles begin!
        </p>
      </article>
    </div>
  )
}

export default BlogPost
