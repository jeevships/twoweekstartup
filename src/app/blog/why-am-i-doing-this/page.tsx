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

type ParagraphProps = {
  children: React.ReactNode
}

type LinkProps = {
  href: string
  children: React.ReactNode
}

// Component for section headings to maintain consistency
const SectionHeading = ({ number, title }: SectionHeadingProps) => (
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
const Highlight = ({ children }: HighlightProps) => (
  <span className='bg-[var(--highlight-bg)] text-[var(--highlight-text)] px-1 py-0.5 rounded'>
    {children}
  </span>
)

// Paragraph component to avoid repeating styles
const Paragraph = ({ children }: ParagraphProps) => (
  <p className='mb-6 text-gray-700 leading-relaxed'>{children}</p>
)

// External link component with consistent props
const ExternalLink = ({ href, children }: LinkProps) => (
  <a href={href} target='_blank' rel='noopener noreferrer'>
    {children}
  </a>
)

const BlogPost = () => {
  return (
    <div className='min-h-screen bg-white p-8'>
      <TerminalDisplay />

      <article className='max-w-3xl mx-auto text-gray-800'>
        <h1 className='text-4xl font-bold mb-10 text-black'>
          Why Am I Doing This?
        </h1>

        <SectionHeading number='1' title='INTRO' />

        <Paragraph>
          So, I got this idea from Peter Lovell&apos;s{' '}
          <ExternalLink href='https://levels.io/12-startups-12-months/'>
            <Highlight>12 Startups in 12 Months</Highlight>
          </ExternalLink>
          , and he got the idea from Jennifer Dewalt&apos;s{' '}
          <ExternalLink href='https://jenniferdewalt.com/?ref=levels.io'>
            <Highlight>180 Websites in 180 Days</Highlight>
          </ExternalLink>
          . What I&apos;ve noticed recently, after teaching myself how to code,
          is that I tend to spend too much time working on a single project.
          Then I just lose interest or it gets too difficult, and I end up
          quitting and starting over on something new.
        </Paragraph>

        <Paragraph>
          Another thing is, I&apos;m expecting most of these attempts to fail. I
          think Peter Lovell mentioned his failure rate is around 95%. So, if I
          do 12 startups in 12 months and they all fail, that&apos;s potentially
          a whole year wasted without building a profitable web app.
        </Paragraph>

        <Paragraph>
          That&apos;s why the idea of doing one every two weeks came to mind. I
          know it might seem a bit crazy because you can&apos;t really create a
          great app in just two weeks. But I think the core of this idea is to
          force myself to just ship a very basic MVP and see if there&apos;s
          product-market fit and if it gets any traction. At the very least, if
          I can&apos;t code an app in two weeks, I&apos;ll put out a landing
          page with, you know, a fake payment link or an email list to gauge
          interest. If there&apos;s no interest, I&apos;ll just move on.
        </Paragraph>

        <Paragraph>
          Yeah, so essentially, the plan is to launch a startup every two weeks.
          If, at the end of those two weeks, it doesn&apos;t gain traction,
          I&apos;ll move on to the next idea. However, if I think there&apos;s
          some potential there, I might start the new two-week startup but also
          continue doing some marketing and development on the old one if I see
          promise.
        </Paragraph>
      </article>
    </div>
  )
}

export default BlogPost
