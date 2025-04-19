'use client'

import React from 'react'
import TerminalDisplay from '@/components/TerminalDisplay'

type SectionHeadingProps = {
  number: string
  title: string
}

type HighlightProps = {
  children: React.ReactNode
}

// Component for section headings to maintain consistency
const SectionHeading: React.FC<SectionHeadingProps> = ({ number, title }) => (
  <>
    <div className='flex items-baseline mb-1'>
      <span className='text-gray-400 text-sm font-mono mr-4 w-8'>
        {number.padStart(2, '0')}
      </span>
      <h2 className='text-sm font-semibold uppercase tracking-wider text-gray-600'>
        {title}
      </h2>
    </div>
    <hr className='border-gray-300 mb-6' />
  </>
)

// Highlight component for consistent styling
const Highlight: React.FC<HighlightProps> = ({ children }) => (
  <span className='bg-amber-50 text-amber-900 px-1 py-0.5 rounded'>
    {children}
  </span>
)

const BlogPost: React.FC = () => {
  return (
    <div className='min-h-screen bg-white p-8'>
      <TerminalDisplay />

      <article className='max-w-3xl mx-auto text-gray-800'>
        <h1 className='text-4xl font-bold mb-10 text-black'>
          Why Am I Doing This?
        </h1>

        <SectionHeading number='1' title='The Arc of Collaboration' />

        <p className='mb-6 text-gray-700 leading-relaxed'>
          <Highlight>Kevin Kwok</Highlight> posted an excellent article a while
          back about <Highlight>The Arc of Collaboration</Highlight>. I highly
          recommend reading the whole thing, but the main argument is that
          productivity and collaboration have always been handled as two
          separate workflows:
        </p>

        <ol className='list-decimal list-inside space-y-2 mb-6 text-gray-700 leading-relaxed pl-4'>
          <li>
            We started with individual files that we sent back and forth via
            email
          </li>
          <li>
            Then Dropbox came along and enabled collaboration within documents,
            but communication about these docs remained a separate channel
          </li>
          <li>
            Slack wants to become the central communication channel for all
            productivity apps
          </li>
        </ol>

        <p className='mb-6 text-gray-700 leading-relaxed'>
          The problem, Kevin argues, is that productivity and collaboration
          shouldn't be treated separately. Instead, they should go hand in hand
          and that's exactly what a lot of the latest productivity tools do:
          Figma, Notion, Airtable, etc all have messaging natively built in to
          their apps.
        </p>

        <p className='mb-6 text-gray-700 leading-relaxed'>
          I'm not entirely sure where this obsession with conversational
          interfaces comes from. Perhaps it's a type of anemoia, a nostalgia for
          a future we saw in StarTrek that never became reality. Or maybe it's
          simply that people look at the term "natural language" and think
          "well, if it's <i>natural</i> then it must be the logical end state".
        </p>

        <p className='mb-6 text-gray-700 leading-relaxed'>
          I'm here to tell you that it's not.
        </p>

        <SectionHeading number='2' title='Data Transfer Mechanisms' />

        <p className='mb-6 text-gray-700 leading-relaxed'>
          When people say "natural language" what they mean is written or verbal
          communication. Natural language is a way to exchange ideas and
          knowledge between humans. In other words, it's a data transfer
          mechanism.
        </p>

        <p className='mb-6 text-gray-700 leading-relaxed'>
          Data transfer mechanisms have two critical factors: speed and
          lossiness.
        </p>

        <p className='mb-6 text-gray-700 leading-relaxed'>
          Speed determines how quickly data is transferred from the sender to
          the receiver, while lossiness refers to how accurately the data is
          transferred. In an ideal state, you want data transfer to happen at
          maximum speed (instant) and with perfect fidelity (lossless), but
          these two attributes are often a bit of a trade-off.
        </p>
      </article>
    </div>
  )
}

export default BlogPost
